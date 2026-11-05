import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

const TIME_ZONE = "Europe/Berlin";

function berlinTimeToUtc(date: string, time: string): Date {
    const [year, month, day] = date.split("-").map(Number);
    const [hours, minutes] = time.split(":").map(Number);

    const targetUtc = Date.UTC(year, month - 1, day, hours, minutes);

    const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: TIME_ZONE,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
    });

    let result = targetUtc;

    // Correct the initial UTC guess to the corresponding Berlin local time.
    for (let i = 0; i < 3; i++) {
        const parts = formatter.formatToParts(new Date(result));
        const values = Object.fromEntries(
            parts.map((part) => [part.type, part.value]),
        );

        const representedUtc = Date.UTC(
            Number(values.year),
            Number(values.month) - 1,
            Number(values.day),
            Number(values.hour),
            Number(values.minute),
        );

        result += targetUtc - representedUtc;
    }

    return new Date(result);
}

export async function GET(request: NextRequest) {
    const treatmentId = request.nextUrl.searchParams.get("treatmentId");
    const date = request.nextUrl.searchParams.get("date");
    const therapistId = request.nextUrl.searchParams.get("therapistId");

    if (
        !treatmentId ||
        !date ||
        !/^\d{4}-\d{2}-\d{2}$/.test(date)
    ) {
        return NextResponse.json(
            { error: "A valid treatment and date are required." },
            { status: 400 },
        );
    }

    if (date < "2027-01-01") {
        return NextResponse.json(
            { error: "Bookings are available from January 1, 2027." },
            { status: 400 },
        );
    }

    const supabase = await createClient();

    // Get the treatment duration so we can check the complete appointment.
    const { data: treatment, error: treatmentError } = await supabase
        .from("treatments")
        .select("duration_minutes")
        .eq("id", treatmentId)
        .eq("active", true)
        .eq("available_for_booking", true)
        .single();

    if (treatmentError || !treatment) {
        return NextResponse.json(
            { error: "Treatment not found or unavailable." },
            { status: 404 },
        );
    }

    // Get the slots generated from therapist working hours.
    const { data: slots, error: slotsError } = await supabase.rpc(
        "get_available_booking_slots",
        {
            p_treatment_id: treatmentId,
            p_date: date,
            p_therapist_id:
                therapistId && therapistId !== "any"
                    ? therapistId
                    : null,
        },
    );

    if (slotsError) {
        console.error("Availability error:", slotsError);

        return NextResponse.json(
            { error: "Unable to load available times." },
            { status: 500 },
        );
    }

    // Berlin-local midnight boundaries, converted to UTC for database queries.
    const dayStart = berlinTimeToUtc(date, "00:00");
    const nextDate = new Date(dayStart);
    nextDate.setUTCDate(nextDate.getUTCDate() + 2);

    // Fetch bookings that could overlap this date.
    const { data: bookings, error: bookingsError } = await supabase
        .from("bookings")
        .select("therapist_id, start_at, end_at")
        .in("status", ["pending", "confirmed"])
        .lt("start_at", nextDate.toISOString())
        .gt("end_at", dayStart.toISOString());

    if (bookingsError) {
        console.error("Booking availability error:", bookingsError);

        return NextResponse.json(
            { error: "Unable to check existing bookings." },
            { status: 500 },
        );
    }

    // Fetch manually blocked therapist periods.
    const { data: blockedTimes, error: blockedError } = await supabase
        .from("therapist_blocked_times")
        .select("therapist_id, start_at, end_at")
        .lt("start_at", nextDate.toISOString())
        .gt("end_at", dayStart.toISOString());

    if (blockedError) {
        console.error("Blocked times error:", blockedError);

        return NextResponse.json(
            { error: "Unable to check therapist availability." },
            { status: 500 },
        );
    }

    const durationMs = treatment.duration_minutes * 60 * 1000;

    const availableSlots = (slots ?? []).filter(
        (slot: {
            slot_time: string;
            therapist_id: string;
            therapist_name: string;
        }) => {
            const slotStart = berlinTimeToUtc(date, slot.slot_time);
            const slotEnd = new Date(slotStart.getTime() + durationMs);

            const overlaps = (
                period: { start_at: string; end_at: string },
            ) => {
                const periodStart = new Date(period.start_at).getTime();
                const periodEnd = new Date(period.end_at).getTime();

                return (
                    slotStart.getTime() < periodEnd &&
                    slotEnd.getTime() > periodStart
                );
            };

            const hasBooking = (bookings ?? []).some(
                (booking) =>
                    booking.therapist_id === slot.therapist_id &&
                    overlaps(booking),
            );

            const isManuallyBlocked = (blockedTimes ?? []).some(
                (blocked) =>
                    blocked.therapist_id === slot.therapist_id &&
                    overlaps(blocked),
            );

            return !hasBooking && !isManuallyBlocked;
        },
    );

    return NextResponse.json({ slots: availableSlots });
}
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

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const requiredFields = [
            "treatmentId",
            "therapistId",
            "date",
            "time",
            "guestType",
            "firstName",
            "lastName",
            "email",
            "phone",
            "language",
        ];

        for (const field of requiredFields) {
            if (
                typeof body[field] !== "string" ||
                !body[field].trim()
            ) {
                return NextResponse.json(
                    { error: `Missing required field: ${field}` },
                    { status: 400 },
                );
            }
        }

        if (
            !/^\d{4}-\d{2}-\d{2}$/.test(body.date) ||
            !/^\d{2}:\d{2}$/.test(body.time) ||
            body.date < "2027-01-01"
        ) {
            return NextResponse.json(
                { error: "Please select a valid booking date and time." },
                { status: 400 },
            );
        }

        if (!["chalet", "external"].includes(body.guestType)) {
            return NextResponse.json(
                { error: "Invalid guest type." },
                { status: 400 },
            );
        }

        const supabase = await createClient();

        // Get the real treatment duration from the database.
        const { data: treatment, error: treatmentError } = await supabase
            .from("treatments")
            .select("id, duration_minutes")
            .eq("id", body.treatmentId)
            .eq("active", true)
            .eq("available_for_booking", true)
            .single();

        if (treatmentError || !treatment) {
            return NextResponse.json(
                { error: "This treatment is no longer available." },
                { status: 400 },
            );
        }

        const startAt = berlinTimeToUtc(body.date, body.time);
        const endAt = new Date(
            startAt.getTime() + treatment.duration_minutes * 60 * 1000,
        );

        // Check existing pending and confirmed bookings.
        const { data: existingBookings, error: bookingsError } =
            await supabase
                .from("bookings")
                .select("id")
                .eq("therapist_id", body.therapistId)
                .in("status", ["pending", "confirmed"])
                .lt("start_at", endAt.toISOString())
                .gt("end_at", startAt.toISOString())
                .limit(1);

        if (bookingsError) {
            console.error("Booking conflict check error:", bookingsError);

            return NextResponse.json(
                { error: "Unable to verify therapist availability." },
                { status: 500 },
            );
        }

        if (existingBookings && existingBookings.length > 0) {
            return NextResponse.json(
                {
                    error: "This time slot has just been booked. Please select another time.",
                },
                { status: 409 },
            );
        }

        // Check manually blocked periods.
        const { data: blockedTimes, error: blockedError } = await supabase
            .from("therapist_blocked_times")
            .select("id")
            .eq("therapist_id", body.therapistId)
            .lt("start_at", endAt.toISOString())
            .gt("end_at", startAt.toISOString())
            .limit(1);

        if (blockedError) {
            console.error("Blocked time check error:", blockedError);

            return NextResponse.json(
                { error: "Unable to verify therapist availability." },
                { status: 500 },
            );
        }

        if (blockedTimes && blockedTimes.length > 0) {
            return NextResponse.json(
                {
                    error: "This therapist is unavailable during that time. Please select another time.",
                },
                { status: 409 },
            );
        }

        // Create the booking using your existing database function.
        const { data, error } = await supabase.rpc(
            "create_booking_request",
            {
                p_treatment_id: body.treatmentId,
                p_therapist_id: body.therapistId,
                p_booking_date: body.date,
                p_start_time: body.time,
                p_guest_type: body.guestType,
                p_first_name: body.firstName,
                p_last_name: body.lastName,
                p_email: body.email,
                p_phone: body.phone,
                p_preferred_language: body.language,
                p_allergies: body.allergies || null,
                p_medical_notes: body.medical || null,
                p_guest_notes: body.notes || null,
                p_payment_method: body.payment || "location",
            },
        );

        if (error) {
            console.error("Booking creation error:", error);

            return NextResponse.json(
                { error: error.message || "Unable to create your booking." },
                { status: 400 },
            );
        }

        return NextResponse.json(
            {
                success: true,
                bookingId: data,
            },
            { status: 201 },
        );
    } catch (error) {
        console.error("Booking API error:", error);

        return NextResponse.json(
            { error: "An unexpected error occurred." },
            { status: 500 },
        );
    }
}
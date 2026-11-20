
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        if (!body || typeof body !== "object" || Array.isArray(body)) {
            return NextResponse.json(
                { error: "Invalid booking request." },
                { status: 400 },
            );
        }

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

        // Validate date and time formats.
        if (
            !/^\d{4}-\d{2}-\d{2}$/.test(body.date) ||
            !/^\d{2}:\d{2}$/.test(body.time)
        ) {
            return NextResponse.json(
                { error: "Please select a valid booking date and time." },
                { status: 400 },
            );
        }

        // Validate that the date actually exists.
        const [year, month, day] = body.date.split("-").map(Number);
        const parsedDate = new Date(Date.UTC(year, month - 1, day));

        if (
            parsedDate.getUTCFullYear() !== year ||
            parsedDate.getUTCMonth() !== month - 1 ||
            parsedDate.getUTCDate() !== day
        ) {
            return NextResponse.json(
                { error: "Please select a valid booking date." },
                { status: 400 },
            );
        }

        // Validate time.
        const [hours, minutes] = body.time.split(":").map(Number);

        if (
            !Number.isInteger(hours) ||
            !Number.isInteger(minutes) ||
            hours > 23 ||
            minutes > 59
        ) {
            return NextResponse.json(
                { error: "Please select a valid booking time." },
                { status: 400 },
            );
        }

        // Validate guest type.
        if (!["chalet", "external"].includes(body.guestType)) {
            return NextResponse.json(
                { error: "Invalid guest type." },
                { status: 400 },
            );
        }

        const supabase = await createClient();

        // Create the booking through the database function.
        const { data, error } = await supabase.rpc(
            "create_booking_request_with_reference",
            {
                p_treatment_id: body.treatmentId,
                p_therapist_id: body.therapistId,
                p_booking_date: body.date,
                p_start_time: body.time,
                p_guest_type: body.guestType,
                p_first_name: body.firstName.trim(),
                p_last_name: body.lastName.trim(),
                p_email: body.email.trim(),
                p_phone: body.phone.trim(),
                p_preferred_language: body.language,
                p_allergies: body.allergies || null,
                p_medical_notes: body.medical || null,
                p_guest_notes: body.notes || null,
                p_payment_method: "location",
            },
        );

        if (error) {
            console.error("Booking creation error:", error);

            const isConflict =
                /booked|overlap|unavailable|blocked|time slot|working hours|future appointment|therapist break/i.test(
                    error.message,
                );

            return NextResponse.json(
                {
                    error: isConflict
                        ? error.message
                        : "Unable to create your booking. Please check your details and try again.",
                },
                { status: isConflict ? 409 : 400 },
            );
        }

        return NextResponse.json(
            { success: true, bookingReference: data },
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

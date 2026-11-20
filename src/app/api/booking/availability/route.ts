
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
    try {
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

        // Validate that the date actually exists.
        const [year, month, day] = date.split("-").map(Number);
        const parsedDate = new Date(Date.UTC(year, month - 1, day));

        if (
            parsedDate.getUTCFullYear() !== year ||
            parsedDate.getUTCMonth() !== month - 1 ||
            parsedDate.getUTCDate() !== day
        ) {
            return NextResponse.json(
                { error: "Please select a valid date." },
                { status: 400 },
            );
        }

        const supabase = await createClient();

        const { data, error } = await supabase.rpc(
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

        if (error) {
            console.error("Availability error:", error);

            return NextResponse.json(
                { error: "Unable to load available times." },
                { status: 500 },
            );
        }

        return NextResponse.json({
            slots: data ?? [],
        });
    } catch (error) {
        console.error("Availability API error:", error);

        return NextResponse.json(
            { error: "An unexpected error occurred." },
            { status: 500 },
        );
    }
}

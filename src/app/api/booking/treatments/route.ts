import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET() {
    const supabase = await createClient();

    const { data, error } = await supabase.rpc("get_public_treatments");

    if (error) {
        console.error("Treatment fetch error:", error);

        return NextResponse.json(
            { error: "Unable to load treatments." },
            { status: 500 },
        );
    }

    return NextResponse.json({ treatments: data ?? [] });
}

import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
    let response = NextResponse.next({
        request,
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },

                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) => {
                        request.cookies.set(name, value);
                    });

                    response = NextResponse.next({
                        request,
                    });

                    cookiesToSet.forEach(({ name, value, options }) => {
                        response.cookies.set(name, value, options);
                    });
                },
            },
        }
    );

    // Refresh and verify the user's authentication.
    const { data, error } = await supabase.auth.getClaims();

    // Protect the booking page and its subroutes.
    const isBookingPage =
        request.nextUrl.pathname === "/booking" ||
        request.nextUrl.pathname.startsWith("/booking/");

    if (isBookingPage && (error || !data?.claims)) {
        const loginUrl = request.nextUrl.clone();

        loginUrl.pathname = "/login";
        loginUrl.search = "";
        loginUrl.searchParams.set(
            "next",
            request.nextUrl.pathname + request.nextUrl.search
        );

        const redirectResponse = NextResponse.redirect(loginUrl);

        // Preserve Supabase session cookies.
        response.cookies.getAll().forEach((cookie) => {
            redirectResponse.cookies.set(cookie);
        });

        return redirectResponse;
    }

    return response;
}

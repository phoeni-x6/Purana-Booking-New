
import { NextRequest, NextResponse } from "next/server";
import { createClient as createAdminClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const escapeHtml = (value: string) =>
    value.replace(/[&<>"']/g, (character) => {
        const entities: Record<string, string> = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        };

        return entities[character];
    });

export async function POST(request: NextRequest) {
    try {
        const { bookingReference } = await request.json();

        if (
            typeof bookingReference !== "string" ||
            !bookingReference.trim()
        ) {
            return NextResponse.json(
                { error: "Booking reference is required." },
                { status: 400 },
            );
        }

        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

        if (!supabaseUrl || !supabaseSecretKey) {
            console.error("Missing Supabase environment variables.");
            return NextResponse.json(
                { error: "Booking service is not configured." },
                { status: 500 },
            );
        }

        const admin = createAdminClient(supabaseUrl, supabaseSecretKey, {
            auth: {
                autoRefreshToken: false,
                persistSession: false,
            },
        });

        const { data: booking, error: bookingError } = await admin
            .from("bookings")
            .select(`
        id,
        booking_reference,
        status,
        start_at,
        end_at,
        payment_method,
        guest_notes,
        guests (
          first_name,
          last_name,
          email,
          phone,
          preferred_language,
          allergies,
          medical_notes,
          guest_type
        ),
        booking_items (
          service_name,
          duration_minutes,
          unit_price,
          currency
        ),
        therapists (
          first_name,
          last_name
        )
      `)
            .eq("booking_reference", bookingReference.trim())
            .maybeSingle();

        if (bookingError) {
            console.error("Booking lookup error:", bookingError);
            return NextResponse.json(
                { error: "Unable to retrieve booking." },
                { status: 500 },
            );
        }

        if (!booking) {
            return NextResponse.json(
                { error: "Booking not found." },
                { status: 404 },
            );
        }

        // Only send emails for newly created pending bookings.
        if (booking.status !== "pending") {
            return NextResponse.json(
                { error: "This booking is not awaiting confirmation." },
                { status: 409 },
            );
        }

        const guest = Array.isArray(booking.guests)
            ? booking.guests[0]
            : booking.guests;

        const therapist = Array.isArray(booking.therapists)
            ? booking.therapists[0]
            : booking.therapists;

        const items = booking.booking_items ?? [];

        if (!guest?.email || !items.length) {
            return NextResponse.json(
                { error: "Booking details are incomplete." },
                { status: 400 },
            );
        }

        const customerName = `${guest.first_name} ${guest.last_name}`;
        const safeName = escapeHtml(customerName);
        const safeReference = escapeHtml(booking.booking_reference);
        const safeTreatment = items
            .map((item) => escapeHtml(item.service_name))
            .join(", ");

        const appointmentDate = new Intl.DateTimeFormat("en-GB", {
            timeZone: "Europe/Berlin",
            dateStyle: "full",
        }).format(new Date(booking.start_at));

        const appointmentTime = new Intl.DateTimeFormat("en-GB", {
            timeZone: "Europe/Berlin",
            hour: "2-digit",
            minute: "2-digit",
        }).format(new Date(booking.start_at));

        const appointmentEnd = new Intl.DateTimeFormat("en-GB", {
            timeZone: "Europe/Berlin",
            hour: "2-digit",
            minute: "2-digit",
        }).format(new Date(booking.end_at));

        const therapistName = therapist
            ? `${therapist.first_name} ${therapist.last_name}`
            : "To be assigned";

        const safeTherapist = escapeHtml(therapistName);

        const treatmentRows = items
            .map((item) => {
                const price = Number(item.unit_price).toFixed(2);
                return `<tr>
          <td style="padding:10px 0;border-bottom:1px solid #eee;">
            ${escapeHtml(item.service_name)}
          </td>
          <td style="padding:10px 0;border-bottom:1px solid #eee;text-align:right;">
            ${price} ${escapeHtml(item.currency)}
          </td>
        </tr>`;
            })
            .join("");


        const customerHtml = `
  <div style="margin:0;padding:32px 12px;background:#f7f5f0;font-family:Arial,Helvetica,sans-serif;color:#3f3528;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e9e3d9;">

      <!-- Header -->
      <div style="padding:32px 28px;text-align:center;background:#f3efe7;">
        <p style="margin:0 0 8px;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#8b7962;">
          Welcome to
        </p>
        <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:30px;font-weight:normal;letter-spacing:1px;color:#3f3528;">
          Purana Ayurveda
        </h1>
        <p style="margin:10px 0 0;font-size:12px;letter-spacing:1px;color:#8b7962;">
          A MOMENT FOR YOUR WELLBEING
        </p>
      </div>

      <!-- Main content -->
      <div style="padding:36px 32px 24px;">
        <p style="margin:0 0 12px;font-size:15px;color:#6f6252;">
          Dear ${safeName},
        </p>

        <h2 style="margin:0 0 16px;font-family:Georgia,'Times New Roman',serif;font-size:26px;font-weight:normal;line-height:1.35;color:#3f3528;">
          Thank you for choosing us.
        </h2>

        <p style="margin:0 0 24px;font-size:14px;line-height:1.8;color:#71695f;">
          We have successfully received your booking request. Thank you for taking the time to arrange your visit with Purana Ayurveda. Our team will review your request and contact you to confirm your appointment.
        </p>

        <!-- Status -->
        <div style="margin:0 0 28px;padding:14px 16px;background:#f8f5ed;border:1px solid #e9dfcb;border-radius:8px;">
          <p style="margin:0;font-size:13px;color:#6f6252;">
            <strong style="color:#3f3528;">Booking status:</strong>
            <span style="display:inline-block;margin-left:6px;padding:5px 10px;background:#eee5d2;border-radius:20px;color:#765c35;font-size:11px;font-weight:bold;">
              PENDING CONFIRMATION
            </span>
          </p>
        </div>

        <!-- Booking reference -->
        <div style="margin-bottom:24px;text-align:center;padding:18px;background:#3f3528;border-radius:8px;">
          <p style="margin:0 0 6px;font-size:11px;letter-spacing:1.5px;color:#d8cbb8;text-transform:uppercase;">
            Your booking reference
          </p>
          <p style="margin:0;font-size:21px;letter-spacing:2px;font-weight:bold;color:#ffffff;">
            ${safeReference}
          </p>
        </div>

        <!-- Appointment details -->
        <h3 style="margin:0 0 14px;font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:normal;color:#3f3528;">
          Your appointment
        </h3>

        <div style="padding:20px;background:#faf9f6;border:1px solid #eee9e0;border-radius:8px;">
          <table role="presentation" style="width:100%;border-collapse:collapse;font-size:13px;">
            <tr>
              <td style="padding:10px 0;color:#8a8073;width:35%;vertical-align:top;">Date</td>
              <td style="padding:10px 0;color:#3f3528;font-weight:bold;">${appointmentDate}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#8a8073;vertical-align:top;">Time</td>
              <td style="padding:10px 0;color:#3f3528;font-weight:bold;">${appointmentTime} – ${appointmentEnd}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#8a8073;vertical-align:top;">Treatment</td>
              <td style="padding:10px 0;color:#3f3528;font-weight:bold;">${safeTreatment}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#8a8073;vertical-align:top;">Therapist</td>
              <td style="padding:10px 0;color:#3f3528;font-weight:bold;">${safeTherapist}</td>
            </tr>
          </table>
        </div>

        <!-- Price details -->
        <h3 style="margin:28px 0 12px;font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:normal;color:#3f3528;">
          Treatment summary
        </h3>

        <table role="presentation" style="width:100%;border-collapse:collapse;font-size:13px;">
          ${treatmentRows}
        </table>

        <p style="margin:26px 0 0;font-size:13px;line-height:1.8;color:#71695f;">
          Please keep this email for your records. If you have any questions about your booking, feel free to get in touch with our team.
        </p>

        <p style="margin:24px 0 0;font-size:14px;line-height:1.7;color:#3f3528;">
          We look forward to welcoming you.
          <br />
          <span style="font-family:Georgia,'Times New Roman',serif;font-size:18px;">Warm regards,</span>
          <br />
          <strong>Purana Ayurveda</strong>
        </p>
      </div>

      <!-- Footer -->
      <div style="padding:22px 28px;background:#f3efe7;text-align:center;border-top:1px solid #e9e3d9;">
        <p style="margin:0 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#3f3528;">
          Purana Ayurveda
        </p>
        <p style="margin:0;font-size:11px;line-height:1.7;color:#8b7962;">
          This is an automated booking notification.<br />
          Please do not reply directly to this email.
        </p>
      </div>

    </div>
  </div>
`;



        const internalHtml = `
  <div style="margin:0;padding:28px 12px;background:#f4f3ef;font-family:Arial,Helvetica,sans-serif;color:#333333;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e8e5de;border-radius:10px;overflow:hidden;">

      <!-- Header -->
      <div style="padding:25px 28px;background:#3f3528;">
        <p style="margin:0 0 7px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#d5c5aa;">
          Purana Ayurveda · Booking management
        </p>
        <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:25px;font-weight:normal;color:#ffffff;">
          New booking request
        </h1>
        <p style="margin:9px 0 0;font-size:13px;color:#e2d9cc;">
          A new appointment request has been submitted through your website.
        </p>
      </div>

      <!-- Status and reference -->
      <div style="padding:22px 28px;border-bottom:1px solid #eeeae3;">
        <table role="presentation" style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="vertical-align:middle;">
              <p style="margin:0 0 5px;font-size:11px;color:#8a8073;text-transform:uppercase;letter-spacing:1px;">
                Booking reference
              </p>
              <p style="margin:0;font-size:20px;font-weight:bold;letter-spacing:1px;color:#3f3528;">
                ${safeReference}
              </p>
            </td>
            <td style="text-align:right;vertical-align:middle;">
              <span style="display:inline-block;padding:7px 12px;background:#f5ead4;border-radius:20px;color:#86642f;font-size:11px;font-weight:bold;">
                PENDING
              </span>
            </td>
          </tr>
        </table>
      </div>

      <div style="padding:26px 28px;">

        <!-- Appointment -->
        <h2 style="margin:0 0 15px;font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:normal;color:#3f3528;">
          Appointment details
        </h2>

        <div style="padding:18px;background:#f8f6f1;border:1px solid #eee9e0;border-radius:8px;">
          <table role="presentation" style="width:100%;border-collapse:collapse;font-size:13px;">
            <tr>
              <td style="padding:9px 0;color:#8a8073;width:35%;vertical-align:top;">Date</td>
              <td style="padding:9px 0;color:#3f3528;font-weight:bold;">${appointmentDate}</td>
            </tr>
            <tr>
              <td style="padding:9px 0;color:#8a8073;vertical-align:top;">Time</td>
              <td style="padding:9px 0;color:#3f3528;font-weight:bold;">${appointmentTime} – ${appointmentEnd}</td>
            </tr>
            <tr>
              <td style="padding:9px 0;color:#8a8073;vertical-align:top;">Treatment</td>
              <td style="padding:9px 0;color:#3f3528;font-weight:bold;">${safeTreatment}</td>
            </tr>
            <tr>
              <td style="padding:9px 0;color:#8a8073;vertical-align:top;">Therapist</td>
              <td style="padding:9px 0;color:#3f3528;font-weight:bold;">${safeTherapist}</td>
            </tr>
          </table>
        </div>

        <!-- Customer -->
        <h2 style="margin:28px 0 15px;font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:normal;color:#3f3528;">
          Customer information
        </h2>

        <table role="presentation" style="width:100%;border-collapse:collapse;font-size:13px;">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eeeae3;color:#8a8073;width:35%;">Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #eeeae3;color:#333;font-weight:bold;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eeeae3;color:#8a8073;">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #eeeae3;color:#333;">${escapeHtml(guest.email)}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eeeae3;color:#8a8073;">Phone</td>
            <td style="padding:10px 0;border-bottom:1px solid #eeeae3;color:#333;">${escapeHtml(guest.phone ?? "Not provided")}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eeeae3;color:#8a8073;">Guest type</td>
            <td style="padding:10px 0;border-bottom:1px solid #eeeae3;color:#333;">${escapeHtml(guest.guest_type ?? "Not specified")}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#8a8073;">Language</td>
            <td style="padding:10px 0;color:#333;">${escapeHtml(guest.preferred_language ?? "Not specified")}</td>
          </tr>
        </table>

        <!-- Payment -->
        <h2 style="margin:28px 0 15px;font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:normal;color:#3f3528;">
          Payment information
        </h2>

        <div style="padding:15px 18px;background:#faf9f6;border:1px solid #eee9e0;border-radius:8px;">
          <p style="margin:0;font-size:13px;color:#71695f;">
            Payment method
          </p>
          <p style="margin:5px 0 0;font-size:14px;font-weight:bold;color:#3f3528;">
            ${escapeHtml(booking.payment_method ?? "Not specified")}
          </p>
        </div>

        <!-- Notes -->
        <h2 style="margin:28px 0 15px;font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:normal;color:#3f3528;">
          Additional information
        </h2>

        <div style="padding:16px;background:#faf9f6;border:1px solid #eee9e0;border-radius:8px;">
          <p style="margin:0 0 13px;font-size:12px;color:#8a8073;">Allergies</p>
          <p style="margin:0 0 18px;font-size:13px;line-height:1.6;color:#333;">
            ${escapeHtml(guest.allergies ?? "None provided")}
          </p>

          <p style="margin:0 0 7px;font-size:12px;color:#8a8073;">Medical notes</p>
          <p style="margin:0 0 18px;font-size:13px;line-height:1.6;color:#333;">
            ${escapeHtml(guest.medical_notes ?? "None provided")}
          </p>

          <p style="margin:0 0 7px;font-size:12px;color:#8a8073;">Customer notes</p>
          <p style="margin:0;font-size:13px;line-height:1.6;color:#333;">
            ${escapeHtml(booking.guest_notes ?? "None provided")}
          </p>
        </div>

        <p style="margin:25px 0 0;padding:15px;background:#f5ead4;border-radius:7px;font-size:13px;line-height:1.6;color:#765c35;">
          <strong>Action required:</strong> Please review this booking request and confirm or contact the customer as necessary.
        </p>
      </div>

      <!-- Footer -->
      <div style="padding:18px 28px;background:#f3efe7;border-top:1px solid #e9e3d9;text-align:center;">
        <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#3f3528;">
          Purana Ayurveda
        </p>
        <p style="margin:6px 0 0;font-size:11px;color:#8b7962;">
          Automated booking notification · ${safeReference}
        </p>
      </div>

    </div>
  </div>
`;


        const notificationEmail = process.env.BOOKING_NOTIFICATION_EMAIL;
        const from = process.env.RESEND_FROM_EMAIL;

        if (!notificationEmail || !from || !process.env.RESEND_API_KEY) {
            console.error("Missing email environment variables.");
            return NextResponse.json(
                { error: "Email service is not configured." },
                { status: 500 },
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const [customerResult, internalResult] = await Promise.all([
            resend.emails.send({
                from,
                to: guest.email,
                subject: `Booking request received – ${booking.booking_reference}`,
                html: customerHtml,
            }),
            resend.emails.send({
                from,
                to: notificationEmail,
                subject: `New booking – ${booking.booking_reference}`,
                html: internalHtml,
            }),
        ]);

        if (customerResult.error || internalResult.error) {
            console.error("Resend error:", {
                customer: customerResult.error,
                internal: internalResult.error,
            });

            return NextResponse.json(
                { error: "One or more booking emails could not be sent." },
                { status: 502 },
            );
        }

        return NextResponse.json({
            success: true,
            message: "Booking emails sent successfully.",
        });
    } catch (error) {
        console.error("Booking email API error:", error);

        return NextResponse.json(
            { error: "An unexpected error occurred while sending emails." },
            { status: 500 },
        );
    }
}


import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(value: string) {
    return value.replace(/[&<>"']/g, (character) => {
        const entities: Record<string, string> = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;",
        };

        return entities[character];
    });
}

export async function POST(request: NextRequest) {
    try {
        const {
            name,
            email,
            phone,
            packageName,
            message,
        } = await request.json();

        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof phone !== "string" ||
            typeof packageName !== "string" ||
            typeof message !== "string"
        ) {
            return NextResponse.json(
                { error: "Invalid form submission." },
                { status: 400 }
            );
        }

        const cleanName = name.trim();
        const cleanEmail = email.trim();
        const cleanPhone = phone.trim();
        const cleanPackage = packageName.trim();
        const cleanMessage = message.trim();

        if (
            !cleanName ||
            !cleanMessage ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) ||
            cleanName.length > 120 ||
            cleanEmail.length > 254 ||
            cleanPhone.length > 50 ||
            cleanPackage.length > 200 ||
            cleanMessage.length > 5000
        ) {
            return NextResponse.json(
                { error: "Please check your submitted information." },
                { status: 400 }
            );
        }

        if (
            !process.env.RESEND_API_KEY ||
            !process.env.RESEND_FROM_EMAIL ||
            !process.env.BOOKING_NOTIFICATION_EMAIL
        ) {
            console.error("Contact email environment variables are missing.");

            return NextResponse.json(
                { error: "Email service is currently unavailable." },
                { status: 500 }
            );
        }

        const safeName = escapeHtml(cleanName);
        const safeEmail = escapeHtml(cleanEmail);
        const safePhone = escapeHtml(cleanPhone || "Not provided");
        const safePackage = escapeHtml(cleanPackage || "Not specified");
        const safeMessage = escapeHtml(cleanMessage).replace(/\n/g, "<br />");
        const resend = new Resend(process.env.RESEND_API_KEY);

        const { error } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL,
            to: process.env.BOOKING_NOTIFICATION_EMAIL,
            replyTo: cleanEmail,
            subject: `New contact inquiry – ${cleanName}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #514C3D;">
          <h2 style="color: #354B38;">New Contact Inquiry</h2>

          <p>You have received a new inquiry through the Purana Ayurveda website.</p>

          <hr style="border: 0; border-top: 1px solid #E3D9C6; margin: 24px 0;" />

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Requested offer:</strong> ${safePackage}</p>

          <h3 style="color: #354B38;">Message</h3>
          <p style="line-height: 1.7;">${safeMessage}</p>

          <hr style="border: 0; border-top: 1px solid #E3D9C6; margin: 24px 0;" />

          <p style="font-size: 12px; color: #8A806C;">
            Sent through the Purana Ayurveda contact form.
          </p>
        </div>
      `,
        });

        if (error) {
            console.error("Resend contact email error:", error);

            return NextResponse.json(
                { error: "Unable to send your inquiry. Please try again." },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);

        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}

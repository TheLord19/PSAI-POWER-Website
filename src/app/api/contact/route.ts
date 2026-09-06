import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  [key: string]: string | undefined;
}

const RECIPIENT_EMAIL = "team@psaipowerinc.ca";

if (!process.env.BREVO_API_KEY) {
  throw new Error("BREVO_API_KEY is not set");
}

const BREVO_API_KEY: string = process.env.BREVO_API_KEY;

export async function POST(request: NextRequest) {
  if (request.method !== "POST") {
    return NextResponse.json(
      { error: "Method not allowed" },
      { status: 405 }
    );
  }

  try {
    const data: ContactFormData = await request.json();

    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    const htmlContent = `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `;

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: [{ email: RECIPIENT_EMAIL }],
        sender: {
          email: "noreply@psaipowerinc.ca",
          name: "PSAI POWER Contact Form",
        },
        replyTo: { email },
        subject: `Contact Form: ${subject}`,
        htmlContent,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error(`Brevo API error (${response.status}):`, error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

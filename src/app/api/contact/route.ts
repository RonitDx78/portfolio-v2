import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // Log to console (wire up Resend/SendGrid/Nodemailer here when ready)
    console.log("[Contact Form Submission]", {
      name,
      email,
      subject,
      message: message.slice(0, 200),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: "Message received." });
  } catch {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

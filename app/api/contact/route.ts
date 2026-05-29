import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    // 1. Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      )
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    // 2. Check for API key
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY in environment variables")
      return NextResponse.json(
        { error: "Contact form email service is currently unconfigured. Please add RESEND_API_KEY to your environment variables." },
        { status: 500 }
      )
    }

    // 3. Initialize Resend and send email
    const resend = new Resend(process.env.RESEND_API_KEY)

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "saishabhasin@gmail.com",
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `You have received a new message from your portfolio contact form.\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`,
    })

    if (error) {
      console.error("Resend API error:", error)
      return NextResponse.json(
        { error: error.message || "Failed to send email via Resend." },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: "Message sent! I'll get back to you soon." },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("Contact API route error:", error)
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred." },
      { status: 500 }
    )
  }
}

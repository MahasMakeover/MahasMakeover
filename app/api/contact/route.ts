import { NextRequest, NextResponse } from 'next/server'
import { sendEmail, sendConfirmationEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Send email to admin
    await sendEmail({
      subject: `New Contact Message from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B5A2B; border-bottom: 2px solid #8B5A2B; padding-bottom: 10px;">New Contact Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td>${data.name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 8px;">
            <strong>Message:</strong>
            <p style="white-space: pre-wrap; margin-top: 10px;">${data.message}</p>
          </div>
        </div>
      `,
      replyTo: data.email,
    })

    // Send confirmation email to user (optional, free with Gmail)
    if (data.email) {
      await sendConfirmationEmail(data.email, data.name, 'contact')
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}


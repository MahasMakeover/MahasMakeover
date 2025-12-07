import { NextRequest, NextResponse } from 'next/server'
import { sendEmail, sendConfirmationEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Send email to admin
    await sendEmail({
      subject: `New Model/Photoshoot Sign-up from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B5A2B; border-bottom: 2px solid #8B5A2B; padding-bottom: 10px;">New Model/Photoshoot Sign-up</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td>${data.name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Age:</td><td>${data.age}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">City:</td><td>${data.city}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Instagram:</td><td><a href="https://instagram.com/${data.instagram?.replace('@', '')}">${data.instagram}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Portfolio:</td><td><a href="${data.portfolioLink}">${data.portfolioLink}</a></td></tr>
            ${data.measurements ? `<tr><td style="padding: 8px 0; font-weight: bold;">Measurements:</td><td>${data.measurements}</td></tr>` : ''}
            <tr><td style="padding: 8px 0; font-weight: bold;">Availability:</td><td>${data.availability}</td></tr>
          </table>
        </div>
      `,
    })

    // Send confirmation email to user (optional, free with Gmail)
    if (data.email) {
      await sendConfirmationEmail(data.email, data.name, 'model')
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Model signup error:', error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Send email to admin
    await sendEmail({
      subject: `New Review from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B5A2B; border-bottom: 2px solid #8B5A2B; padding-bottom: 10px;">New Review Submitted</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td>${data.name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Event Type:</td><td>${data.eventType}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Rating:</td><td>${'⭐'.repeat(data.rating)} (${data.rating}/5)</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 8px;">
            <strong>Review:</strong>
            <p style="white-space: pre-wrap; margin-top: 10px;">${data.review}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Review submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit review' },
      { status: 500 }
    )
  }
}


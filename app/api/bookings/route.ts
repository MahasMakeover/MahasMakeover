import { NextRequest, NextResponse } from 'next/server'
import { sendEmail, sendConfirmationEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const bookingData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone'),
      eventDate: formData.get('eventDate'),
      eventType: formData.get('eventType'),
      numberOfPeople: formData.get('numberOfPeople'),
      location: formData.get('location'),
      budget: formData.get('budget'),
      preferredTrial: formData.get('preferredTrial'),
      trialDate: formData.get('trialDate'),
      notes: formData.get('notes'),
      hearAboutUs: formData.get('hearAboutUs'),
      consent: formData.get('consent'),
    }

    // Send email to admin
    await sendEmail({
      subject: `New Booking Enquiry from ${bookingData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B5A2B; border-bottom: 2px solid #8B5A2B; padding-bottom: 10px;">New Booking Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td>${bookingData.name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${bookingData.email}">${bookingData.email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td><a href="tel:${bookingData.phone}">${bookingData.phone}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Event Date:</td><td>${bookingData.eventDate}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Event Type:</td><td>${bookingData.eventType}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Number of People:</td><td>${bookingData.numberOfPeople}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Location:</td><td>${bookingData.location}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Budget:</td><td>${bookingData.budget || 'Not specified'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Preferred Trial:</td><td>${bookingData.preferredTrial}</td></tr>
            ${bookingData.trialDate ? `<tr><td style="padding: 8px 0; font-weight: bold;">Trial Date:</td><td>${bookingData.trialDate}</td></tr>` : ''}
            <tr><td style="padding: 8px 0; font-weight: bold;">How they heard about us:</td><td>${bookingData.hearAboutUs || 'Not specified'}</td></tr>
            ${bookingData.notes ? `<tr><td style="padding: 8px 0; font-weight: bold;">Notes:</td><td>${bookingData.notes}</td></tr>` : ''}
          </table>
        </div>
      `,
      replyTo: bookingData.email,
    })

    // Send confirmation email to user (optional, free with Gmail)
    if (bookingData.email) {
      await sendConfirmationEmail(bookingData.email, bookingData.name, 'booking')
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Booking submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit booking' },
      { status: 500 }
    )
  }
}

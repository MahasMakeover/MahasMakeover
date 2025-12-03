import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const bookingData = {
      name: formData.get('name'),
      email: formData.get('email'),
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
    if (process.env.SENDGRID_API_KEY && process.env.ADMIN_EMAIL) {
      const adminMsg = {
        to: process.env.ADMIN_EMAIL,
        from: process.env.FROM_EMAIL || 'noreply@mahasmakeover.com',
        subject: `New Booking Enquiry from ${bookingData.name}`,
        html: `
          <h2>New Booking Enquiry</h2>
          <p><strong>Name:</strong> ${bookingData.name}</p>
          <p><strong>Email:</strong> ${bookingData.email}</p>
          <p><strong>Phone:</strong> ${bookingData.phone}</p>
          <p><strong>Event Date:</strong> ${bookingData.eventDate}</p>
          <p><strong>Event Type:</strong> ${bookingData.eventType}</p>
          <p><strong>Number of People:</strong> ${bookingData.numberOfPeople}</p>
          <p><strong>Location:</strong> ${bookingData.location}</p>
          <p><strong>Budget:</strong> ${bookingData.budget || 'Not specified'}</p>
          <p><strong>Preferred Trial:</strong> ${bookingData.preferredTrial}</p>
          ${bookingData.trialDate ? `<p><strong>Trial Date:</strong> ${bookingData.trialDate}</p>` : ''}
          <p><strong>How they heard about us:</strong> ${bookingData.hearAboutUs || 'Not specified'}</p>
          ${bookingData.notes ? `<p><strong>Notes:</strong> ${bookingData.notes}</p>` : ''}
        `,
      }

      await sgMail.send(adminMsg)

      // Send confirmation email to user
      const userMsg = {
        to: bookingData.email as string,
        from: process.env.FROM_EMAIL || 'noreply@mahasmakeover.com',
        subject: 'Thank you for your booking enquiry - Mahas Makeover',
        html: `
          <h2>Thank you, ${bookingData.name}!</h2>
          <p>We received your booking enquiry for ${bookingData.eventDate}. We'll contact you within 24 hours to confirm details and next steps.</p>
          <p>Best regards,<br>Maha's Makeover</p>
        `,
      }

      await sgMail.send(userMsg)
    }

    // TODO: Save to Sanity CMS or database
    // await client.create({
    //   _type: 'booking',
    //   ...bookingData,
    // })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Booking submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit booking' },
      { status: 500 }
    )
  }
}


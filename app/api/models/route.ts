import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Send email to admin
    if (process.env.SENDGRID_API_KEY && process.env.ADMIN_EMAIL) {
      const adminMsg = {
        to: process.env.ADMIN_EMAIL,
        from: process.env.FROM_EMAIL || 'noreply@mahasmakeover.com',
        subject: `New Model/Photoshoot Sign-up from ${data.name}`,
        html: `
          <h2>New Model/Photoshoot Sign-up</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Age:</strong> ${data.age}</p>
          <p><strong>City:</strong> ${data.city}</p>
          <p><strong>Instagram:</strong> ${data.instagram}</p>
          <p><strong>Portfolio Link:</strong> <a href="${data.portfolioLink}">${data.portfolioLink}</a></p>
          ${data.measurements ? `<p><strong>Measurements:</strong> ${data.measurements}</p>` : ''}
          <p><strong>Availability:</strong> ${data.availability}</p>
        `,
      }

      await sgMail.send(adminMsg)
    }

    // TODO: Save to Sanity CMS or database
    // await client.create({
    //   _type: 'modelSignup',
    //   ...data,
    // })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Model signup error:', error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}


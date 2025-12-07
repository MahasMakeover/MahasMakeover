import nodemailer from 'nodemailer'

// Create reusable transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

interface EmailOptions {
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.ADMIN_EMAIL) {
    console.warn('Email not configured. Set GMAIL_USER, GMAIL_APP_PASSWORD, and ADMIN_EMAIL.')
    return false
  }

  try {
    await transporter.sendMail({
      from: `"Mahas Makeover" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo,
    })
    return true
  } catch (error) {
    console.error('Email sending error:', error)
    return false
  }
}

// Optional: Send confirmation to user (free with Gmail)
export async function sendConfirmationEmail(
  to: string,
  name: string,
  type: 'booking' | 'contact' | 'model'
): Promise<boolean> {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    return false
  }

  const messages = {
    booking: {
      subject: 'Thank you for your booking enquiry - Mahas Makeover',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B5A2B;">Thank you, ${name}!</h2>
          <p>We received your booking enquiry and will contact you within 24 hours to confirm details and next steps.</p>
          <p>Best regards,<br><strong>Maha's Makeover</strong></p>
        </div>
      `,
    },
    contact: {
      subject: 'Thank you for contacting us - Mahas Makeover',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B5A2B;">Thank you, ${name}!</h2>
          <p>We received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br><strong>Maha's Makeover</strong></p>
        </div>
      `,
    },
    model: {
      subject: 'Application Received - Mahas Makeover',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B5A2B;">Thank you, ${name}!</h2>
          <p>We received your model/photoshoot application. We'll review it and reach out if there's a match.</p>
          <p>Best regards,<br><strong>Maha's Makeover</strong></p>
        </div>
      `,
    },
  }

  try {
    await transporter.sendMail({
      from: `"Mahas Makeover" <${process.env.GMAIL_USER}>`,
      to,
      subject: messages[type].subject,
      html: messages[type].html,
    })
    return true
  } catch (error) {
    console.error('Confirmation email error:', error)
    return false
  }
}


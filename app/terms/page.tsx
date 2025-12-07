import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Mahas Makeover',
}

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-heading font-bold text-text mb-8">
              Terms of Service
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-neutral mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-text mb-6">
                Please read these Terms of Service carefully before using our
                website and services.
              </p>
              <h2 className="text-2xl font-heading font-bold text-text mt-8 mb-4">
                Services
              </h2>
              <p className="text-text mb-6">
                Maha&apos;s Makeover provides bridal makeup, event makeup, saree
                draping, and makeup classes. All services are subject to
                availability and booking confirmation.
              </p>
              <h2 className="text-2xl font-heading font-bold text-text mt-8 mb-4">
                Booking and Cancellation
              </h2>
              <p className="text-text mb-6">
                Bookings are confirmed upon receipt of payment or deposit as
                agreed. Cancellation policies will be communicated at the time of
                booking.
              </p>
              <h2 className="text-2xl font-heading font-bold text-text mt-8 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-text mb-6">
                Maha&apos;s Makeover shall not be liable for any indirect, incidental,
                or consequential damages arising from the use of our services.
              </p>
              <h2 className="text-2xl font-heading font-bold text-text mt-8 mb-4">
                Contact Us
              </h2>
              <p className="text-text mb-6">
                If you have any questions about these Terms, please contact us
                at mahasmakeoverr@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


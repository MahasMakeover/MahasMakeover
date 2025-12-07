import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Mahas Makeover',
}

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-heading font-bold text-text mb-8">
              Privacy Policy
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-neutral mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-text mb-6">
                At Maha&apos;s Makeover, we are committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard
                your personal information.
              </p>
              <h2 className="text-2xl font-heading font-bold text-text mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="text-text mb-6">
                We collect information that you provide directly to us, such as
                when you fill out a booking form, contact us, or subscribe to
                our newsletter. This may include your name, email address, phone
                number, and event details.
              </p>
              <h2 className="text-2xl font-heading font-bold text-text mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-text mb-6">
                We use the information we collect to provide our services,
                respond to your inquiries, send you updates about our services,
                and improve our website.
              </p>
              <h2 className="text-2xl font-heading font-bold text-text mt-8 mb-4">
                Data Security
              </h2>
              <p className="text-text mb-6">
                We implement appropriate security measures to protect your
                personal information. However, no method of transmission over
                the Internet is 100% secure.
              </p>
              <h2 className="text-2xl font-heading font-bold text-text mt-8 mb-4">
                Contact Us
              </h2>
              <p className="text-text mb-6">
                If you have any questions about this Privacy Policy, please
                contact us at mahasmakeoverr@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


import { Metadata } from 'next'
import { Mail, Phone, MapPin, Instagram } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Mahas Makeover. Book a consultation or ask us any questions.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-accent2/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-text mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-neutral">
              We&apos;d love to hear from you and discuss your special day
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-text mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">Phone</h3>
                    <a
                      href="tel:+91XXXXXXXXXX"
                      className="text-neutral hover:text-accent transition-colors"
                    >
                      +91 XXXXXXXXXX
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">Email</h3>
                    <a
                      href="mailto:info@mahasmakeover.com"
                      className="text-neutral hover:text-accent transition-colors"
                    >
                      info@mahasmakeover.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">Location</h3>
                    <p className="text-neutral">City, State, India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Instagram className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">Instagram</h3>
                    <a
                      href="https://www.instagram.com/mahas_makeover/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral hover:text-accent transition-colors"
                    >
                      @mahas_makeover
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-text mb-8">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-text font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-text font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-text font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


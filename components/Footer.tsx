import Link from 'next/link'
import { Instagram, Mail, Phone, MapPin, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-text text-base mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold text-accent mb-4">
              Maha&apos;s Makeover
            </h3>
            <p className="text-neutral mb-4 max-w-md">
              Luxury bridal makeup, saree draping, photoshoot styling and
              professional bridal classes — personalised for your special day.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/mahas_makeover/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://youtube.com/@mahasmakeover?si=MwjnY-2k_OBBvQfE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-neutral hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-neutral hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-neutral hover:text-accent transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-neutral hover:text-accent transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone size={18} className="text-accent mt-1 flex-shrink-0" />
                <a href="tel:+917548835393" className="text-neutral hover:text-accent transition-colors">
                  +91 7548835393
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={18} className="text-accent mt-1 flex-shrink-0" />
                <a href="mailto:mahasmakeoverr@gmail.com" className="text-neutral hover:text-accent transition-colors">
                  mahasmakeoverr@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-neutral">Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-start space-x-2">
                <Instagram size={18} className="text-accent mt-1 flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/mahas_makeover/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral hover:text-accent transition-colors"
                >
                  @mahas_makeover
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Youtube size={18} className="text-accent mt-1 flex-shrink-0" />
                <a 
                  href="https://youtube.com/@mahasmakeover?si=MwjnY-2k_OBBvQfE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral hover:text-accent transition-colors"
                >
                  @MahasMakeover
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-neutral text-sm">
                © {new Date().getFullYear()} Maha&apos;s Makeover. All rights reserved.
              </p>
              <p className="text-neutral/60 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
                Developed by{' '}
                <a
                  href="https://www.linkedin.com/in/magesh10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent/80 hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  Mageshwaran Ramesh
                  <Linkedin size={12} />
                </a>
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-neutral hover:text-accent transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral hover:text-accent transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

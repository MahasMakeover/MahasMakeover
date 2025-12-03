'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 to-accent2/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
            Ready to Transform Your Special Day?
          </h2>
          <p className="text-lg text-neutral mb-8">
            Book a free 15-minute consultation to discuss your vision and
            discover how we can make your celebration unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-xl hover:scale-105"
            >
              Book a Consultation
            </Link>
            <Link
              href="/classes"
              className="bg-white text-accent px-8 py-4 rounded-full text-lg font-semibold hover:bg-base transition-all border-2 border-accent"
            >
              Join a Class
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles, Heart, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient and decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent2/5 to-accent/10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent2/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm">
            <Sparkles className="text-accent" size={16} />
            <span className="text-accent text-sm font-medium tracking-wide uppercase">Start Your Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text mb-6">
            Ready to Transform Your Special Day?
          </h2>
          <p className="text-lg md:text-xl text-neutral mb-10 max-w-2xl mx-auto">
            Book a free 15-minute consultation to discuss your vision and
            discover how we can make your celebration unforgettable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA */}
            <Link
              href="/book"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-gradient-to-r from-accent to-accent2 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Heart size={20} className="group-hover:scale-110 transition-transform" />
                Book a Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent2 to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            
            {/* Secondary CTA */}
            <Link
              href="/classes"
              className="group relative inline-flex items-center justify-center gap-3 bg-white text-accent px-10 py-5 rounded-full text-lg font-semibold border-2 border-accent/20 hover:border-accent shadow-sm hover:shadow-lg transition-all"
            >
              <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
              Join a Class
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

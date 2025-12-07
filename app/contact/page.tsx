'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Mail, Phone, MapPin, Instagram, Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [fieldValues, setFieldValues] = useState({ name: '', email: '', message: '' })
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const data = {
      name: fieldValues.name,
      email: fieldValues.email,
      message: fieldValues.message,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setFieldValues({ name: '', email: '', message: '' })
        if (formRef.current) formRef.current.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFieldChange = (field: string, value: string) => {
    setFieldValues(prev => ({ ...prev, [field]: value }))
  }

  const isFieldActive = (field: string) => {
    return fieldValues[field as keyof typeof fieldValues]?.length > 0
  }

  return (
    <div className="pt-20">
      {/* Hero Section with Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-2.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 drop-shadow-2xl">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              We&apos;d love to hear from you and discuss your special day
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-base to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Details */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                <Sparkles className="text-accent" size={16} />
                <span className="text-accent text-sm font-medium tracking-wide uppercase">Reach Out</span>
              </div>
              <h2 className="text-4xl font-heading font-bold text-text mb-4">
                Contact Information
              </h2>
              <p className="text-neutral mb-10 text-lg">
                Ready to transform your special day? Get in touch and let&apos;s create something beautiful together.
              </p>
              
              <div className="space-y-8">
                <div className="group flex items-start gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all cursor-pointer">
                  <div className="bg-gradient-to-br from-accent to-accent2 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-text text-lg mb-1">Phone</h3>
                    <a
                      href="tel:+917548835393"
                      className="text-neutral hover:text-accent transition-colors text-lg"
                    >
                      +91 7548835393
                    </a>
                  </div>
                </div>
                
                <div className="group flex items-start gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all cursor-pointer">
                  <div className="bg-gradient-to-br from-accent to-accent2 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-text text-lg mb-1">Email</h3>
                    <a
                      href="mailto:mahassmakeover@gmail.com"
                      className="text-neutral hover:text-accent transition-colors text-lg"
                    >
                      mahassmakeover@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="group flex items-start gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all cursor-pointer">
                  <div className="bg-gradient-to-br from-accent to-accent2 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-text text-lg mb-1">Location</h3>
                    <p className="text-neutral text-lg">Chennai, India</p>
                  </div>
                </div>
                
                <div className="group flex items-start gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all cursor-pointer">
                  <div className="bg-gradient-to-br from-accent to-accent2 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Instagram className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-text text-lg mb-1">Instagram</h3>
                    <a
                      href="https://www.instagram.com/mahas_makeover/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral hover:text-accent transition-colors text-lg"
                    >
                      @mahas_makeover
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent2/5 rounded-full blur-3xl" />
              
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-accent/10 p-8 md:p-10 border border-accent/10">
                {/* Form header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-accent2 rounded-2xl shadow-lg mb-4">
                    <Send className="text-white" size={28} />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-text">
                    Send a Message
                  </h2>
                  <p className="text-neutral mt-2">We&apos;ll get back to you within 24 hours</p>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-green-600" size={24} />
                    </div>
                    <div>
                      <p className="text-green-800 font-semibold">Message Sent!</p>
                      <p className="text-green-700 text-sm">Thank you for reaching out. We&apos;ll be in touch soon.</p>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-5 bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <AlertCircle className="text-red-600" size={24} />
                    </div>
                    <div>
                      <p className="text-red-800 font-semibold">Something went wrong</p>
                      <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        isFieldActive('name')
                          ? '-top-2.5 text-xs text-accent bg-white px-2 font-medium z-10' 
                          : 'top-4 text-neutral'
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={fieldValues.name}
                      onChange={(e) => handleFieldChange('name', e.target.value)}
                      className="w-full px-5 py-4 rounded-xl border-2 border-neutral/20 focus:border-accent focus:outline-none bg-transparent text-text transition-all"
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        isFieldActive('email')
                          ? '-top-2.5 text-xs text-accent bg-white px-2 font-medium z-10' 
                          : 'top-4 text-neutral'
                      }`}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={fieldValues.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      className="w-full px-5 py-4 rounded-xl border-2 border-neutral/20 focus:border-accent focus:outline-none bg-transparent text-text transition-all"
                    />
                  </div>
                  
                  {/* Message Field */}
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        isFieldActive('message')
                          ? '-top-2.5 text-xs text-accent bg-white px-2 font-medium z-10' 
                          : 'top-4 text-neutral'
                      }`}
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={fieldValues.message}
                      onChange={(e) => handleFieldChange('message', e.target.value)}
                      className="w-full px-5 py-4 rounded-xl border-2 border-neutral/20 focus:border-accent focus:outline-none bg-transparent text-text resize-none transition-all"
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden bg-gradient-to-r from-accent to-accent2 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent2 to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </form>
                
                {/* Decorative bottom border */}
                <div className="mt-8 pt-6 border-t border-neutral/10 text-center">
                  <p className="text-sm text-neutral">
                    Or reach out directly via <a href="tel:+917548835393" className="text-accent hover:underline">phone</a> or <a href="https://www.instagram.com/mahas_makeover/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Instagram</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

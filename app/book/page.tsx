'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Calendar, User, Mail, Phone, MapPin, Sparkles, Heart, MessageSquare, CheckCircle } from 'lucide-react'

type BookingFormData = {
  name: string
  email: string
  phone: string
  eventDate: string
  eventType: string
  numberOfPeople: string
  location: string
  budget: string
  preferredTrial: string
  trialDate?: string
  notes?: string
  hearAboutUs: string
  consent: boolean
}

const inputStyles = "w-full px-5 py-4 rounded-xl border-2 border-neutral/20 focus:border-accent focus:outline-none bg-white/50 backdrop-blur-sm text-text transition-all placeholder:text-neutral/50"
const selectStyles = "w-full px-5 py-4 rounded-xl border-2 border-neutral/20 focus:border-accent focus:outline-none bg-white/50 backdrop-blur-sm text-text transition-all appearance-none cursor-pointer"
const labelStyles = "block text-text font-medium mb-2 flex items-center gap-2"

function BookForm() {
  const searchParams = useSearchParams()
  const eventTypeParam = searchParams.get('type')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<BookingFormData>({
    defaultValues: {
      eventType: eventTypeParam === 'class' ? 'Class' : '',
      preferredTrial: 'no',
    },
  })

  const preferredTrial = watch('preferredTrial')

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formData = new FormData()
      Object.keys(data).forEach((key) => {
        const value = data[key as keyof BookingFormData]
        if (key !== 'consent' && value !== undefined) {
          formData.append(key, String(value))
        }
      })
      formData.append('consent', data.consent ? 'true' : 'false')

      const response = await fetch('/api/bookings', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSubmitStatus('success')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section with Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-1.jpg"
            alt="Book a Consultation"
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
              Book a Consultation
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Fill out the form below and we&apos;ll get back to you within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gradient-to-b from-base via-white to-base relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent2/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl shadow-accent/10 border border-accent/10"
            >
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg mb-6">
                    <CheckCircle className="text-white" size={48} />
                  </div>
                  <h2 className="text-4xl font-heading font-bold text-text mb-4">
                    Thank You!
                  </h2>
                  <p className="text-lg text-neutral mb-8 max-w-md mx-auto">
                    We&apos;ve received your booking enquiry. We&apos;ll contact you
                    within 24 hours to confirm details and next steps.
                  </p>
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent2 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all"
                  >
                    <Heart size={20} />
                    Return to Home
                  </a>
                </div>
              ) : (
                <>
                  {/* Form Header */}
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
                      <Sparkles className="text-accent" size={16} />
                      <span className="text-accent text-sm font-medium tracking-wide uppercase">Booking Request</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-text">
                      Tell Us About Your Event
                    </h2>
                    <p className="text-neutral mt-2">Fields marked with * are required</p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Personal Information Section */}
                    <div className="bg-gradient-to-br from-accent/5 to-transparent p-6 rounded-2xl border border-accent/10">
                      <h3 className="text-xl font-heading font-semibold text-text mb-6 flex items-center gap-2">
                        <User className="text-accent" size={20} />
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className={labelStyles}>
                            <User size={16} className="text-accent" />
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            placeholder="Enter your full name"
                            {...register('name', { required: 'Name is required' })}
                            className={inputStyles}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                              <span className="w-1 h-1 bg-red-500 rounded-full" />
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="email" className={labelStyles}>
                            <Mail size={16} className="text-accent" />
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            placeholder="your@email.com"
                            {...register('email', {
                              required: 'Email is required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                              },
                            })}
                            className={inputStyles}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                              <span className="w-1 h-1 bg-red-500 rounded-full" />
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mt-6">
                        <label htmlFor="phone" className={labelStyles}>
                          <Phone size={16} className="text-accent" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="+91 XXXXX XXXXX"
                          {...register('phone', { required: 'Phone is required' })}
                          className={inputStyles}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                            <span className="w-1 h-1 bg-red-500 rounded-full" />
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Event Details Section */}
                    <div className="bg-gradient-to-br from-accent2/5 to-transparent p-6 rounded-2xl border border-accent2/10">
                      <h3 className="text-xl font-heading font-semibold text-text mb-6 flex items-center gap-2">
                        <Calendar className="text-accent2" size={20} />
                        Event Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="eventDate" className={labelStyles}>
                            <Calendar size={16} className="text-accent" />
                            Event Date *
                          </label>
                          <input
                            type="date"
                            id="eventDate"
                            {...register('eventDate', {
                              required: 'Event date is required',
                            })}
                            className={inputStyles}
                          />
                          {errors.eventDate && (
                            <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                              <span className="w-1 h-1 bg-red-500 rounded-full" />
                              {errors.eventDate.message}
                            </p>
                          )}
                        </div>
                        <div className="relative">
                          <label htmlFor="eventType" className={labelStyles}>
                            <Sparkles size={16} className="text-accent" />
                            Event Type *
                          </label>
                          <select
                            id="eventType"
                            {...register('eventType', {
                              required: 'Event type is required',
                            })}
                            className={selectStyles}
                          >
                            <option value="">Select event type</option>
                            <option value="Bridal">💍 Bridal</option>
                            <option value="Haldi">🌼 Haldi</option>
                            <option value="Mehndi">🌿 Mehndi</option>
                            <option value="Engagement">💎 Engagement</option>
                            <option value="Reception">🎉 Reception</option>
                            <option value="Photoshoot">📸 Photoshoot</option>
                            <option value="Class">📚 Class</option>
                            <option value="Other">✨ Other</option>
                          </select>
                          <div className="absolute right-4 top-[52px] pointer-events-none">
                            <svg className="w-4 h-4 text-neutral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          {errors.eventType && (
                            <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                              <span className="w-1 h-1 bg-red-500 rounded-full" />
                              {errors.eventType.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="relative">
                          <label htmlFor="numberOfPeople" className={labelStyles}>
                            Number of People
                          </label>
                          <select
                            id="numberOfPeople"
                            {...register('numberOfPeople')}
                            className={selectStyles}
                          >
                            <option value="1">1 Person</option>
                            <option value="2">2 People</option>
                            <option value="3">3 People</option>
                            <option value="4">4 People</option>
                            <option value="5">5 People</option>
                            <option value="6+">6+ People</option>
                          </select>
                          <div className="absolute right-4 top-[52px] pointer-events-none">
                            <svg className="w-4 h-4 text-neutral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="location" className={labelStyles}>
                            <MapPin size={16} className="text-accent" />
                            Location / City *
                          </label>
                          <input
                            type="text"
                            id="location"
                            placeholder="e.g., Chennai, Bangalore"
                            {...register('location', {
                              required: 'Location is required',
                            })}
                            className={inputStyles}
                          />
                          {errors.location && (
                            <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                              <span className="w-1 h-1 bg-red-500 rounded-full" />
                              {errors.location.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mt-6 relative">
                        <label htmlFor="budget" className={labelStyles}>
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          {...register('budget')}
                          className={selectStyles}
                        >
                          <option value="">Select budget range</option>
                          <option value="Under ₹10,000">Under ₹10,000</option>
                          <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                          <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                          <option value="₹50,000+">₹50,000+</option>
                        </select>
                        <div className="absolute right-4 top-[52px] pointer-events-none">
                          <svg className="w-4 h-4 text-neutral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Trial Session Section */}
                    <div className="bg-gradient-to-br from-accent/5 to-transparent p-6 rounded-2xl border border-accent/10">
                      <h3 className="text-xl font-heading font-semibold text-text mb-6">
                        Trial Session
                      </h3>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <div className="relative">
                            <input
                              type="radio"
                              value="yes"
                              {...register('preferredTrial')}
                              className="peer sr-only"
                            />
                            <div className="w-6 h-6 border-2 border-neutral/30 rounded-full peer-checked:border-accent peer-checked:bg-accent transition-all flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100" />
                            </div>
                          </div>
                          <span className="text-text group-hover:text-accent transition-colors">Yes, I&apos;d like a trial</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <div className="relative">
                            <input
                              type="radio"
                              value="no"
                              {...register('preferredTrial')}
                              className="peer sr-only"
                            />
                            <div className="w-6 h-6 border-2 border-neutral/30 rounded-full peer-checked:border-accent peer-checked:bg-accent transition-all flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100" />
                            </div>
                          </div>
                          <span className="text-text group-hover:text-accent transition-colors">No trial needed</span>
                        </label>
                      </div>
                      {preferredTrial === 'yes' && (
                        <div className="mt-6">
                          <label htmlFor="trialDate" className={labelStyles}>
                            <Calendar size={16} className="text-accent" />
                            Preferred Trial Date
                          </label>
                          <input
                            type="date"
                            id="trialDate"
                            {...register('trialDate')}
                            className={inputStyles}
                          />
                        </div>
                      )}
                    </div>

                    {/* Additional Information Section */}
                    <div className="bg-gradient-to-br from-accent2/5 to-transparent p-6 rounded-2xl border border-accent2/10">
                      <h3 className="text-xl font-heading font-semibold text-text mb-6 flex items-center gap-2">
                        <MessageSquare className="text-accent2" size={20} />
                        Additional Information
                      </h3>
                      
                      <div className="mb-6">
                        <label htmlFor="notes" className={labelStyles}>
                          <MessageSquare size={16} className="text-accent" />
                          Additional Notes
                        </label>
                        <textarea
                          id="notes"
                          rows={4}
                          placeholder="Tell us about your vision, any specific requirements, or questions..."
                          {...register('notes')}
                          className={`${inputStyles} resize-none`}
                        />
                      </div>

                      <div className="relative">
                        <label htmlFor="hearAboutUs" className={labelStyles}>
                          How did you hear about us?
                        </label>
                        <select
                          id="hearAboutUs"
                          {...register('hearAboutUs')}
                          className={selectStyles}
                        >
                          <option value="">Select option</option>
                          <option value="Instagram">📱 Instagram</option>
                          <option value="Friend">👥 Friend / Family</option>
                          <option value="Google">🔍 Google Search</option>
                          <option value="Other">✨ Other</option>
                        </select>
                        <div className="absolute right-4 top-[52px] pointer-events-none">
                          <svg className="w-4 h-4 text-neutral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Consent & Submit */}
                    <div className="space-y-6">
                      <label className="flex items-start gap-4 cursor-pointer group">
                        <div className="relative mt-1">
                          <input
                            type="checkbox"
                            {...register('consent', {
                              required: 'Consent is required',
                            })}
                            className="peer sr-only"
                          />
                          <div className="w-6 h-6 border-2 border-neutral/30 rounded-lg peer-checked:border-accent peer-checked:bg-accent transition-all flex items-center justify-center">
                            <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="text-neutral group-hover:text-text transition-colors">
                          I consent to being contacted via email and SMS, and I agree to the{' '}
                          <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>{' '}
                          and{' '}
                          <a href="/terms" className="text-accent hover:underline">Terms of Service</a>. *
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-red-500 text-sm flex items-center gap-1">
                          <span className="w-1 h-1 bg-red-500 rounded-full" />
                          {errors.consent.message}
                        </p>
                      )}

                      {submitStatus === 'error' && (
                        <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl flex items-center gap-3">
                          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <p>There was an error submitting your form. Please try again or contact us directly.</p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full overflow-hidden bg-gradient-to-r from-accent to-accent2 text-white px-8 py-5 rounded-xl font-semibold text-lg shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {isSubmitting ? (
                            <>
                              <span className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Heart size={22} className="group-hover:scale-110 transition-transform" />
                              Submit Booking Request
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-accent2 to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function BookPage() {
  return (
    <Suspense fallback={
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-b from-base to-white">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-accent2 rounded-2xl shadow-lg mb-4 animate-pulse">
            <Sparkles className="text-white" size={28} />
          </div>
          <p className="text-neutral">Loading...</p>
        </div>
      </div>
    }>
      <BookForm />
    </Suspense>
  )
}

'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

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
  referenceImages?: FileList
  notes?: string
  hearAboutUs: string
  consent: boolean
}

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
        if (key === 'referenceImages' && value instanceof FileList) {
          Array.from(value).forEach((file) => {
            formData.append('referenceImages', file)
          })
        } else if (key !== 'consent' && value !== undefined) {
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
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-accent2/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-text mb-6">
              Book a Consultation
            </h1>
            <p className="text-xl text-neutral">
              Fill out the form below and we&apos;ll get back to you within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-sm"
            >
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✓</div>
                  <h2 className="text-3xl font-heading font-bold text-text mb-4">
                    Thank You!
                  </h2>
                  <p className="text-lg text-neutral mb-8">
                    We&apos;ve received your booking enquiry. We&apos;ll contact you
                    within 24 hours to confirm details and next steps.
                  </p>
                  <a
                    href="/"
                    className="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-all"
                  >
                    Return to Home
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-text font-medium mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-text font-medium mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-text font-medium mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone', { required: 'Phone is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="eventDate"
                        className="block text-text font-medium mb-2"
                      >
                        Event Date *
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        {...register('eventDate', {
                          required: 'Event date is required',
                        })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      {errors.eventDate && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.eventDate.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="eventType"
                        className="block text-text font-medium mb-2"
                      >
                        Event Type *
                      </label>
                      <select
                        id="eventType"
                        {...register('eventType', {
                          required: 'Event type is required',
                        })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Select event type</option>
                        <option value="Bridal">Bridal</option>
                        <option value="Haldi">Haldi</option>
                        <option value="Mehndi">Mehndi</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Reception">Reception</option>
                        <option value="Photoshoot">Photoshoot</option>
                        <option value="Class">Class</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.eventType && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.eventType.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="numberOfPeople"
                        className="block text-text font-medium mb-2"
                      >
                        Number of People
                      </label>
                      <select
                        id="numberOfPeople"
                        {...register('numberOfPeople')}
                        className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6+">6+</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="location"
                        className="block text-text font-medium mb-2"
                      >
                        Location / City *
                      </label>
                      <input
                        type="text"
                        id="location"
                        {...register('location', {
                          required: 'Location is required',
                        })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      {errors.location && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.location.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-text font-medium mb-2"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      {...register('budget')}
                      className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under ₹10,000">Under ₹10,000</option>
                      <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                      <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                      <option value="₹50,000+">₹50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-text font-medium mb-2">
                      Preferred Trial Session
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="yes"
                          {...register('preferredTrial')}
                          className="mr-2"
                        />
                        Yes
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="no"
                          {...register('preferredTrial')}
                          className="mr-2"
                        />
                        No
                      </label>
                    </div>
                    {preferredTrial === 'yes' && (
                      <div className="mt-4">
                        <label
                          htmlFor="trialDate"
                          className="block text-text font-medium mb-2"
                        >
                          Preferred Trial Date
                        </label>
                        <input
                          type="date"
                          id="trialDate"
                          {...register('trialDate')}
                          className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="referenceImages"
                      className="block text-text font-medium mb-2"
                    >
                      Reference Images (Optional, max 5MB each)
                    </label>
                    <input
                      type="file"
                      id="referenceImages"
                      multiple
                      accept="image/*"
                      {...register('referenceImages')}
                      className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-text font-medium mb-2"
                    >
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      rows={4}
                      {...register('notes')}
                      className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hearAboutUs"
                      className="block text-text font-medium mb-2"
                    >
                      How did you hear about us?
                    </label>
                    <select
                      id="hearAboutUs"
                      {...register('hearAboutUs')}
                      className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select option</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Friend">Friend</option>
                      <option value="Google">Google</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        {...register('consent', {
                          required: 'Consent is required',
                        })}
                        className="mt-1 mr-2"
                      />
                      <span className="text-sm text-neutral">
                        I consent to being contacted via email and SMS, and I
                        agree to the{' '}
                        <a href="/privacy" className="text-accent hover:underline">
                          Privacy Policy
                        </a>{' '}
                        and{' '}
                        <a href="/terms" className="text-accent hover:underline">
                          Terms of Service
                        </a>
                        . *
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.consent.message}
                      </p>
                    )}
                  </div>

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      There was an error submitting your form. Please try again
                      or contact us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-white px-6 py-4 rounded-full font-semibold hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
                  </button>
                </form>
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
    <Suspense fallback={<div className="pt-20 min-h-screen flex items-center justify-center">Loading...</div>}>
      <BookForm />
    </Suspense>
  )
}


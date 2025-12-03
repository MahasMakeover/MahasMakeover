'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

type ModelFormData = {
  name: string
  age: string
  city: string
  instagram: string
  portfolioLink: string
  availability: string
  measurements?: string
  consent: boolean
}

export default function ModelsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ModelFormData>()

  const onSubmit = async (data: ModelFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/models', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
              Model / Photoshoot Sign-Up
            </h1>
            <p className="text-xl text-neutral">
              Interested in collaborating for bridal photoshoots? Fill out the
              form below!
            </p>
          </div>
        </div>
      </section>

      {/* Model Form */}
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
                    We&apos;ve received your application. We&apos;ll review it and get
                    back to you soon!
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="age"
                        className="block text-text font-medium mb-2"
                      >
                        Age *
                      </label>
                      <input
                        type="number"
                        id="age"
                        {...register('age', { required: 'Age is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      {errors.age && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.age.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-text font-medium mb-2"
                      >
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        {...register('city', { required: 'City is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      {errors.city && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.city.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="instagram"
                      className="block text-text font-medium mb-2"
                    >
                      Instagram Handle *
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      placeholder="@username"
                      {...register('instagram', {
                        required: 'Instagram handle is required',
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    {errors.instagram && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.instagram.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="portfolioLink"
                      className="block text-text font-medium mb-2"
                    >
                      Portfolio / Photos Link *
                    </label>
                    <input
                      type="url"
                      id="portfolioLink"
                      placeholder="https://..."
                      {...register('portfolioLink', {
                        required: 'Portfolio link is required',
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    {errors.portfolioLink && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.portfolioLink.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="measurements"
                      className="block text-text font-medium mb-2"
                    >
                      Measurements (Optional)
                    </label>
                    <input
                      type="text"
                      id="measurements"
                      placeholder="Height, Size, etc."
                      {...register('measurements')}
                      className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="availability"
                      className="block text-text font-medium mb-2"
                    >
                      Availability Dates *
                    </label>
                    <textarea
                      id="availability"
                      rows={3}
                      placeholder="Please provide your available dates for photoshoots"
                      {...register('availability', {
                        required: 'Availability is required',
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    />
                    {errors.availability && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.availability.message}
                      </p>
                    )}
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
                        I consent to the use of my images for marketing purposes
                        and agree to the{' '}
                        <a href="/privacy" className="text-accent hover:underline">
                          Privacy Policy
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
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
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


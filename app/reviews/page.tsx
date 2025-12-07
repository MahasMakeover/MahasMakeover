'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Quote, Heart, Sparkles, MessageSquare, User, Send, ChevronDown, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const reviews = [
  {
    id: 1,
    name: 'Priyanka',
    rating: 5,
    review:
      'Maha transformed my wedding day! The makeup was flawless and lasted all day. Highly recommend!',
    eventType: 'Bridal',
    date: '2024-01-15',
    initial: 'P',
  },
  {
    id: 2,
    name: 'Anjali',
    rating: 5,
    review:
      'The saree draping service was exceptional. Maha has an eye for detail and made me feel like a princess.',
    eventType: 'Reception',
    date: '2024-01-10',
    initial: 'A',
  },
  {
    id: 3,
    name: 'Rithu',
    rating: 5,
    review:
      'Attended the bridal makeup class and learned so much! Maha is a wonderful teacher.',
    eventType: 'Class',
    date: '2024-01-05',
    initial: 'R',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    rating: 5,
    review:
      'Perfect makeup for my engagement! Everyone was asking who did my makeup.',
    eventType: 'Engagement',
    date: '2025-11-20',
    initial: 'S',
  },
  {
    id: 5,
    name: 'Shyamala',
    rating: 5,
    review:
      'The photoshoot makeup was amazing. The looks translated beautifully on camera.',
    eventType: 'Photoshoot',
    date: '2023-12-15',
    initial: 'S',
  },
  {
    id: 6,
    name: 'Kavitha',
    rating: 5,
    review:
      'Maha did makeup for my entire bridal party. Everyone looked stunning and felt so confident!',
    eventType: 'Bridal',
    date: '2024-02-20',
    initial: 'K',
  },
]

const stats = [
  { number: '500+', label: 'Happy Clients' },
  { number: '4.9', label: 'Average Rating' },
  { number: '100%', label: 'Satisfaction' },
]

const inputStyles = "w-full px-5 py-4 rounded-xl border-2 border-neutral/20 focus:border-accent focus:outline-none bg-white/50 backdrop-blur-sm text-text transition-all placeholder:text-neutral/50"
const selectStyles = "w-full px-5 py-4 rounded-xl border-2 border-neutral/20 focus:border-accent focus:outline-none bg-white/50 backdrop-blur-sm text-text transition-all appearance-none cursor-pointer"
const labelStyles = "block text-text font-medium mb-2 flex items-center gap-2"

export default function ReviewsPage() {
  const [showForm, setShowForm] = useState(false)
  const [selectedRating, setSelectedRating] = useState(5)
  const [hoveredRating, setHoveredRating] = useState(0)

  return (
    <div className="pt-20">
      {/* Hero Section with Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery-4.jpg"
            alt="Client Reviews"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                <Star className="text-accent fill-accent" size={16} />
                <span className="text-white/90 text-sm font-medium tracking-wide uppercase">Testimonials</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 drop-shadow-2xl">
                Client Reviews
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                See what our clients say about their experience
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mt-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-1">
                      {stat.number}
                    </div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-gradient-to-b from-base via-white to-base relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent2/5 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
              <Heart className="text-accent" size={16} />
              <span className="text-accent text-sm font-medium tracking-wide uppercase">Love from Our Clients</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
              What They Say
            </h2>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              Real stories from real brides and clients who trusted us with their special moments
            </p>
          </motion.div>

          {/* Reviews grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-all border border-transparent hover:border-accent/10"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="text-accent/20 group-hover:text-accent/40 transition-colors" size={40} />
                </div>
                
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-accent fill-accent"
                      size={20}
                    />
                  ))}
                </div>
                
                {/* Review text */}
                <p className="text-text text-lg leading-relaxed mb-6">
                  &ldquo;{review.review}&rdquo;
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-neutral/10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center shadow-lg shadow-accent/20">
                    <span className="text-white font-heading font-bold text-xl">
                      {review.initial}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-text text-lg">{review.name}</p>
                    <div className="flex items-center gap-2 text-sm text-neutral">
                      <span className="px-2 py-0.5 bg-accent/10 rounded-full text-accent text-xs font-medium">
                        {review.eventType}
                      </span>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Submit Review Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <button
              onClick={() => setShowForm(!showForm)}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-gradient-to-r from-accent to-accent2 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                {showForm ? (
                  <>
                    <ChevronDown size={20} className="rotate-180 transition-transform" />
                    Close Form
                  </>
                ) : (
                  <>
                    <MessageSquare size={20} className="group-hover:scale-110 transition-transform" />
                    Share Your Experience
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent2 to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>

          {/* Review Form */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="max-w-2xl mx-auto mt-12">
                  {/* Form card */}
                  <div className="relative bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl shadow-accent/10 border border-accent/10">
                    {/* Decorative elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent2/5 rounded-full blur-3xl" />
                    
                    {/* Form header */}
                    <div className="text-center mb-8 relative">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-accent2 rounded-2xl shadow-lg mb-4">
                        <Heart className="text-white" size={28} />
                      </div>
                      <h2 className="text-3xl font-heading font-bold text-text">
                        Share Your Experience
                      </h2>
                      <p className="text-neutral mt-2">We&apos;d love to hear about your experience</p>
                    </div>
                    
                    <form className="space-y-6 relative">
                      {/* Name */}
                      <div>
                        <label htmlFor="reviewName" className={labelStyles}>
                          <User size={16} className="text-accent" />
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="reviewName"
                          name="name"
                          placeholder="Enter your name"
                          required
                          className={inputStyles}
                        />
                      </div>
                      
                      {/* Event Type */}
                      <div className="relative">
                        <label htmlFor="eventType" className={labelStyles}>
                          <Sparkles size={16} className="text-accent" />
                          Event Type
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          required
                          className={selectStyles}
                        >
                          <option value="">Select event type</option>
                          <option value="Bridal">💍 Bridal</option>
                          <option value="Haldi">🌼 Haldi</option>
                          <option value="Engagement">💎 Engagement</option>
                          <option value="Reception">🎉 Reception</option>
                          <option value="Photoshoot">📸 Photoshoot</option>
                          <option value="Class">📚 Class</option>
                        </select>
                        <div className="absolute right-4 top-[52px] pointer-events-none">
                          <ChevronDown size={16} className="text-neutral" />
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div>
                        <label className={labelStyles}>
                          <Star size={16} className="text-accent" />
                          Your Rating
                        </label>
                        <div className="flex items-center gap-2 p-4 bg-accent/5 rounded-xl">
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                              key={rating}
                              type="button"
                              onClick={() => setSelectedRating(rating)}
                              onMouseEnter={() => setHoveredRating(rating)}
                              onMouseLeave={() => setHoveredRating(0)}
                              className="transition-transform hover:scale-110"
                            >
                              <Star
                                size={32}
                                className={`transition-colors ${
                                  rating <= (hoveredRating || selectedRating)
                                    ? 'text-accent fill-accent'
                                    : 'text-neutral/30'
                                }`}
                              />
                            </button>
                          ))}
                          <span className="ml-4 text-text font-medium">
                            {selectedRating} Star{selectedRating !== 1 ? 's' : ''}
                          </span>
                        </div>
                        <input type="hidden" name="rating" value={selectedRating} />
                      </div>
                      
                      {/* Review Text */}
                      <div>
                        <label htmlFor="reviewText" className={labelStyles}>
                          <MessageSquare size={16} className="text-accent" />
                          Your Review
                        </label>
                        <textarea
                          id="reviewText"
                          name="reviewText"
                          rows={5}
                          placeholder="Tell us about your experience..."
                          required
                          className={`${inputStyles} resize-none`}
                        />
                      </div>
                      
                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="group relative w-full overflow-hidden bg-gradient-to-r from-accent to-accent2 text-white px-8 py-5 rounded-xl font-semibold text-lg shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                          Submit Review
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-accent2 to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-accent/10 via-accent2/5 to-accent/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent2/10 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm">
              <Sparkles className="text-accent" size={16} />
              <span className="text-accent text-sm font-medium tracking-wide uppercase">Your Turn</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Ready to Create Your Story?
            </h2>
            <p className="text-lg text-neutral mb-10 max-w-2xl mx-auto">
              Join our community of happy clients. Book your consultation and let us make your special day unforgettable.
            </p>
            <Link
              href="/book"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-gradient-to-r from-accent to-accent2 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Heart size={20} className="group-hover:scale-110 transition-transform" />
                Book a Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent2 to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

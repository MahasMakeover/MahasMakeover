'use client'

import { motion } from 'framer-motion'
import { Star, Quote, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const reviews = [
  {
    name: 'Priya',
    rating: 5,
    review: 'Maha transformed my wedding day! The makeup was flawless and lasted all day. Highly recommend!',
    eventType: 'Bridal',
    image: '/review-1.jpg',
  },
  {
    name: 'Anjali',
    rating: 5,
    review: 'The saree draping service was exceptional. Maha has an eye for detail and made me feel like a princess.',
    eventType: 'Reception',
    image: '/review-2.jpg',
  },
  {
    name: 'Rithu',
    rating: 5,
    review: 'Attended the bridal makeup class and learned so much! Maha is a wonderful teacher.',
    eventType: 'Class',
    image: '/review-3.jpg',
  },
]

export default function FeaturedReviews() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent2/5 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Star className="text-accent fill-accent" size={16} />
            <span className="text-accent text-sm font-medium tracking-wide uppercase">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
            Client Reviews
          </h2>
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            See what our clients say about their experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-base to-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-accent/5 hover:border-accent/20"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="text-accent/30" size={40} />
              </div>
              
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-accent fill-accent"
                    size={20}
                  />
                ))}
              </div>
              
              {/* Review text */}
              <p className="text-text mb-6 text-lg leading-relaxed">&ldquo;{review.review}&rdquo;</p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center shadow-lg shadow-accent/20">
                  <span className="text-white font-heading font-bold text-xl">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-text text-lg">{review.name}</p>
                  <p className="text-sm text-neutral">{review.eventType}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/reviews"
            className="group inline-flex items-center gap-2 text-accent font-semibold text-lg hover:text-accent2 transition-colors"
          >
            <span className="relative">
              View all reviews
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all" />
            </span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

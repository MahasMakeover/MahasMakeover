'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
            Client Reviews
          </h2>
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            See what our clients say about their experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-base p-6 rounded-2xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-accent fill-accent"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-text mb-4 italic">&ldquo;{review.review}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-text">{review.name}</p>
                  <p className="text-sm text-neutral">{review.eventType}</p>
                </div>
                {review.image && (
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-semibold">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/reviews"
            className="inline-block text-accent font-semibold hover:underline"
          >
            View all reviews →
          </Link>
        </div>
      </div>
    </section>
  )
}


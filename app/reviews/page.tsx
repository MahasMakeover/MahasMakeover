'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    review:
      'Maha transformed my wedding day! The makeup was flawless and lasted all day. Highly recommend!',
    eventType: 'Bridal',
    date: '2024-01-15',
  },
  {
    id: 2,
    name: 'Anjali Patel',
    rating: 5,
    review:
      'The saree draping service was exceptional. Maha has an eye for detail and made me feel like a princess.',
    eventType: 'Reception',
    date: '2024-01-10',
  },
  {
    id: 3,
    name: 'Riya Mehta',
    rating: 5,
    review:
      'Attended the bridal makeup class and learned so much! Maha is a wonderful teacher.',
    eventType: 'Class',
    date: '2024-01-05',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    rating: 5,
    review:
      'Perfect makeup for my engagement! Everyone was asking who did my makeup.',
    eventType: 'Engagement',
    date: '2023-12-20',
  },
  {
    id: 5,
    name: 'Kavya Nair',
    rating: 5,
    review:
      'The photoshoot makeup was amazing. The looks translated beautifully on camera.',
    eventType: 'Photoshoot',
    date: '2023-12-15',
  },
]

export default function ReviewsPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-accent2/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-text mb-6">
              Client Reviews
            </h1>
            <p className="text-xl text-neutral">
              See what our clients say about their experience
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm"
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
                <p className="text-text mb-4 italic">"{review.review}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-text">{review.name}</p>
                    <p className="text-sm text-neutral">
                      {review.eventType} • {review.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Submit Review Button */}
          <div className="text-center">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-xl"
            >
              {showForm ? 'Close Form' : 'Submit a Review'}
            </button>
          </div>

          {/* Review Form */}
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto mt-12 bg-base p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-heading font-bold text-text mb-6">
                Share Your Experience
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="reviewName"
                    className="block text-text font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="reviewName"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-text font-medium mb-2"
                  >
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select event type</option>
                    <option value="Bridal">Bridal</option>
                    <option value="Haldi">Haldi</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Reception">Reception</option>
                    <option value="Photoshoot">Photoshoot</option>
                    <option value="Class">Class</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="rating"
                    className="block text-text font-medium mb-2"
                  >
                    Rating
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select rating</option>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="reviewText"
                    className="block text-text font-medium mb-2"
                  >
                    Your Review
                  </label>
                  <textarea
                    id="reviewText"
                    name="reviewText"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all"
                >
                  Submit Review
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}


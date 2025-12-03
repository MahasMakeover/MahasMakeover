'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles, Users, Camera, Scissors, GraduationCap } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Bridal Makeup',
    description: 'Full bridal makeup, trial sessions, day-of touch-ups',
    href: '/services#bridal',
  },
  {
    icon: Users,
    title: 'Event Makeup',
    description: 'Haldi, Mehndi, Engagement, Reception, Family events',
    href: '/services#event',
  },
  {
    icon: Camera,
    title: 'Photoshoots',
    description: 'Editorial and pre-wedding photoshoots, location shoots',
    href: '/services#photoshoot',
  },
  {
    icon: Scissors,
    title: 'Saree Draping',
    description: 'Traditional and contemporary draping styles',
    href: '/services#saree',
  },
  {
    icon: GraduationCap,
    title: 'Makeup Classes',
    description: 'Small group and one-on-one makeup training',
    href: '/classes',
  },
]

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-base">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            Comprehensive beauty services tailored for your special occasions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-text mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral mb-6">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-accent font-semibold hover:underline inline-flex items-center"
                >
                  Learn more →
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


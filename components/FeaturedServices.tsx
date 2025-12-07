'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles, Users, Camera, Scissors, GraduationCap, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Bridal Makeup',
    description: 'Full bridal makeup, trial sessions, day-of touch-ups',
    href: '/services#bridal',
    gradient: 'from-accent/20 to-accent/5',
  },
  {
    icon: Users,
    title: 'Event Makeup',
    description: 'Haldi, Mehndi, Engagement, Reception, Family events',
    href: '/services#event',
    gradient: 'from-accent2/20 to-accent2/5',
  },
  {
    icon: Camera,
    title: 'Photoshoots',
    description: 'Editorial and pre-wedding photoshoots, location shoots',
    href: '/services#photoshoot',
    gradient: 'from-accent/20 to-accent2/10',
  },
  {
    icon: Scissors,
    title: 'Saree Draping',
    description: 'Traditional and contemporary draping styles',
    href: '/services#saree',
    gradient: 'from-accent2/20 to-accent/10',
  },
  {
    icon: GraduationCap,
    title: 'Makeup Classes',
    description: 'Small group and one-on-one makeup training',
    href: '/classes',
    gradient: 'from-accent/20 to-accent/5',
  },
]

export default function FeaturedServices() {
  return (
    <section className="py-24 bg-base relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent2/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
            <Sparkles className="text-accent" size={16} />
            <span className="text-accent text-sm font-medium tracking-wide uppercase">What We Offer</span>
          </div>
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
                className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-all border border-transparent hover:border-accent/10"
              >
                <div className={`bg-gradient-to-br ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-text mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral mb-6">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-accent font-semibold group/link"
                >
                  <span className="relative">
                    Learn more
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover/link:w-full transition-all" />
                  </span>
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

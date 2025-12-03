'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Award, Users, Clock, Star } from 'lucide-react'

const stats = [
  { number: '500+', label: 'Happy Brides', icon: Heart },
  { number: '8+', label: 'Years Experience', icon: Clock },
  { number: '1000+', label: 'Events Completed', icon: Users },
  { number: '4.9', label: 'Average Rating', icon: Star },
]

const values = [
  {
    icon: Sparkles,
    title: 'Luxury',
    description: 'Premium products and techniques for a flawless finish',
    color: 'from-accent/20 to-accent/5',
  },
  {
    icon: Heart,
    title: 'Personalization',
    description: 'Tailored looks that reflect your unique style',
    color: 'from-accent2/20 to-accent2/5',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Commitment to quality in every service',
    color: 'from-accent/20 to-accent2/10',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section with Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-1.jpg"
            alt="Maha's Makeover"
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
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 drop-shadow-2xl">
                About Maha's Makeover
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                Transforming bridal dreams into reality with passion, precision, and artistry
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-base">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                    <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-accent" size={32} />
                    </div>
                    <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-neutral font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/ourstory.jpg"
                    alt="Maha's Makeover - Bridal Artistry"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent/10 backdrop-blur-md p-6 rounded-2xl border border-accent/20 shadow-xl hidden lg:block">
                  <div className="text-3xl font-heading font-bold text-accent mb-1">8+</div>
                  <div className="text-sm text-neutral">Years of Excellence</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-text leading-relaxed">
                  <p>
                    Maha's Makeover is a professional bridal makeup service led by a
                    passionate makeup artist who specializes in bridal looks and
                    event makeup for weddings (Haldi, Mehendi, Engagement, Wedding,
                    Reception), photoshoots, and other celebrations.
                  </p>
                  <p>
                    In addition to makeup, the business offers expert saree draping and
                    personalised bridal makeup classes. The business emphasizes luxury,
                    elegance, and a modern aesthetic, delivering tailored looks that
                    match each client's personality and event.
                  </p>
                  <p>
                    From intimate haldi ceremonies to extravagant receptions, every look
                    is crafted to enhance natural beauty while matching the bride's
                    personality and event theme. With years of experience and a keen eye
                    for detail, we ensure that every client feels confident and beautiful
                    on their special day.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced */}
      <section className="py-20 bg-base">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all"
                >
                  <div className={`bg-gradient-to-br ${value.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="text-accent" size={40} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-text mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
                Our Philosophy
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-square rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/about-1.jpg"
                  alt="Bridal Artistry"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center space-y-6"
              >
                <div className="space-y-4">
                  <h3 className="text-3xl font-heading font-bold text-text">
                    Beauty in Every Detail
                  </h3>
                  <p className="text-lg text-neutral leading-relaxed">
                    We believe that true beauty comes from enhancing what makes you unique.
                    Every brushstroke, every color choice, and every technique is carefully
                    selected to bring out your natural radiance.
                  </p>
                  <p className="text-lg text-neutral leading-relaxed">
                    Our approach combines traditional artistry with modern techniques,
                    ensuring that every bride feels like the most beautiful version of
                    herself on her special day.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center space-y-6"
              >
                <div className="space-y-4">
                  <h3 className="text-3xl font-heading font-bold text-text">
                    Personalized Excellence
                  </h3>
                  <p className="text-lg text-neutral leading-relaxed">
                    No two brides are the same, and neither should their makeup be. We take
                    time to understand your vision, your style, and your personality to
                    create a look that's uniquely yours.
                  </p>
                  <p className="text-lg text-neutral leading-relaxed">
                    From the initial consultation to the final touch-up, we're with you
                    every step of the way, ensuring perfection in every detail.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-square rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/about-2.jpg"
                  alt="Personalized Makeup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-accent2/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-neutral mb-8">
              Let's create something beautiful together. Book your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book"
                className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-xl hover:scale-105"
              >
                Book a Consultation
              </a>
              <a
                href="/gallery"
                className="bg-white text-accent px-8 py-4 rounded-full text-lg font-semibold hover:bg-base transition-all border-2 border-accent"
              >
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


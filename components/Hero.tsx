'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const heroImages = [
  {
    src: '/images/hero-1.jpg',
    alt: 'Luxury bridal makeup look',
    title: 'Luxury Bridal Makeup & Saree Draping',
    subtitle: 'Bespoke bridal looks, photoshoot styling and professional saree draping — personalised for your special day.',
  },
  {
    src: '/images/hero-2.jpg',
    alt: 'Elegant event makeup',
    title: 'Transform Your Special Day',
    subtitle: 'From intimate haldi ceremonies to extravagant receptions, every look is crafted to enhance natural beauty.',
  },
  {
    src: '/images/hero-3.jpg',
    alt: 'Professional photoshoot styling',
    title: 'Professional Makeup Classes',
    subtitle: 'Learn the art of bridal makeup with personalized training sessions.',
  },
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            {/* Fallback gradient background - shows if image doesn't load */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-accent2/30 to-accent/50" />
            {/* Try to load image, fallback to gradient if not available */}
            <div className="absolute inset-0">
              <Image
                src={heroImages[currentIndex].src}
                alt={heroImages[currentIndex].alt}
                fill
                priority={currentIndex === 0}
                quality={90}
                className="object-cover"
                sizes="100vw"
                onLoad={() => setImagesLoaded(true)}
                onError={() => setImagesLoaded(false)}
              />
            </div>
            {/* Elegant gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
            {/* Additional overlay for luxury feel with gold accents */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent2/10" />
            {/* Subtle vignette effect for depth */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.2) 100%)'
              }}
            />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 sm:px-6 lg:px-8 z-10 max-w-5xl">
              {/* <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-6"
              >
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                  <span className="text-white/90 text-sm font-medium tracking-wider uppercase">
                    Premium Bridal Artistry
                  </span>
                </div>
              </motion.div> */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-2xl"
                style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
              >
                {heroImages[currentIndex].title}
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}
              >
                {heroImages[currentIndex].subtitle}
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link
                  href="/book"
                  className="group relative bg-accent text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-2xl hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10">Book a Bridal Trial</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/gallery"
                  className="bg-white/15 backdrop-blur-md text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/25 transition-all border-2 border-white/30 hover:border-white/50 hover:shadow-xl"
                >
                  View Portfolio
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Enhanced */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 bg-white/15 backdrop-blur-md p-2 sm:p-4 rounded-full hover:bg-white/25 transition-all border border-white/20 hover:border-white/40 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white group-hover:scale-110 transition-transform w-5 h-5 sm:w-7 sm:h-7" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 bg-white/15 backdrop-blur-md p-2 sm:p-4 rounded-full hover:bg-white/25 transition-all border border-white/20 hover:border-white/40 group"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white group-hover:scale-110 transition-transform w-5 h-5 sm:w-7 sm:h-7" />
      </button>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex space-x-3 items-center">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-accent w-10 h-3 shadow-lg shadow-accent/50'
                : 'bg-white/40 hover:bg-white/60 w-3 h-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}


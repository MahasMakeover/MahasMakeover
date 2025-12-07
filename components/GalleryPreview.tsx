'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Camera, ArrowRight } from 'lucide-react'

const galleryItems = [
  { src: '/images/gallery-1.jpg', alt: 'Bridal look', category: 'Bridal' },
  { src: '/images/gallery-2.jpg', alt: 'Haldi ceremony', category: 'Haldi' },
  { src: '/images/gallery-3.jpg', alt: 'Photoshoot', category: 'Photoshoot' },
  { src: '/images/gallery-4.jpg', alt: 'Saree draping', category: 'Saree draping' },
]

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-base relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
            <Camera className="text-accent" size={16} />
            <span className="text-accent text-sm font-medium tracking-wide uppercase">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            Explore our latest work and transformations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-heading font-semibold text-lg">{item.category}</p>
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
            href="/gallery"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-gradient-to-r from-accent to-accent2 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Camera size={20} className="group-hover:scale-110 transition-transform" />
              View Full Gallery
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent2 to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

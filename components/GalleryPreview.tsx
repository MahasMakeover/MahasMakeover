'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const galleryItems = [
  { src: '/images/gallery-1.jpg', alt: 'Bridal look', category: 'Bridal' },
  { src: '/images/gallery-2.jpg', alt: 'Haldi ceremony', category: 'Haldi' },
  { src: '/images/gallery-3.jpg', alt: 'Photoshoot', category: 'Photoshoot' },
  { src: '/images/gallery-4.jpg', alt: 'Saree draping', category: 'Saree draping' },
]

export default function GalleryPreview() {
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
            Our Portfolio
          </h2>
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            Explore our latest work and transformations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-semibold">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-xl"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}


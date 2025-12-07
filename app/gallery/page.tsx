'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Instagram } from 'lucide-react'
import Image from 'next/image'

const categories = ['All', 'Bridal', 'BridesMaid', 'Celebrity', 'Pre-wedding']

interface GalleryItem {
  id: string | number
  category: string
  src: string
  alt: string
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const galleryItems: GalleryItem[] = [
    { id: 1, category: 'Bridal', src: '/images/gallery-1.jpg', alt: 'Bridal look 1' },
    { id: 2, category: 'Bridal', src: '/images/gallery-2.jpg', alt: 'Bridal look 1' },
    { id: 3, category: 'Bridal', src: '/images/gallery-3.jpg', alt: 'Bridal look 1' },
    { id: 4, category: 'BridesMaid', src: '/images/gallery-4.jpg', alt: 'BridesMaid ceremony' },
    { id: 5, category: 'Celebrity', src: '/images/gallery-5.jpg', alt: 'Celebrity 1' },
    { id: 6, category: 'Pre-wedding', src: '/images/gallery-6.jpg', alt: 'Pre-wedding draping' },
    { id: 7, category: 'Bridal', src: '/images/gallery-7.jpg', alt: 'Bridal look 1' },
    { id: 8, category: 'Bridal', src: '/images/gallery-8.jpg', alt: 'Bridal look 1' },
    { id: 9, category: 'BridesMaid', src: '/images/gallery-9.jpg', alt: 'BridesMaid ceremony' },
    { id: 10, category: 'BridesMaid', src: '/images/gallery-10.jpg', alt: 'BridesMaid ceremony' },
    { id: 11, category: 'Celebrity', src: '/images/gallery-11.jpg', alt: 'Celebrity 1' },
    { id: 12, category: 'Pre-wedding', src: '/images/gallery-12.jpg', alt: 'Pre-wedding draping' },
    { id: 13, category: 'Bridal', src: '/images/gallery-13.jpg', alt: 'Bridal look 1' },
    { id: 14, category: 'Bridal', src: '/images/gallery-14.jpg', alt: 'Bridal look 1' },
    { id: 15, category: 'Bridal', src: '/images/gallery-15.jpg', alt: 'Bridal look 1' },
    { id: 16, category: 'BridesMaid', src: '/images/gallery-16.jpg', alt: 'BridesMaid ceremony' },
    { id: 17, category: 'Celebrity', src: '/images/gallery-17.jpg', alt: 'Celebrity 1' },
    { id: 18, category: 'Celebrity', src: '/images/gallery-18.jpg', alt: 'Pre-wedding draping' },
    { id: 19, category: 'Pre-wedding', src: '/images/gallery-19.jpg', alt: 'Bridal look 1' },
    { id: 20, category: 'Bridal', src: '/images/gallery-20.jpg', alt: 'Bridal look 1' },
    { id: 21, category: 'Bridal', src: '/images/gallery-21.jpg', alt: 'Bridal look 1' },
    { id: 22, category: 'Bridal', src: '/images/gallery-22.jpg', alt: 'BridesMaid ceremony' },
    { id: 23, category: 'BridesMaid', src: '/images/gallery-23.jpg', alt: 'Celebrity 1' },
    { id: 24, category: 'Celebrity', src: '/images/gallery-24.jpg', alt: 'Celebrity 1' },
    { id: 25, category: 'Celebrity', src: '/images/gallery-25.jpg', alt: 'Pre-wedding draping' },
    { id: 26, category: 'Pre-wedding', src: '/images/gallery-26.jpg', alt: 'Bridal look 1' },
    { id: 27, category: 'Bridal', src: '/images/gallery-27.jpg', alt: 'Bridal look 1' },
    { id: 28, category: 'Bridal', src: '/images/gallery-28.jpg', alt: 'Bridal look 1' },
    { id: 29, category: 'Bridal', src: '/images/gallery-29.jpg', alt: 'BridesMaid ceremony' },
    { id: 30, category: 'BridesMaid', src: '/images/gallery-30.jpg', alt: 'Celebrity 1' },
    { id: 31, category: 'Celebrity', src: '/images/gallery-31.jpg', alt: 'Pre-wedding draping' },
    { id: 32, category: 'Pre-wedding', src: '/images/gallery-32.jpg', alt: 'Bridal look 1' },
    { id: 33, category: 'Bridal', src: '/images/gallery-33.jpg', alt: 'Bridal look 1' },
    { id: 34, category: 'Bridal', src: '/images/gallery-34.jpg', alt: 'Bridal look 1' },
    { id: 35, category: 'Bridal', src: '/images/gallery-35.jpg', alt: 'BridesMaid ceremony' },
    { id: 36, category: 'BridesMaid', src: '/images/gallery-36.jpg', alt: 'Celebrity 1' },
    { id: 37, category: 'Celebrity', src: '/images/gallery-37.jpg', alt: 'Celebrity 1' },
    { id: 38, category: 'Celebrity', src: '/images/gallery-38.jpg', alt: 'Pre-wedding draping' },
    { id: 39, category: 'Pre-wedding', src: '/images/gallery-39.jpg', alt: 'Bridal look 1' }
  ]

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  const selectedItem = selectedImage
    ? galleryItems.find((item) => item.id === selectedImage.id)
    : null

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-accent2/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-text mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-neutral">
              Explore our latest work and transformations
            </p>
            <a
              href="https://www.instagram.com/mahas_makeover/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors mt-4"
            >
              <Instagram size={20} />
              <span>Follow @mahas_makeover on Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent text-white shadow-lg'
                    : 'bg-base text-text hover:bg-accent/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item: GalleryItem, index: number) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      duration: 0.4,
                      delay: index * 0.03,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.9,
                    transition: {
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    y: -4,
                    transition: {
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }}
                  transition={{
                    layout: {
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-300"
                  onClick={() => setSelectedImage(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 z-20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <p className="font-semibold text-sm">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.4, 0, 0.2, 1] 
              }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all hover:scale-110"
                aria-label="Close"
              >
                <X className="text-white" size={24} />
              </motion.button>
              <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden shadow-2xl">
                <motion.div
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    width={1200}
                    height={1200}
                    className="w-full h-auto max-h-[90vh] object-contain"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

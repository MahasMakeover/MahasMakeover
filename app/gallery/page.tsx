'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Instagram, Youtube, Camera, Sparkles, Heart, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const categories = ['All', 'Bridal', 'Bridesmaids', 'Celebrity', 'Pre-wedding']

interface GalleryItem {
  id: string | number
  category: string
  src: string
  alt: string
}

const stats = [
  { number: '500+', label: 'Transformations' },
  { number: '100%', label: 'Happy Clients' },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const galleryItems: GalleryItem[] = [
    { id: 1, category: 'Bridal', src: '/images/gallery-1.jpg', alt: 'Bridal look 1' },
    { id: 2, category: 'Bridal', src: '/images/gallery-2.jpg', alt: 'Bridal look 2' },
    { id: 3, category: 'Bridal', src: '/images/gallery-3.jpg', alt: 'Bridal look 3' },
    { id: 4, category: 'Bridesmaids', src: '/images/gallery-4.jpg', alt: 'Bridesmaids look' },
    { id: 5, category: 'Celebrity', src: '/images/gallery-5.jpg', alt: 'Celebrity look' },
    { id: 6, category: 'Pre-wedding', src: '/images/gallery-6.jpg', alt: 'Pre-wedding shoot' },
    { id: 7, category: 'Bridal', src: '/images/gallery-7.jpg', alt: 'Bridal look 4' },
    { id: 8, category: 'Bridal', src: '/images/gallery-8.JPG', alt: 'Bridal look 5' },
    { id: 9, category: 'Bridesmaids', src: '/images/gallery-9.jpg', alt: 'Bridesmaids look 2' },
    { id: 10, category: 'Bridesmaids', src: '/images/gallery-10.jpg', alt: 'Bridesmaids look 3' },
    { id: 11, category: 'Celebrity', src: '/images/gallery-11.jpg', alt: 'Celebrity look 2' },
    { id: 12, category: 'Pre-wedding', src: '/images/gallery-12.jpg', alt: 'Pre-wedding shoot 2' },
    { id: 13, category: 'Bridal', src: '/images/gallery-13.jpg', alt: 'Bridal look 6' },
    { id: 14, category: 'Bridal', src: '/images/gallery-14.jpg', alt: 'Bridal look 7' },
    { id: 15, category: 'Bridal', src: '/images/gallery-15.jpg', alt: 'Bridal look 8' },
    { id: 16, category: 'Bridesmaids', src: '/images/gallery-16.jpg', alt: 'Bridesmaids look 4' },
    { id: 17, category: 'Celebrity', src: '/images/gallery-17.jpg', alt: 'Celebrity look 3' },
    { id: 18, category: 'Celebrity', src: '/images/gallery-18.jpg', alt: 'Celebrity look 4' },
    { id: 19, category: 'Pre-wedding', src: '/images/gallery-19.jpg', alt: 'Pre-wedding shoot 3' },
    { id: 20, category: 'Bridal', src: '/images/gallery-20.jpg', alt: 'Bridal look 9' },
    { id: 21, category: 'Bridal', src: '/images/gallery-21.jpg', alt: 'Bridal look 10' },
    { id: 22, category: 'Bridal', src: '/images/gallery-22.jpg', alt: 'Bridal look 11' },
    { id: 23, category: 'Bridesmaids', src: '/images/gallery-23.jpg', alt: 'Bridesmaids look 5' },
    { id: 24, category: 'Celebrity', src: '/images/gallery-24.jpg', alt: 'Celebrity look 5' },
    { id: 25, category: 'Celebrity', src: '/images/gallery-25.jpg', alt: 'Celebrity look 6' },
    { id: 26, category: 'Pre-wedding', src: '/images/gallery-26.jpg', alt: 'Pre-wedding shoot 4' },
    { id: 27, category: 'Bridal', src: '/images/gallery-27.jpg', alt: 'Bridal look 12' },
    { id: 28, category: 'Bridal', src: '/images/gallery-28.jpg', alt: 'Bridal look 13' },
    { id: 29, category: 'Bridal', src: '/images/gallery-29.jpg', alt: 'Bridal look 14' },
    { id: 30, category: 'Bridesmaids', src: '/images/gallery-30.jpg', alt: 'Bridesmaids look 6' },
    { id: 31, category: 'Celebrity', src: '/images/gallery-31.jpg', alt: 'Celebrity look 7' },
    { id: 32, category: 'Pre-wedding', src: '/images/gallery-32.jpg', alt: 'Pre-wedding shoot 5' },
    { id: 33, category: 'Bridal', src: '/images/gallery-33.jpg', alt: 'Bridal look 15' },
    { id: 34, category: 'Bridal', src: '/images/gallery-34.jpg', alt: 'Bridal look 16' },
    { id: 35, category: 'Bridal', src: '/images/gallery-35.jpg', alt: 'Bridal look 17' },
    { id: 36, category: 'Bridesmaids', src: '/images/gallery-36.jpg', alt: 'Bridesmaids look 7' },
    { id: 37, category: 'Celebrity', src: '/images/gallery-37.jpg', alt: 'Celebrity look 8' },
    { id: 38, category: 'Celebrity', src: '/images/gallery-38.jpg', alt: 'Celebrity look 9' },
    { id: 39, category: 'Pre-wedding', src: '/images/gallery-39.jpg', alt: 'Pre-wedding shoot 6' }
  ]

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item)
    setCurrentIndex(filteredItems.findIndex((i) => i.id === item.id))
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setSelectedImage(filteredItems[newIndex])
  }

  const goToNext = () => {
    const newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setSelectedImage(filteredItems[newIndex])
  }

  return (
    <div className="pt-20">
      {/* Hero Section with Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery-1.jpg"
            alt="Our Gallery"
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
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                <Camera className="text-accent" size={16} />
                <span className="text-white/90 text-sm font-medium tracking-wide uppercase">Portfolio</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 drop-shadow-2xl">
                Our Gallery
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-6">
                Explore our latest work and transformations
              </p>
              
              {/* Social links */}
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.instagram.com/mahas_makeover/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all"
                >
                  <Instagram size={20} className="text-white" />
                  <span className="text-white">@mahas_makeover</span>
                </a>
                <a
                  href="https://youtube.com/@mahasmakeover?si=MwjnY-2k_OBBvQfE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all"
                >
                  <Youtube size={20} className="text-white" />
                  <span className="text-white">@MahasMakeover</span>
                </a>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mt-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-1">
                      {stat.number}
                    </div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white/80 backdrop-blur-xl sticky top-20 z-40 shadow-lg shadow-black/5 border-b border-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-accent to-accent2 text-white shadow-lg shadow-accent/30'
                    : 'bg-base text-text hover:bg-accent/10 border border-transparent hover:border-accent/20'
                }`}
              >
                {category}
                {selectedCategory === category && (
                  <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                    {category === 'All' ? galleryItems.length : galleryItems.filter(i => i.category === category).length}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-b from-base via-white to-base relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent2/5 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Results count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <p className="text-neutral">
              Showing <span className="text-accent font-semibold">{filteredItems.length}</span> {filteredItems.length === 1 ? 'photo' : 'photos'}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <AnimatePresence mode="wait">
              {filteredItems.map((item: GalleryItem, index: number) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      delay: index * 0.02
                    }
                  }}
                  exit={{ 
                    opacity: 0,
                    transition: {
                      duration: 0.2
                    }
                  }}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-1"
                  onClick={() => openLightbox(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content on hover */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-2">
                        {item.category}
                      </span>
                      <p className="text-white text-sm font-medium">{item.alt}</p>
                    </div>
                  </div>
                  
                  {/* Corner decoration */}
                  <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Sparkles className="text-white" size={18} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-accent/10 via-accent2/5 to-accent/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent2/10 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm">
              <Heart className="text-accent" size={16} />
              <span className="text-accent text-sm font-medium tracking-wide uppercase">Be Our Next Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Ready to Be Part of Our Gallery?
            </h2>
            <p className="text-lg text-neutral mb-10 max-w-2xl mx-auto">
              Let us create your perfect look for your special day. Book a consultation and become our next transformation story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-gradient-to-r from-accent to-accent2 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Heart size={20} className="group-hover:scale-110 transition-transform" />
                  Book a Consultation
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent2 to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.instagram.com/mahas_makeover/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-text px-8 py-4 rounded-full font-semibold border-2 border-accent/20 hover:border-accent shadow-sm hover:shadow-lg transition-all"
                >
                  <Instagram size={20} className="text-accent group-hover:scale-110 transition-transform" />
                  Instagram
                </a>
                <a
                  href="https://youtube.com/@mahasmakeover?si=MwjnY-2k_OBBvQfE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-text px-8 py-4 rounded-full font-semibold border-2 border-accent/20 hover:border-accent shadow-sm hover:shadow-lg transition-all"
                >
                  <Youtube size={20} className="text-accent group-hover:scale-110 transition-transform" />
                  YouTube
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-50 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all hover:scale-110 border border-white/20"
              aria-label="Close"
            >
              <X className="text-white" size={24} />
            </motion.button>

            {/* Navigation arrows */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 md:left-8 z-50 bg-white/10 backdrop-blur-md p-4 rounded-full hover:bg-white/20 transition-all hover:scale-110 border border-white/20"
              aria-label="Previous"
            >
              <ChevronLeft className="text-white" size={28} />
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 md:right-8 z-50 bg-white/10 backdrop-blur-md p-4 rounded-full hover:bg-white/20 transition-all hover:scale-110 border border-white/20"
              aria-label="Next"
            >
              <ChevronRight className="text-white" size={28} />
            </motion.button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="relative max-w-5xl max-h-[85vh] w-full mx-4"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <motion.div
                  key={selectedImage.id}
                  initial={{ scale: 1.05, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={1200}
                    height={1600}
                    className="w-full h-auto max-h-[85vh] object-contain"
                    priority
                  />
                </motion.div>
              </div>
              
              {/* Image info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-2">
                      {selectedImage.category}
                    </span>
                    <p className="text-white font-medium">{selectedImage.alt}</p>
                  </div>
                  <div className="text-white/70 text-sm">
                    {currentIndex + 1} / {filteredItems.length}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

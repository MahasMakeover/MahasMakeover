'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Classes', href: '/classes' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Determine if we should use light text (home page with hero background)
  const useLightText = isHomePage && !isScrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-base/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative h-10 w-10 md:h-12 md:w-12">
              <Image
                src="/images/logo.png"
                alt="Maha&apos;s Makeover Logo"
                fill
                className="object-contain"
                sizes="48px"
                priority
              />
            </div>
            <span
              className={`text-xl md:text-2xl font-heading font-bold transition-colors duration-300 ${
                useLightText
                  ? 'text-white drop-shadow-lg'
                  : 'text-accent'
              } group-hover:text-accent`}
              style={
                useLightText
                  ? { textShadow: '0 2px 10px rgba(0,0,0,0.5)' }
                  : {}
              }
            >
              Maha&apos;s Makeover
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors font-medium ${
                  useLightText
                    ? 'text-white/95 hover:text-white drop-shadow-md'
                    : 'text-text hover:text-accent'
                }`}
                style={
                  useLightText
                    ? { textShadow: '0 1px 5px rgba(0,0,0,0.4)' }
                    : {}
                }
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/book"
              className={`px-6 py-2 rounded-full transition-all hover:shadow-lg ${
                useLightText
                  ? 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 hover:border-white/50'
                  : 'bg-accent text-white hover:bg-accent/90'
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              useLightText ? 'text-white drop-shadow-md' : 'text-text'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            style={
              useLightText
                ? { textShadow: '0 1px 5px rgba(0,0,0,0.4)' }
                : {}
            }
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${
              useLightText
                ? 'bg-black/80 backdrop-blur-md border-white/20'
                : 'bg-base border-accent/20'
            }`}
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block transition-colors font-medium py-2 ${
                    useLightText
                      ? 'text-white/95 hover:text-white'
                      : 'text-text hover:text-accent'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/book"
                className={`block px-6 py-3 rounded-full text-center transition-all ${
                  useLightText
                    ? 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30'
                    : 'bg-accent text-white hover:bg-accent/90'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


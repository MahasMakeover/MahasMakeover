import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore our portfolio of bridal makeup, event makeup, photoshoots, and saree draping work.',
}

export default function GalleryLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}


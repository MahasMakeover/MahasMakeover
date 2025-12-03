import Hero from '@/components/Hero'
import FeaturedServices from '@/components/FeaturedServices'
import FeaturedReviews from '@/components/FeaturedReviews'
import GalleryPreview from '@/components/GalleryPreview'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <FeaturedReviews />
      <GalleryPreview />
      <CTA />
    </>
  )
}


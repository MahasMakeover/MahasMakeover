import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@/components/Analytics'

export const metadata: Metadata = {
  title: {
    default: 'Mahas Makeover — Luxury Bridal Makeup Artist',
    template: '%s | Mahas Makeover',
  },
  description: 'Mahas Makeover is a luxury bridal makeup artist offering bridal looks, saree draping, photoshoots and bridal classes. Book your bridal trial today.',
  keywords: ['bridal makeup', 'event makeup', 'saree draping', 'bridal classes', 'makeup artist'],
  authors: [{ name: 'Mahas Makeover' }],
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo.png', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://mahasmakeover.com',
    siteName: 'Mahas Makeover',
    title: 'Mahas Makeover — Luxury Bridal Makeup Artist',
    description: 'Bespoke bridal looks, photoshoot styling and professional saree draping — personalised for your special day.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mahas Makeover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahas Makeover — Luxury Bridal Makeup Artist',
    description: 'Bespoke bridal looks, photoshoot styling and professional saree draping.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Mahas Makeover',
              description: 'Luxury bridal makeup, saree draping, photoshoot styling and bridal classes.',
              url: 'https://mahasmakeover.com',
              telephone: '+91-XXXXXXXXXX',
              image: 'https://mahasmakeover.com/og-image.jpg',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'City',
                addressCountry: 'IN',
              },
              sameAs: [
                'https://www.instagram.com/mahas_makeover/',
                'https://youtube.com/@mahasmakeover?si=MwjnY-2k_OBBvQfE',
              ],
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}


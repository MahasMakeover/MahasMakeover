import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Mahas Makeover - a passionate bridal makeup artist specializing in luxury bridal looks, event makeup, saree draping, and bridal classes.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


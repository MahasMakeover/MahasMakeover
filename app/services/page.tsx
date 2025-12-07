import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Users, Camera, Scissors, GraduationCap, ArrowRight, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive beauty services including bridal makeup, event makeup, photoshoots, saree draping, and bridal makeup classes.',
}

const services = [
  {
    id: 'bridal',
    icon: Sparkles,
    title: 'Bridal Makeup',
    description:
      'Full bridal makeup, trial sessions, day-of touch-ups',
    image: '/images/service-1.jpg',
    details: [
      'Pre-wedding consultation and trial session',
      'Full bridal makeup on wedding day',
      'Touch-ups throughout the day',
      'Premium makeup products',
      'Hair styling coordination',
      'Perfect Saree Draping'
    ],
  },
  {
    id: 'event',
    icon: Users,
    title: 'Event Makeup',
    description:
      'Glamorous looks for weddings, parties, and special occasions',
    image: '/images/service-2.jpg',
    details: [
      'Haldi ceremony makeup',
      'Mehndi function styling',
      'Engagement looks',
      'Sangeeth glamour',
      'Family event makeup',

    ],
  },
  {
    id: 'photoshoot',
    icon: Camera,
    title: 'Photoshoots',
    description:
      'Editorial and pre-wedding photoshoots, glam shoots',
    image: '/images/service-3.jpg',
    details: [
      'celebrity shoots',
      'Pre-wedding photoshoot makeup',
      'Fashion shoots',
      'Location-based styling',
      'HD makeup for cameras',
      'Collaboration with photographers',
    ],
  },
  {
    id: 'saree',
    icon: Scissors,
    title: 'Saree Draping',
    description:
      'Traditional and contemporary draping styles',
    image: '/images/service-4.jpg',
    details: [
      'Traditional saree draping',
      'Contemporary styles',
      'Draping for different occasions',
      'Expert pleating and styling',
      'Accessory coordination',
    ],
  },
  {
    id: 'classes',
    icon: GraduationCap,
    title: 'Bridal Makeup Classes',
    description:
      'Small group and one-on-one makeup training',
    image: '/images/service-5.jpg',
    details: [
      'One-on-one personalized training',
      'Small group workshops',
      'Bridal makeup techniques',
      'Product knowledge',
      'Hands-on practice sessions',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section with Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/service-1.jpg"
            alt="Our Services"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 drop-shadow-2xl">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Comprehensive beauty services tailored for your special occasions
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-12`}
                >
                  <div className="flex-1">
                    <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                      <Icon className="text-accent" size={40} />
                    </div>
                    <h2 className="text-4xl font-heading font-bold text-text mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl text-neutral mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-accent mr-3">✓</span>
                          <span className="text-text">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-accent/10 via-accent2/5 to-accent/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent2/10 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm">
            <Heart className="text-accent" size={16} />
            <span className="text-accent text-sm font-medium tracking-wide uppercase">Let&apos;s Begin</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
            Ready to Book?
          </h2>
          <p className="text-lg text-neutral mb-10 max-w-2xl mx-auto">
            Get in touch to discuss your requirements and receive a personalized quote
          </p>
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
        </div>
      </section>
    </div>
  )
}


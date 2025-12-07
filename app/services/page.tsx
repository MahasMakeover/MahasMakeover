import { Metadata } from 'next'
import Image from 'next/image'
import { Sparkles, Users, Camera, Scissors, GraduationCap } from 'lucide-react'

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
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-accent2/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-text mb-6">
              Our Services
            </h1>
            <p className="text-xl text-neutral">
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
                  <div className="flex-1">
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover service-img"
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
      <section className="py-20 bg-base">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-text mb-6">
            Ready to Book?
          </h2>
          <p className="text-lg text-neutral mb-8 max-w-2xl mx-auto">
            Get in touch to discuss your requirements and receive a personalized
            quote
          </p>
          <a
            href="/book"
            className="inline-block bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-xl"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </div>
  )
}


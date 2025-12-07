import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { GraduationCap, Clock, Users, ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bridal Makeup Classes',
  description: 'Learn the art of bridal makeup with personalized training sessions. Small group and one-on-one classes available.',
}

const classes = [
  {
    title: 'Bridal Makeup Fundamentals',
    description:
      'Learn the basics of bridal makeup including skin prep, foundation matching, and long-lasting techniques.',
    duration: '4 hours',
    price: '₹5,000',
    maxStudents: 6,
    curriculum: [
      'Skin preparation and priming',
      'Foundation and concealer application',
      'Eye makeup techniques',
      'Lip and cheek color',
      'Setting and finishing',
    ],
  },
  {
    title: 'Advanced Bridal Techniques',
    description:
      'Master advanced techniques for special occasions including contouring, highlighting, and glam looks.',
    duration: '6 hours',
    price: '₹8,000',
    maxStudents: 4,
    curriculum: [
      'Customized Skincare Routine',
      'Long-Wear & Waterproof Products',
      'Flawless Blending Techniques',
      'Advanced contouring and highlighting',
      'Baking & Setting',
      'Feature Emphasis',
      'Integrated Hair Styling'
    ],
  },
  {
    title: 'One-on-One Personalized Training',
    description:
      'Customized training session tailored to your skill level and goals.',
    duration: '3 hours',
    price: '₹6,000',
    maxStudents: 1,
    curriculum: [
      'Personalized assessment',
      'Customized lesson plan',
      'Hands-on practice',
      'Product recommendations',
      'Follow-up support',
    ],
  },
]

export default function ClassesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section with Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/service-5.jpg"
            alt="Bridal Makeup Classes"
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
              Bridal Makeup Classes
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Learn the art of bridal makeup with personalized training sessions
            </p>
          </div>
        </div>
      </section>

      {/* Classes List */}
      <section className="py-20 bg-gradient-to-b from-base to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classes.map((classItem, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-all border border-transparent hover:border-accent/10"
              >
                <div className="mb-6">
                  <div className="bg-gradient-to-br from-accent/20 to-accent2/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <GraduationCap className="text-accent" size={28} />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-text mb-3">
                    {classItem.title}
                  </h2>
                  <p className="text-neutral mb-4">{classItem.description}</p>
                </div>
                
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-2 text-text">
                    <Clock size={16} className="text-accent" />
                    <span className="text-sm">{classItem.duration}</span>
                  </div>
                </div>
                
                
                <div className="mb-8">
                  <h3 className="font-semibold text-text mb-3">
                    What You&apos;ll Learn:
                  </h3>
                  <ul className="space-y-2">
                    {classItem.curriculum.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent mr-2 mt-1">✓</span>
                        <span className="text-neutral">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href="/book?type=class"
                  className="group/btn relative block w-full overflow-hidden bg-gradient-to-r from-accent to-accent2 text-white px-6 py-4 rounded-xl text-center font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Enroll Now
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent2 to-accent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-accent/10 via-accent2/5 to-accent/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent2/10 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm">
            <Sparkles className="text-accent" size={16} />
            <span className="text-accent text-sm font-medium tracking-wide uppercase">Get Started</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
            Have Questions?
          </h2>
          <p className="text-lg text-neutral mb-10 max-w-2xl mx-auto">
            Contact us to learn more about our classes and schedule
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-gradient-to-r from-accent to-accent2 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get in Touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent2 to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </section>
    </div>
  )
}


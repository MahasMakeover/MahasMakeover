import { Metadata } from 'next'
import Link from 'next/link'

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
      'Advanced contouring and highlighting',
      'Smoky eye techniques',
      'False lash application',
      'HD makeup for photography',
      'Troubleshooting common issues',
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
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-accent2/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-text mb-6">
              Bridal Makeup Classes
            </h1>
            <p className="text-xl text-neutral">
              Learn the art of bridal makeup with personalized training
              sessions
            </p>
          </div>
        </div>
      </section>

      {/* Classes List */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classes.map((classItem, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-heading font-bold text-text mb-3">
                    {classItem.title}
                  </h2>
                  <p className="text-neutral mb-4">{classItem.description}</p>
                </div>
                <div className="space-y-2 mb-6">
                  <p className="text-text">
                    <span className="font-semibold">Duration:</span>{' '}
                    {classItem.duration}
                  </p>
                  <p className="text-text">
                    <span className="font-semibold">Price:</span>{' '}
                    {classItem.price}
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold text-text mb-3">
                    What You'll Learn:
                  </h3>
                  <ul className="space-y-2">
                    {classItem.curriculum.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-neutral">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/book?type=class"
                  className="block w-full bg-accent text-white px-6 py-3 rounded-full text-center font-semibold hover:bg-accent/90 transition-all"
                >
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-base">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-text mb-6">
            Have Questions?
          </h2>
          <p className="text-lg text-neutral mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our classes and schedule
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}


import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-heading font-bold text-text mb-4">404</h1>
        <h2 className="text-3xl font-heading font-semibold text-text mb-4">
          Page Not Found
        </h2>
        <p className="text-neutral mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-all"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}


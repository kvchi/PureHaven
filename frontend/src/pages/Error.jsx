
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-md">
        <h1 className="text-6xl sm:text-7xl font-bold text-primary">404</h1>
        <p className="text-xl sm:text-2xl text-slate-600 mt-4">Page not found</p>
        <p className="text-slate-500 mt-2 text-sm sm:text-base">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-primary/80 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}

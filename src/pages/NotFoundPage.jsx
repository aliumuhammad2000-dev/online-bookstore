import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-128 max-w-2xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">
        404 error
      </p>
      <h1 className="mt-4 font-serif text-5xl text-[#243e36] sm:text-6xl">
        This page is missing
      </h1>
      <p className="mt-5 max-w-md text-stone-600">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-[#243e36] px-6 py-3 text-sm font-semibold text-white hover:bg-[#31584c]"
      >
        Return to bookstore
      </Link>
    </main>
  )
}

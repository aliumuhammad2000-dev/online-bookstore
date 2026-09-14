import { Link, useParams } from 'react-router-dom'
import BookDetails from '../components/BookDetails'
import { books } from '../data/books'

export default function BookDetailsPage() {
  const { bookId } = useParams()
  const book = books.find((item) => item.id === bookId)

  if (!book) {
    return (
      <main className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
        <h1 className="font-serif text-4xl">Book not found</h1>
        <p className="mt-4 text-stone-600">That book is not in our current catalogue.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-[#243e36] px-6 py-3 text-sm font-semibold text-white">
          Back to books
        </Link>
      </main>
    )
  }

  return (
    <main id="main-content" tabIndex={-1}>
      <div className="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
        <Link to="/" className="text-sm font-semibold text-[#243e36] underline decoration-amber-700 underline-offset-4">
          ← Back to books
        </Link>
      </div>
      <BookDetails book={book} />
    </main>
  )
}

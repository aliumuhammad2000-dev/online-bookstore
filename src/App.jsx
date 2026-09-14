import { useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Hero from './components/Hero'
import BookGrid from './components/BookGrid'
import EmptyState from './components/EmptyState'
import GenreFilter from './components/GenreFilter'
import SearchBar from './components/SearchBar'
import BookDetailsPage from './pages/BookDetailsPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import { books } from './data/books'

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('all')
  const genres = [...new Set(books.map((book) => book.genre))]
  const filteredBooks = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    return books.filter((book) => {
      const matchesSearch = !query || `${book.title} ${book.author}`.toLowerCase().includes(query)
      const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre
      return matchesSearch && matchesGenre
    })
  }, [searchTerm, selectedGenre])

  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <section aria-labelledby="books-heading" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <h1 id="books-heading" className="font-serif text-3xl tracking-tight sm:text-4xl">On the bookshelf</h1>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <GenreFilter value={selectedGenre} genres={genres} onChange={setSelectedGenre} />
        </div>
        <p className="mt-5 text-sm text-stone-500" aria-live="polite">Showing {filteredBooks.length} of {books.length} books</p>
        <div className="mt-6">
          {filteredBooks.length > 0 ? <BookGrid books={filteredBooks} /> : <EmptyState searchTerm={searchTerm} genre={selectedGenre} />}
        </div>
      </section>
    </main>
  )
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:bookId" element={<BookDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}







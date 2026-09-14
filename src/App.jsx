import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import BookGrid from './components/BookGrid'
import BookDetailsPage from './pages/BookDetailsPage'
import { books } from './data/books'

function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <section aria-labelledby="books-heading" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <h1 id="books-heading" className="mb-8 font-serif text-3xl tracking-tight sm:text-4xl">
          On the bookshelf
        </h1>
        <BookGrid books={books} />
      </section>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:bookId" element={<BookDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

import Header from './components/Header'
import Hero from './components/Hero'
import BookGrid from './components/BookGrid'
import { books } from './data/books'

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <section aria-labelledby="books-heading" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <h2 id="books-heading" className="mb-8 font-serif text-3xl tracking-tight sm:text-4xl">
            On the bookshelf
          </h2>
          <BookGrid books={books} />
        </section>
      </main>
    </>
  )
}

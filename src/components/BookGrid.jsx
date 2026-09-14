import BookCard from './BookCard'

export default function BookGrid({ books }) {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          price={book.price}
          cover={book.cover}
        />
      ))}
    </div>
  )
}

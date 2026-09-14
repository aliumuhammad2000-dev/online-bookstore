export default function EmptyState({ searchTerm, genre }) {
  return (
    <div className="rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-12 text-center">
      <h3 className="font-serif text-2xl text-[#243e36]">No books found</h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-stone-600">
        Try a different {searchTerm ? 'search term' : genre !== 'all' ? 'genre' : 'selection'}.
      </p>
    </div>
  )
}

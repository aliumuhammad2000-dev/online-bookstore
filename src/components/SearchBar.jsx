export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex-1">
      <label htmlFor="book-search" className="sr-only">Search books by title or author</label>
      <div className="relative">
        <svg aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </svg>
        <input
          id="book-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search by title or author"
          className="min-h-12 w-full rounded-full border border-stone-300 bg-white pl-12 pr-5 text-sm text-[#243e36] placeholder:text-stone-400 focus:border-[#243e36] focus:outline-none focus:ring-2 focus:ring-[#243e36]/20"
        />
      </div>
    </div>
  )
}

export default function GenreFilter({ value, genres, onChange }) {
  return (
    <div className="sm:w-60">
      <label
        htmlFor="genre-filter"
        className="sr-only"
      >
        Browse by genre
      </label>
      <div className="relative">
        <select
          id="genre-filter"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="min-h-12 w-full appearance-none rounded-3xl border border-stone-300 bg-white px-4 pr-11 text-sm font-semibold text-[#243e36] shadow-sm transition hover:border-stone-400 focus:border-[#243e36] focus:outline-none focus:ring-4 focus:ring-[#243e36]/10"
        >
          <option value="all">All genres</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[#243e36]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      <p className="mt-2 text-xs text-stone-500">
        {value === 'all' ? 'Showing every genre' : `Showing ${value} books`}
      </p>
    </div>
  )
}

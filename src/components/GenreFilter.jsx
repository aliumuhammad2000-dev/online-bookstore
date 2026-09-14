export default function GenreFilter({ value, genres, onChange }) {
  return (
    <div className="sm:w-52">
      <label htmlFor="genre-filter" className="sr-only">Filter books by genre</label>
      <select
        id="genre-filter"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 w-full rounded-full border border-stone-300 bg-white px-5 text-sm text-[#243e36] focus:border-[#243e36] focus:outline-none focus:ring-2 focus:ring-[#243e36]/20"
      >
        <option value="all">All genres</option>
        {genres.map((genre) => <option key={genre} value={genre}>{genre}</option>)}
      </select>
    </div>
  )
}

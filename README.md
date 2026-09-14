# Thundey BookStore

A frontend learning project for a physical bookstore, built one component at a time with React, Tailwind CSS, and Vite. Prices are displayed in Nigerian naira (NGN).

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed in the terminal.

```sh
npm run build
npm run preview
```

`build` creates the production files in `dist`. `preview` serves that build locally.

## Current progress

- Header: store name, Home link, cart icon with a sample count, responsive mobile menu.
- Hero: introduction, Browse Books button, and decorative book illustrations.
- BookCard: reusable cover, title, author, naira price, and Add to Cart button.
- BookGrid: six sample books in one column on mobile, two from 640px, and three from 1024px.
- Catalogue controls: search by title or author, genre filter, result count, and an empty state.

Browse Books, Cart, and Add to Cart are disabled until we implement their functionality. There is no backend, account system, checkout, or real payment processing.

The book covers are locally created SVG illustrations, not official publisher artwork. All prices are sample values, not live retail prices.

## Project structure

```text
src/
  assets/             Local SVG book covers
  components/
    Header.jsx        Navigation and mobile menu state
    Hero.jsx          Static introductory section
    BookCard.jsx      Display for one book
    BookGrid.jsx      Responsive list of BookCards
    BookDetails.jsx   Detailed view for one selected book
  data/
    books.js          Sample catalogue data
  pages/
    BookDetailsPage.jsx  Route for one book's details
    SearchBar.jsx        Controlled title and author search
    GenreFilter.jsx      Controlled genre select
    EmptyState.jsx       No-results message
  App.jsx             Composes the page sections
  main.jsx            Mounts React into index.html
  index.css           Tailwind import and global styles
```

`vite.config.js` enables the React and Tailwind plugins.

## Step 1: Header — components and state

A React component is a function that returns JSX. `className` applies CSS classes in JSX.

- `useState(false)` starts the mobile menu closed.
- `isMenuOpen` stores its current state; `setIsMenuOpen` updates it.
- `onClick` opens or closes the menu.
- `md:flex` keeps navigation visible from 768px upward.
- `aria-expanded` announces the menu state to assistive technology.
- `aria-controls` links the toggle to the navigation element.
- The cart SVG is decorative; its button has an accessible label.

## Step 2: Hero — layout and composition

`App.jsx` imports Hero and renders it below Header inside the main content area.

- The h1 identifies the page's main heading.
- `grid` creates the layout; `lg:grid-cols-2` creates two columns on larger screens.
- `relative` and `absolute` position the decorative book illustrations.
- The illustration is hidden from screen readers because it repeats decorative text.
- Hero does not need state because its content is static.

## Step 3: BookCard — props and currency formatting

BookCard receives `title`, `author`, `price`, and `cover` as props. It can display different books without duplicating its markup.

```jsx
<BookCard
  title="Pride and Prejudice"
  author="Jane Austen"
  price={8500}
  cover={prideCover}
/>
```

`price={8500}` passes a number. `Intl.NumberFormat` formats that number as naira with no decimal places. The numeric value remains available for future cart calculations.

The cover has alternative text and loads lazily. The card uses a flexible column layout so prices and buttons align across cards with different title lengths.
### How the book images are made

The book covers are local SVG files created with code rather than downloaded photographs. SVG stores drawing instructions that the browser renders as an image. For example:

```svg
<svg width="360" height="520" viewBox="0 0 360 520">
  <rect width="360" height="520" fill="#294d40" />
  <text x="180" y="240" text-anchor="middle" fill="#f5e7c5">
    Pride and Prejudice
  </text>
</svg>
```

`<rect>` draws the background, while `<text>` draws the author or title. `<path>` is used for custom shapes such as borders and arches. The SVG is imported like any other image and passed to `BookCard`:

```jsx
import prideCover from '../assets/pride-and-prejudice.svg'

<img src={prideCover} alt="Pride and Prejudice book cover" />
```

The Hero uses a second technique. Its decorative books are regular HTML `<div>` elements styled with Tailwind classes. Background colours create the covers, text creates the titles, and `rotate-*`, `shadow-*`, and positioning classes make them look like overlapping physical books. They are marked `aria-hidden` because they are decorative and repeat information shown in the page text.

## Step 4: BookGrid — arrays, map, and keys

`src/data/books.js` exports an array of book objects. Each object contains a stable `id`, title, author, numeric price, and imported cover image.

The data flows through the components like this:

```text
books.js -> App -> BookGrid -> BookCard
```

`App` passes the array using `<BookGrid books={books} />`. BookGrid uses `books.map()` to return one BookCard for each object.

`key={book.id}` helps React identify each card if the list changes. A key is for React's bookkeeping; it is not a normal prop received by BookCard.

The grid uses `grid-cols-1`, `sm:grid-cols-2`, and `lg:grid-cols-3` to adapt to screen width.

## Step 5: BookDetails — richer props and semantic details

`BookDetails` receives one complete book object through the `book` prop. The object now includes a description, physical format, and stock status in addition to the fields used by BookCard.

```text
books[0] -> App -> BookDetails
```

The details are displayed with a description list: `<dl>` groups the information, `<dt>` names each field, and `<dd>` provides its value. This gives the format and availability information a clear semantic relationship for assistive technology.

Book details now live on their own route: `/books/:bookId`. BookCard links to that route, `useParams()` reads the ID from the URL, and the page finds the matching book in the local catalogue. A Back to books link returns to the home page. The Add to Cart button remains disabled until cart state is implemented.
### Add another book

1. Put its cover in `src/assets`.
2. Import the cover in `src/data/books.js`.
3. Add an object with a unique ID, title, author, numeric price, and cover.
4. BookGrid renders the new entry automatically; no extra card markup is needed.


## Step 6: Routing — separate pages

`BrowserRouter` watches the browser URL, `Routes` chooses which page to render, and `Route` connects a URL pattern to a component. The home page uses `/`, while a detail page uses `/books/:bookId`.

Clicking a title or cover uses React Router's `<Link>`, so the page changes without a full browser refresh. `useParams()` reads the `bookId` value, and the page uses it to find the matching book.

The detail page also handles an unknown ID with a simple Book not found message. This keeps a broken URL from rendering an empty screen.
## Step 7: Search and filtering — controlled inputs

The home page now keeps `searchTerm` and `selectedGenre` in React state. `SearchBar` and `GenreFilter` are controlled components: their displayed values come from state, and their `onChange` callbacks update that state.

The catalogue filters books by checking the title and author together, then checking the selected genre. `useMemo` recalculates the filtered list when either value changes. The result count uses `aria-live="polite"` so assistive technology can announce updates without interrupting the reader.

If no books match, `EmptyState` explains what to try. Adding a genre to a book in `src/data/books.js` automatically makes it available to the filter.
## Review checklist

- Resize the browser and check the header and mobile menu.
- Operate the mobile menu with Tab, Enter, and Escape.
- Check the Hero on wide and narrow screens.
- Confirm all six covers, titles, authors, and naira prices display.
- Check the grid at mobile, tablet, and desktop widths.
- Confirm the shopping controls remain disabled.
- Run `npm run build` before committing.

## Learning workflow

Build and explain one component or agreed change at a time, then pause for code review. Keep this README updated as features change. The project owner handles all Git initialization, commits, and pushes manually.

Next components will be discussed before implementation. Filtering, book details, and cart functionality have not been built yet.








# Thundey BookStore

A frontend learning project for a physical bookstore, built one component at a time with React, Tailwind CSS, and Vite. Prices use Nigerian naira (NGN).

## Run locally

```sh
npm install
npm run dev
```

Use the local URL printed by Vite. Run `npm run build` to verify the production build and `npm run preview` to serve it locally.

## Current features

- Responsive header with a mobile menu and cart count.
- Hero section with decorative book illustrations.
- Six-book catalogue with local SVG covers.
- Search by title or author and filter by genre.
- Separate book detail routes at `/books/:bookId`.
- Shared cart state with Add to Cart, quantity updates, remove actions, and localStorage persistence.
- Cart page at `/cart` with subtotal, delivery fee, and total.
- Demo checkout at `/checkout` with delivery fields and required-field validation.
- Demo order confirmation at `/order-confirmation` with delivery details and order totals.

There is no backend, account system, real payment processing, or shipping integration. The checkout is a demonstration only. All prices are sample values, not live retail prices.

## Project structure

```text
src/
  assets/             Local SVG book covers
  components/
    Header.jsx        Navigation, mobile menu, and cart link
    Hero.jsx          Static introductory section
    BookCard.jsx      Display for one book
    BookGrid.jsx      Responsive list of BookCards
    BookDetails.jsx   Detailed view for one book
    SearchBar.jsx     Controlled title and author search
    GenreFilter.jsx   Controlled genre select
    EmptyState.jsx    No-results message
    CartItem.jsx      Cart line item and quantity control
    CartSummary.jsx   Cart totals and checkout link
  context/
    CartContext.jsx   Shared cart state and localStorage persistence
  data/
    books.js          Sample catalogue data
  pages/
    BookDetailsPage.jsx  Route for one book's details
    CartPage.jsx         Cart route
    CheckoutPage.jsx     Demo checkout route
    OrderConfirmationPage.jsx  Confirmation after a demo order
  utils/
    currency.js       Shared naira formatting
  App.jsx             Routes and home-page composition
  main.jsx            Mounts React into index.html
  index.css           Tailwind import and global styles
```

## How the main React concepts work

### Components and props

A component is a function that returns JSX. Props let one component display different data:

```jsx
<BookCard
  id="pride-and-prejudice"
  title="Pride and Prejudice"
  author="Jane Austen"
  price={8500}
  cover={prideCover}
/>
```

`BookGrid` maps over the catalogue and gives each card a stable `key`. `BookDetailsPage` reads a book ID from the URL with `useParams()`.

### Controlled inputs

`SearchBar`, `GenreFilter`, and the checkout fields receive their values from React state. Their change handlers update that state, so the UI and data stay synchronized. The catalogue derives filtered books from the search text and selected genre.

### Shared cart state

`CartProvider` wraps the application. Components read the cart through `useCart()`, so the header, catalogue, detail page, cart page, and checkout all use the same items. `addToCart`, `updateQuantity`, `removeFromCart`, and `clearCart` update arrays immutably. The cart count uses `reduce()` and the cart is saved to `localStorage`.

### SVG covers

The book covers are local SVG files created with code rather than downloaded photographs. SVG stores drawing instructions such as rectangles, paths, and text, which the browser renders as an image. The Hero uses a separate technique: styled HTML elements and Tailwind classes create its decorative overlapping books.

### Accessibility

The project uses labelled form controls, descriptive image alt text, semantic headings and definition lists, keyboard-friendly buttons, a skip link, and an `aria-live` result count.

## Learning workflow

Build and explain one component or agreed change at a time, review it in the browser, and update this README before committing. The project owner handles Git commits and pushes manually.

The next planned work is a small visual polish pass after the confirmation flow.

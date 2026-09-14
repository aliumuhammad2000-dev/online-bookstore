# Online Bookstore

A React and Tailwind CSS learning project for a physical bookstore.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed in the terminal. Use `npm run build` to check the production build.

## Step 1: Header

Only the header is implemented. Browse Books and Cart are disabled until their pages are built. The rest of the page is intentionally empty.

### How the files connect

1. `index.html` contains the root element and loads `src/main.jsx`.
2. `src/main.jsx` renders React into that root and imports the CSS.
3. `src/App.jsx` renders the Header component.
4. `src/components/Header.jsx` contains the header markup and menu behaviour.
5. `src/index.css` imports Tailwind and adds basic global styles.
6. `vite.config.js` enables the React and Tailwind plugins.

### Read Header.jsx

- A component is a function that returns JSX, the markup React displays.
- `className` adds CSS classes in JSX.
- `useState(false)` starts the mobile menu closed.
- `isMenuOpen` is the current value; `setIsMenuOpen` changes it.
- `onClick` runs a function when the button is clicked.
- The conditional class chooses `flex` or `hidden` based on state.
- `md:flex` displays navigation at widths of 768px and above.
- `aria-expanded` tells assistive technology whether the menu is open.
- `aria-controls` connects the menu button to its navigation element.

### Review checklist

- Check the desktop header.
- Resize below 768px and open and close the menu.
- Use Tab and Enter to operate the menu with a keyboard.
- Confirm Browse Books and Cart are disabled for now.

No commit or push should happen until the header has been reviewed and approved.

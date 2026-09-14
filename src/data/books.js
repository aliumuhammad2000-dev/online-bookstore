import prideCover from '../assets/pride-and-prejudice.svg'
import littleWomenCover from '../assets/little-women.svg'
import secretGardenCover from '../assets/the-secret-garden.svg'
import janeEyreCover from '../assets/jane-eyre.svg'
import treasureIslandCover from '../assets/treasure-island.svg'
import christmasCarolCover from '../assets/a-christmas-carol.svg'

// Sample catalogue: prices are illustrative naira amounts, not live retail prices.
// Each book has a stable ID so React can identify its card in the list.
export const books = [
  { id: 'pride-and-prejudice', title: 'Pride and Prejudice', author: 'Jane Austen', price: 8500, cover: prideCover },
  { id: 'little-women', title: 'Little Women', author: 'Louisa May Alcott', price: 9000, cover: littleWomenCover },
  { id: 'the-secret-garden', title: 'The Secret Garden', author: 'Frances Hodgson Burnett', price: 6500, cover: secretGardenCover },
  { id: 'jane-eyre', title: 'Jane Eyre', author: 'Charlotte Brontë', price: 8000, cover: janeEyreCover },
  { id: 'treasure-island', title: 'Treasure Island', author: 'Robert Louis Stevenson', price: 7000, cover: treasureIslandCover },
  { id: 'a-christmas-carol', title: 'A Christmas Carol', author: 'Charles Dickens', price: 5500, cover: christmasCarolCover },
]

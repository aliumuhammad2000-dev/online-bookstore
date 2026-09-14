import prideCover from '../assets/pride-and-prejudice.svg'
import littleWomenCover from '../assets/little-women.svg'
import secretGardenCover from '../assets/the-secret-garden.svg'
import janeEyreCover from '../assets/jane-eyre.svg'
import treasureIslandCover from '../assets/treasure-island.svg'
import christmasCarolCover from '../assets/a-christmas-carol.svg'

// Sample catalogue: prices are illustrative naira amounts, not live retail prices.
// Each book has a stable ID so React can identify its card in the list.
export const books = [
  { id: 'pride-and-prejudice', title: 'Pride and Prejudice', author: 'Jane Austen', price: 8500, cover: prideCover, description: 'A witty classic about first impressions, family expectations, and the slow discovery of love between Elizabeth Bennet and Mr Darcy.', format: 'Paperback', inStock: true },
  { id: 'little-women', title: 'Little Women', author: 'Louisa May Alcott', price: 9000, cover: littleWomenCover, description: 'Follow the four March sisters as they grow up, find their voices, and hold on to one another through joy and hardship.', format: 'Paperback', inStock: true },
  { id: 'the-secret-garden', title: 'The Secret Garden', author: 'Frances Hodgson Burnett', price: 6500, cover: secretGardenCover, description: 'A lonely child discovers a hidden garden and finds friendship, wonder, and a new sense of belonging.', format: 'Paperback', inStock: true },
  { id: 'jane-eyre', title: 'Jane Eyre', author: 'Charlotte Brontë', price: 8000, cover: janeEyreCover, description: 'An independent young woman searches for purpose, dignity, and love while facing a mysterious secret at Thornfield Hall.', format: 'Paperback', inStock: true },
  { id: 'treasure-island', title: 'Treasure Island', author: 'Robert Louis Stevenson', price: 7000, cover: treasureIslandCover, description: 'A fast-moving sea adventure filled with maps, pirates, courage, and the search for buried treasure.', format: 'Hardcover', inStock: true },
  { id: 'a-christmas-carol', title: 'A Christmas Carol', author: 'Charles Dickens', price: 5500, cover: christmasCarolCover, description: 'Ebenezer Scrooge receives an unforgettable lesson about generosity, compassion, and the possibility of change.', format: 'Paperback', inStock: true },
]

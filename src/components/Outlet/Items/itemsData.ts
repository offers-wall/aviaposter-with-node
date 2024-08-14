export interface Item {
  id: string;
  label: string;
  path: string;
  price: number;
}

export interface Items {
  content: {
    sectionTitle: string;
    title: string;
    currency: string;
    button: string;
  };
  itemButton: string;
  items: Item[];
}

export const items: Items = {
  content: {
    sectionTitle: 'Best positions',
    title: 'Shop',
    currency: '$',
    button: 'See more',
  },
  itemButton: 'Buy Now',
  items: [
    { id: '1', label: 'Poster Aviator 1', path: '/images/content/poster_1.jpg', price: 25 },
    { id: '2', label: 'Poster Aviator 2', path: '/images/content/poster_2.jpg', price: 30 },
    { id: '3', label: 'Poster Aviator 3', path: '/images/content/poster_3.jpg', price: 40 },
    { id: '4', label: 'Poster Aviator 4', path: '/images/content/poster_4.jpg', price: 65 },
    { id: '5', label: 'Poster Aviator 5', path: '/images/content/poster_5.jpg', price: 50 },
    { id: '6', label: 'Poster Aviator 6', path: '/images/content/poster_6.jpg', price: 45 },
    { id: '7', label: 'Poster Aviator 7', path: '/images/content/poster_7.jpg', price: 90 },
    { id: '8', label: 'Poster Aviator 8', path: '/images/content/poster_8.jpg', price: 85 },
  ],
};

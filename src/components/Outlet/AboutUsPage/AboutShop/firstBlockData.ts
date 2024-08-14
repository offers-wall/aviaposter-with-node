export enum BackgroundPaths {
  Desktop = 'images/backgrounds/desktop_background.jpg',
  Mobile = 'images/backgrounds/mobile_background.jpg',
}

export interface FirstBlock {
  title: string;
  description: string;
  buttonText: string;
}

export const firstBlock: FirstBlock = {
  title: 'ArtPoster – impressions squared!',
  description:
    'Decor such as canvas paintings and posters is, in fact, always up-to-date decor, proven by generations, the history of which stretches back to ancient times. However, if in ancient times the production of such interior decoration was limited by the lack of technology and one only had to resort to the manual work of craftsmen, today for the modern printing industry it is an endless field for the realization of one’s ideas and talents. For you, this is an incredibly convenient opportunity to bring your thoughts and fantasies to life. Moreover, the technologies used in the ArtPoster company for printing on canvas, photo paper, fabric, etc. do not limit your choice: many types of products (paintings, modular paintings, posters, paintings by numbers), various subjects on any taste and color, various materials for production, sizes and breakdowns to suit your format, designer image processing, creating a product from your photos and much more! And all this cannot be compared in price with handmade work, where the price is always an order of magnitude higher!',
  buttonText: 'Buy Now',
};

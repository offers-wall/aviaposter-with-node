export interface ServiceItemType {
  id?: number;
  title: string;
  subtitle: string;
  path: string;
}

export const shopServices: ServiceItemType[] = [
  {
    id: 1,
    title: 'High Quality',
    subtitle: 'Crafted from top materials',
    path: '/icons/quality.svg',
  },
  {
    id: 2,
    title: 'Warranty Protection',
    subtitle: 'Over 2 years',
    path: '/icons/warranty.svg',
  },
  {
    id: 3,
    title: 'Free Shipping',
    subtitle: 'Order over 150 $',
    path: '/icons/shipping.svg',
  },
  {
    id: 4,
    title: '24 / 7 Support',
    subtitle: 'Dedicated support',
    path: '/icons/support.svg',
  },
];

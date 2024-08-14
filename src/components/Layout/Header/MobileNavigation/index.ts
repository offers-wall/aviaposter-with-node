import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import TimeIcon from '@mui/icons-material/AccessTimeFilled';

export { default } from './MobileNavigation';

export const content = {
  header: {
    navLinks: [
      { icon: HomeIcon, label: 'Home', path: '/' },
      { icon: TimeIcon, label: 'Shop', path: '/shop' },
      { icon: ShoppingBagIcon, label: 'About', path: '/about-us' },
      { icon: TimeIcon, label: 'Contact', path: '/contact-us' },
    ],
  },
};

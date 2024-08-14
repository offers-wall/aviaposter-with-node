import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StarsIcon from '@mui/icons-material/Stars';
import TimeIcon from '@mui/icons-material/AccessTimeFilled';
import { SvgIconComponent } from '@mui/icons-material';

export enum Routes {
  Home_Page = '/',
  Second_Page = '/shop',
  About_Us_Page = '/about-us',
  Contact_Us_page = '/contact-us',
}

export interface Header {
  navLinks: {
    icon: SvgIconComponent;
    label: string;
    path: Routes;
  }[];
}

export const header: Header = {
  navLinks: [
    { icon: HomeIcon, label: 'Home', path: Routes.Home_Page },
    { icon: ShoppingBagIcon, label: 'Shop', path: Routes.Second_Page },
    { icon: StarsIcon, label: 'About', path: Routes.About_Us_Page },
    { icon: TimeIcon, label: 'Contact', path: Routes.Contact_Us_page },
  ],
};

import Email from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { SvgIconComponent } from '@mui/icons-material';
import meta from '@/constants/meta';

export enum Routes {
  Home_Page = '/',
  Second_Page = '/shop',
  About_Us_Page = '/about-us',
  Contact_Us_page = '/contact-us',
}

export interface ContactType {
  icon: SvgIconComponent;
  text: string;
  path?: string;
}

export interface Footer {
  contactsBlock: { contacts: ContactType[] };
  navLinks: {
    label: string;
    path: Routes;
  }[];
  copyRight: string;
}

export const footer: Footer = {
  contactsBlock: {
    contacts: [
      {
        icon: LocationOnIcon,
        text: 'Shop No 3, Ground Floor, Hill Slope Zig Zag Road, Pali Hill, Bandra West, Mumbai, Maharashtra 400050, India',
      },
      {
        icon: PhoneIcon,
        text: '+49 341 33 97 59 00',
        path: 'tel:+49 341 33 97 59 00',
      },
      {
        icon: Email,
        text: 'support@posterlounge.com',
        path: 'mailto:support@posterlounge.com',
      },
    ],
  },
  navLinks: [
    { label: 'Home', path: Routes.Home_Page },
    { label: 'Shop', path: Routes.Second_Page },
    { label: 'About', path: Routes.About_Us_Page },
    { label: 'Contact', path: Routes.Contact_Us_page },
  ],
  copyRight: `© 2019 - 2024 ${meta.title} All Rights Reserved.`,
};

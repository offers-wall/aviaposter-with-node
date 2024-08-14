import Link from 'next/link';
import Typography from '@mui/material/Typography';
import * as generalClasses from '@/styles/general';
import Contact from './Contact';
import Logo from './Logo';
import Navigation from './Navigation';
import { footer } from './footerData';
import * as classes from './styles';

interface Props {
  className?: string;
}

export default function Footer({ className }: Props) {
  return (
    <footer
      className={className}
      css={[classes.footer, generalClasses.layoutPadding]}>
      <div css={classes.wrap}>
        <div css={classes.navWrap}>
          <Logo />
          <Navigation />
          <div>
            <Link href='/privacy-policy'>Privacy Policy</Link> <br />
            <Link href='/terms-and-conditions'>Terms & Conditions</Link>
          </div>
          <Typography
            component='p'
            css={classes.copyRight}
            variant='body1'>
            {footer.copyRight}
          </Typography>
        </div>
        <div css={classes.contactsWrap}>
          {footer.contactsBlock.contacts.map((item) => (
            <Contact
              key={item.text}
              css={classes.contact}
              contact={item}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  className: null,
};

import { ReactNode } from 'react';
import CookieConsent from '@/components/CookiesConsent';
// TODO: Uncomment after adding Header and Footer
// import Footer from './Footer';
// import Header from './Header';
import * as classes from './styles';

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div css={classes.wrap}>
      {/* <Header /> */}
      <main css={classes.main}>{children}</main>
      {/* <Footer /> */}
      <CookieConsent />
    </div>
  );
}

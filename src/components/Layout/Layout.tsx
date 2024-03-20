import { ReactNode } from 'react';
// TODO: Uncomment after adding Header and Footer
// import Footer from './Footer';
// import Header from './Header';

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

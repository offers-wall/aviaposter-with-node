import Hero from '@/components/Outlet/HomePage/Hero';
import Items from '@/components/Outlet/Items';
import Reviews from '@/components/Outlet/HomePage/Reviews';
import * as generalClasses from '@/styles/general';

export default function Home() {
  return (
    <div>
      <Hero css={generalClasses.outletMarginTop} />
      <Items section />
      <Reviews css={generalClasses.outletMarginBottom} />
    </div>
  );
}

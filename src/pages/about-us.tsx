import * as generalClasses from '@/styles/general';
import AboutShop from '@/components/Outlet/AboutUsPage/AboutShop';
import ShopServices from '@/components/Outlet/AboutUsPage/ShopServices';

export default function AboutUs() {
  return (
    <div>
      <AboutShop css={generalClasses.outletMarginTop} />
      <ShopServices css={generalClasses.outletMargin} />
    </div>
  );
}

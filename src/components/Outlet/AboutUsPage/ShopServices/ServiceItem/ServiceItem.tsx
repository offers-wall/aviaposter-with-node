import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { ServiceItemType } from '@/components/Outlet/AboutUsPage/ShopServices/shopServicesData';
import * as generalClasses from '@/styles/general';
import * as classes from './styles';

export default function ServiceItem({ title, subtitle, path }: ServiceItemType) {
  return (
    <div css={classes.wrap}>
      <Image
        alt='about'
        src={path}
        width={54}
        height={60}
      />
      <div>
        <Typography
          component='p'
          css={generalClasses.bold}
          variant='h5'>
          {title}
        </Typography>
        <Typography
          component='p'
          variant='subtitle1'>
          {subtitle}
        </Typography>
      </div>
    </div>
  );
}

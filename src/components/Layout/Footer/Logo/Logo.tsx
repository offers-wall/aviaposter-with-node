import Image from 'next/image';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import { Routes } from '@/components/Layout/Header/headerData';
import { logo } from './logoData';
import * as classes from './styles';

interface Props {
  className?: string;
}

export default function Logo({ className }: Props) {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return isDesktop ? (
    <Link href={Routes.Home_Page}>
      <Image
        alt='desktop logo'
        className={className}
        css={classes.logoContainer}
        height={logo.desktop.dimensions.height}
        src={logo.desktop.path}
        width={logo.desktop.dimensions.width}
      />
    </Link>
  ) : (
    <Link href={Routes.Home_Page}>
      <Image
        alt='mobile logo'
        className={className}
        css={classes.logoContainer}
        height={logo.mobile.dimensions.height}
        src={logo.mobile.path}
        width={logo.mobile.dimensions.width}
      />
    </Link>
  );
}

Logo.defaultProps = {
  className: null,
};

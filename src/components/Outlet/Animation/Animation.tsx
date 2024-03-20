import Link from 'next/link';
import Lottie from 'react-lottie';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import * as classes from './styles';

interface Props {
  // This type is defined in 'react-lottie' docs
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any;
  className?: string;
}

export default function Animation({ className, animationData }: Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const DEFAULT_OPTIONS = {
    autoplay: true,
    animationData,
    loop: true,
  };

  return isDesktop ? (
    <Link
      className={className}
      css={classes.animationBox}
      // TODO: Add your path
      href='/'>
      <Lottie options={DEFAULT_OPTIONS} />
    </Link>
  ) : null;
}

Animation.defaultProps = {
  className: null,
};

import Link from 'next/link';
import Lottie from 'react-lottie';
import * as generalClasses from '@/styles/general';
import * as classes from './styles';

interface Props {
  // This type is defined in 'react-lottie' docs
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any;
  path: string;
  className?: string;
}

export default function Animation({ className, animationData, path }: Props) {
  const DEFAULT_OPTIONS = {
    autoplay: true,
    animationData,
    loop: true,
  };

  return (
    <Link
      className={className}
      css={[classes.animationBox, generalClasses.desktop]}
      href={path}>
      <Lottie options={DEFAULT_OPTIONS} />
    </Link>
  );
}

Animation.defaultProps = {
  className: null,
};

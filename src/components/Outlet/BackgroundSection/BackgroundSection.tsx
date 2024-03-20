import { ReactNode } from 'react';
import Image from 'next/image';
import * as classes from './styles';

interface Props {
  children: ReactNode;
  path: string;
  className?: string;
  priority?: boolean;
}

// TODO: Use it for sections/pages with background instead using background property in CSS
export default function BackgroundSection({ priority, className, children, path }: Props) {
  return (
    <div className={className}>
      <div css={classes.bgWrap}>
        <Image
          priority={priority}
          alt='background'
          src={path}
          placeholder='blur'
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      {children}
    </div>
  );
}

BackgroundSection.defaultProps = {
  className: null,
  priority: false,
};

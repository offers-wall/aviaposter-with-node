import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { footer } from '@/components/Layout/Footer/footerData';
import * as generalClasses from '@/styles/general';
import * as classes from './styles';

interface Props {
  className?: string;
}

export default function Navigation({ className }: Props) {
  return (
    <ul
      className={className}
      css={classes.navigation}>
      {footer.navLinks.map(({ label, path }) => (
        <Typography
          component='li'
          css={generalClasses.semibold}
          key={label}
          variant='body1'>
          <Link
            css={classes.hitbox}
            href={path}>
            {label}
          </Link>
        </Typography>
      ))}
    </ul>
  );
}

Navigation.defaultProps = {
  className: null,
};

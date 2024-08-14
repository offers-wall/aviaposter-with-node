import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { ContactType } from '@/components/Layout/Footer/footerData';
import * as classes from './styles';

interface Props {
  contact: ContactType;
  className?: string;
}

export default function Contact({ contact, className }: Props) {
  const { icon: Icon, text, path } = contact;

  return (
    <div
      className={className}
      css={classes.wrap}>
      <div>
        <Icon css={classes.icon} />
      </div>
      <div>
        {path !== undefined ? (
          <Link href={path}>{text}</Link>
        ) : (
          <Typography
            component='p'
            sx={{ maxWidth: 400 }}
            variant='body1'>
            {text}
          </Typography>
        )}
      </div>
    </div>
  );
}

Contact.defaultProps = {
  className: null,
};

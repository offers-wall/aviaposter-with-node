import Link from 'next/link';
import { Button as MUIButton, ButtonProps } from '@mui/material';

interface Props extends ButtonProps {
  text: string;
  className?: string;
}

export default function Button({ text, className, ...props }: Props) {
  return (
    <div className={className}>
      <MUIButton
        LinkComponent={Link}
        {...props}>
        {text}
      </MUIButton>
    </div>
  );
}

Button.defaultProps = {
  className: null,
};

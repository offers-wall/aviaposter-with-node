import { ButtonGroup } from '@mui/material';
import Grid, { GridProps } from '@mui/material/Grid';
import { header } from '@/components/Layout/Header/headerData';
import Button from '@/components/Outlet/Button';
import * as classes from './styles';

interface Props {
  className?: string;
  justifyContent?: GridProps['justifyContent'];
}

export default function Navigation({ className, justifyContent = 'center' }: Props) {
  return (
    <Grid
      container
      className={className}
      spacing={1}
      justifyContent={justifyContent}>
      <ButtonGroup
        variant='text'
        aria-label='text button group'
        css={classes.buttonGroup}>
        {header.navLinks.map(({ label, path }) => (
          <Button
            key={label}
            css={classes.button}
            href={path}
            text={label}
            variant='text'
          />
        ))}
      </ButtonGroup>
    </Grid>
  );
}

Navigation.defaultProps = {
  className: null,
  justifyContent: null,
};

import { useState } from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useShoppingCartContext } from '@/context/ShoppingCartContext';
import * as generalClasses from '@/styles/general';
import Logo from './Logo';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import * as classes from './styles';

interface Props {
  className?: string;
}

export default function Header({ className }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { cart } = useShoppingCartContext();

  return (
    <header
      className={className}
      css={[generalClasses.layoutPadding, classes.headerWrap]}>
      <Container
        disableGutters
        maxWidth={false}>
        <Grid
          container
          spacing={1}
          alignItems='center'
          justifyContent='space-between'>
          <Grid
            item
            xs={5}
            md={5}
            lg={4}>
            <Logo />
          </Grid>
          <Grid
            item
            xs={4}
            md={5}
            lg={6}>
            <Navigation
              justifyContent='center'
              css={generalClasses.desktop}
            />
          </Grid>
          <Grid
            item
            xs={1}
            sm={1}
            md={1}>
            <IconButton
              aria-labelledby='open-mobile-menu'
              aria-label='open-mobile-menu'
              color='inherit'
              css={[classes.menuIcon, generalClasses.mobile]}
              onClick={() => setIsMobileMenuOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={1}
            md={1}
            lg={1}>
            <IconButton
              aria-labelledby='open-drawer-label'
              aria-label='open drawer'
              color='inherit'
              LinkComponent={Link}
              css={classes.cartIcon}
              href='/cart'>
              <ShoppingCartIcon />
              <span css={classes.cartCount}>{cart.length === 0 ? 0 : cart.length}</span>
            </IconButton>
          </Grid>
        </Grid>
      </Container>
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}

Header.defaultProps = {
  className: null,
};

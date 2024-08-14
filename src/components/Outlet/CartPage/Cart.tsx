import { ShoppingCartItemType } from '@/types/shoppingCartContext';
import { Divider, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@/components/Outlet/Button';
import Container from '@/components/Outlet/Container';
import PayPalCheckOut from '@/components/Outlet/CartPage/PayPalCheckout';
import { items } from '@/components/Outlet/Items/itemsData';
import { Routes } from '@/components/Layout/Header/headerData';
import * as generalClasses from '@/styles/general';
import CartItem from './CartItem';
import * as classes from './styles';

export default function Cart({ cart, cartTotal }: { cart: ShoppingCartItemType[]; cartTotal: number }) {
  return (
    <div css={generalClasses.outletPadding}>
      <Container>
        <div css={classes.cart}>
          <div css={classes.cartBox}>
            <Typography
              component='h3'
              css={[classes.title, generalClasses.bold]}
              textAlign='left'
              variant='h4'>
              Shopping Cart
            </Typography>
            <Divider
              css={classes.divider}
              sx={{ bgcolor: (theme) => theme.palette.text.disabled }}
            />
            {cart.length !== 0 ? (
              <div css={classes.items}>
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                  />
                ))}
                <div css={classes.subTotal}>
                  <Typography
                    component='span'
                    css={generalClasses.semibold}
                    variant='h6'>
                    Sub-Total:&nbsp;
                  </Typography>
                  <Typography
                    component='span'
                    css={generalClasses.bold}
                    sx={{ color: (theme) => theme.palette.background.paper }}
                    variant='h6'>
                    {cartTotal + items.content.currency}
                  </Typography>
                </div>
              </div>
            ) : (
              <Typography
                component='h2'
                sx={{ mb: '60px' }}
                variant='h5'>
                Cart is empty!
              </Typography>
            )}
            <Button
              css={classes.button}
              href={Routes.Second_Page}
              size='large'
              startIcon={<ArrowBackIosIcon />}
              sx={{ color: (theme) => theme.palette.text.primary }}
              text='Back to shop'
              variant='text'
            />
          </div>
          <div css={classes.paymentBox}>
            <Typography
              component='h3'
              css={[classes.title, generalClasses.bold]}
              textAlign='left'
              variant='h4'>
              Card Details
            </Typography>
            <Divider
              css={classes.divider}
              sx={{ bgcolor: (theme) => theme.palette.text.disabled }}
            />
            <PayPalCheckOut />
          </div>
        </div>
      </Container>
    </div>
  );
}

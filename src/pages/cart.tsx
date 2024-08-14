import Cart from '@/components/Outlet/CartPage/Cart';
import { useShoppingCartContext } from '@/context/ShoppingCartContext';

export default function CartPage() {
  const { cart, cartTotal } = useShoppingCartContext();

  return (
    <Cart
      cartTotal={cartTotal}
      cart={cart}
    />
  );
}

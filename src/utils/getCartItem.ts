import { Item } from '@/components/Outlet/Items/itemsData';
import { ShoppingCartStateType } from '@/types/shoppingCartContext';

export function getCartItem(state: ShoppingCartStateType, id: Item['id']) {
  return state.find((item) => item.id === id);
}

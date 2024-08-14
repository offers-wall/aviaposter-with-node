import { useMemo, useReducer, ReactNode } from 'react';
import { reducer, ShoppingCartContext } from '@/context/ShoppingCartContext';
import { ActionTypes, ShoppingCartStateType } from '@/types/shoppingCartContext';
import { Item } from '@/components/Outlet/Items/itemsData';

type ShoppingCartProviderProps = {
  children: ReactNode;
  initialValue: ShoppingCartStateType;
};

export default function ShoppingCartProvider({ children, initialValue = [] }: ShoppingCartProviderProps) {
  const [cart, dispatch] = useReducer(reducer, initialValue);
  const addItem = (cartItem: Item, quantity?: number) =>
    dispatch({
      type: ActionTypes.ADD_ITEM,
      payload: {
        item: cartItem,
        quantity,
      },
    });
  const deleteItem = (cartItemId: Item['id']) =>
    dispatch({
      type: ActionTypes.DELETE_ITEM,
      payload: {
        id: cartItemId,
      },
    });
  const removeAll = () => dispatch({ type: ActionTypes.REMOVE_ALL });
  const cartTotal = cart.reduce((total, item) => total + item.quantity * item.price, 0);
  const contextValue = useMemo(() => ({ cart, addItem, deleteItem, removeAll, cartTotal }), [cart, cartTotal]);

  return <ShoppingCartContext.Provider value={contextValue}>{children}</ShoppingCartContext.Provider>;
}

import { createContext, useContext } from 'react';
import { Item } from '@/components/Outlet/Items/itemsData';
import {
  ShoppingCartItemType,
  ShoppingCartStateType,
  ActionTypes,
  AddItem,
  DeleteItem,
  ShoppingCartActionType,
} from '@/types/shoppingCartContext';
import { getCartItem } from '@/utils/getCartItem';

export const ShoppingCartContext = createContext<{
  cart: ShoppingCartStateType;
  addItem: (cartItem: Item, quantity?: number) => void;
  deleteItem: (id: Item['id']) => void;
  removeAll: () => void;
  cartTotal: number;
}>({ cart: [], addItem: () => {}, deleteItem: () => {}, removeAll: () => {}, cartTotal: 0 });

const addItem = (state: ShoppingCartStateType, action: AddItem, foundedItem?: ShoppingCartItemType) =>
  foundedItem
    ? state.map((item) =>
        item.id === foundedItem.id
          ? {
              ...foundedItem,
              quantity: action.payload.quantity || foundedItem.quantity + 1,
            }
          : item,
      )
    : [
        ...state,
        {
          ...action.payload.item,
          quantity: action.payload.quantity || 1,
        },
      ];

const deleteItem = (state: ShoppingCartStateType, action: DeleteItem, foundedItem: ShoppingCartItemType) =>
  foundedItem.quantity === 1
    ? state.filter((item) => item.id !== action.payload.id)
    : state.map((item) =>
        item.id === foundedItem.id
          ? {
              ...foundedItem,
              quantity: foundedItem.quantity - 1,
            }
          : item,
      );

export const reducer = (state: ShoppingCartStateType, action: ShoppingCartActionType): ShoppingCartStateType => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      return addItem(state, action, getCartItem(state, action.payload.item.id));
    }
    case ActionTypes.DELETE_ITEM: {
      const foundedItem = getCartItem(state, action.payload.id);

      if (!foundedItem) {
        throw new Error('Whoopsie!');
      }

      return deleteItem(state, action, foundedItem);
    }
    case ActionTypes.REMOVE_ALL:
      return [];
    default:
      throw new Error(`Unknown action: ${JSON.stringify(action)}`);
  }
};

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

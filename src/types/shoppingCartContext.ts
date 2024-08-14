import { Item } from '@/components/Outlet/Items/itemsData';

export interface ShoppingCartItemType extends Item {
  quantity: number;
}

export type ShoppingCartStateType = ShoppingCartItemType[];

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  REMOVE_ALL = 'REMOVE_ALL',
}

export interface AddItem {
  type: ActionTypes.ADD_ITEM;
  payload: {
    quantity?: number;
    item: Item;
  };
}

export interface DeleteItem {
  type: ActionTypes.DELETE_ITEM;
  payload: {
    id: Item['id'];
  };
}

export interface RemoveAll {
  type: ActionTypes.REMOVE_ALL;
}

export type ShoppingCartActionType = AddItem | DeleteItem | RemoveAll;

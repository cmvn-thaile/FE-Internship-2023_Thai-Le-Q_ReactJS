import { Cart } from '../types';
import { ADD_NEW_PRODUCT, ADD_CONTAIN_PRODUCT } from './type';
import {
  StorageKey,
  getFromLocalStorage,
} from '../shared/services/localStorageServices';

interface Action {
  type: string;
  payload: Cart;
}

interface State {
  carts: Cart[];
}

const initialState: State = {
  carts: getFromLocalStorage(StorageKey.CartData),
};

export const cartReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };

    case ADD_CONTAIN_PRODUCT:
      const updatedCarts = state.carts.map((item: Cart) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return {
        ...state,
        carts: updatedCarts,
      };

    default:
      return state;
  }
};

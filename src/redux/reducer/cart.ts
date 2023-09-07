import { Cart } from '../../types';
import {
  ADD_NEW_CART,
  ADD_CONTAIN_CART,
  REMOVE_CART,
  UPDATE_CART,
  CLEAR_CART,
} from '../type';
import {
  StorageKey,
  getFromLocalStorage,
} from '../../shared/services/localStorageServices';

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
    case ADD_NEW_CART:
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };

    case ADD_CONTAIN_CART:
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

    case UPDATE_CART:
      const updatedProducts = state.carts.map((item: Cart) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      return {
        ...state,
        carts: updatedProducts,
      };

    case REMOVE_CART:
      return {
        ...state,
        carts: state.carts.filter(
          (item: Cart) => item.id !== action.payload.id
        ),
      };
    case CLEAR_CART:
      return {
        ...state,
        carts:action.payload,
      };

    default:
      return state;
  }
};

import { StorageKey, getFromLocalStorage } from '../../shared/services/localStorageServices';
import { ADD_CONTAIN_CART, ADD_NEW_CART, CLEAR_CART, REMOVE_CART, UPDATE_CART } from '../type';

interface Props {
  id: number;
  name: string;
  image: string;
  discount?: number | null;
  price?: number;
  quantity?: number;
}

export const addToCart = (product: Props) => {
  const allCartData = getFromLocalStorage(StorageKey.CartData);

  if (!allCartData && allCartData.length === 0) return;

  const existingProductIndex = allCartData.findIndex(
    (item: Props) => item.id === product.id
  );

  if (existingProductIndex !== -1) {
    const id = product.id;
    return {
      type: ADD_CONTAIN_CART,
      payload: { id },
    };
  } else {
    return {
      type: ADD_NEW_CART,
      payload: product,
    };
  }
};

export const updateCartQuantity = (id: number, quantity: number) => {
  if (!id) return;

  const allCartData = getFromLocalStorage(StorageKey.CartData) || [];

  const existingProductIndex = allCartData.findIndex(
    (item: Props) => item.id === id
  );

  if (existingProductIndex === -1) return;

  if (quantity < 1) {
    return {
      type: REMOVE_CART,
      payload: { id },
    };
  }
  return {
    type: UPDATE_CART,
    payload: { id, quantity },
  };
};

export const deleteCartItem = (id: number) => {
  if (!id) return;

  return {
    type: REMOVE_CART,
    payload: { id },
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
    payload: [],
  };
}
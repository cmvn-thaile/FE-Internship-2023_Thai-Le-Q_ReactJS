import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';

import { endpoint } from '../app/api/apiUrls';
import {
  StorageKey,
  getFromLocalStorage,
} from '../shared/services/localStorageServices';
import { Product } from '../types';
import {
  ADD_NEW_CART,
  ADD_CONTAIN_CART,
  REMOVE_CART,
  UPDATE_CART,
  GET_PRODUCT,
  GET_PRODUCT_ERROR,
} from './type';

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

// product action

export const getProductSuccess = (products: Product[]): any => {
  return {
    type: GET_PRODUCT,
    payload: products,
  };
};

export const getProductError = (error: string): any => {
  return {
    type: GET_PRODUCT_ERROR,
    payload: error,
  };
};

export const getProduct =
  (): ThunkAction<Promise<void>, RootState, null, any> =>
  async (dispatch: any) => {
    fetch(endpoint.productData, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        dispatch(getProductSuccess(myJson));
      })
      .catch(function (error) {
        dispatch(getProductError(error));
      });
  };

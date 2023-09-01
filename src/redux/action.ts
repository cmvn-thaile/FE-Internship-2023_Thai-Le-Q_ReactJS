import {
  StorageKey,
  getFromLocalStorage,
} from '../shared/services/localStorageServices';
import { ADD_NEW_PRODUCT, ADD_CONTAIN_PRODUCT } from './type';

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
      type: ADD_CONTAIN_PRODUCT,
      payload: { id },
    };
  } else {
    return {
      type: ADD_NEW_PRODUCT,
      payload: { product },
    };
  }
};

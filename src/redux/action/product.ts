import { ThunkAction } from 'redux-thunk';
import { Product } from '../../types';
import { GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, PENDING_GET_PRODUCT } from '../type';
import { RootState } from '../store';
import { endpoint } from '../../app/api/apiUrls';

export const pendingGetProduct = (): any => {
  return {
    type: PENDING_GET_PRODUCT,
    payload: { isLoading: true },
  };
};

export const getProductSuccess = (products: Product[]): any => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload: { products, isLoading: false },
  };
};

export const getProductError = (error: string): any => {
  return {
    type: GET_PRODUCT_ERROR,
    payload: { error, isLoading: false },
  };
};

export const getProduct =
  (): ThunkAction<Promise<void>, RootState, null, any> =>
  async (dispatch: any) => {
    await dispatch(pendingGetProduct());
    setTimeout(async () => {
      try {
        const response = await fetch(endpoint.productData, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        const myJson = await response.json();
        dispatch(getProductSuccess(myJson));
      } catch (error: any) {
        dispatch(getProductError(error));
      }
    }, 2000);
  };

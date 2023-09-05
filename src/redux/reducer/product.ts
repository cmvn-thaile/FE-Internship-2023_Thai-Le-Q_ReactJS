import { Product } from '../../types';
import { GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, PENDING_GET_PRODUCT } from '../type';

export interface State {
  products: Product[];
  error: any;
  isLoading?: boolean;
}

const initialState: State = {
  products: [],
  error: null,
  isLoading: false,
};

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PENDING_GET_PRODUCT:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
      
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        products: action.payload.products,
      };

    case GET_PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

import { Product } from '../types';
import { GET_PRODUCT,GET_PRODUCT_ERROR} from './type';

export interface State {
  products: Product[];
  error: any;
}

const initialState: State = {
  products: [],
  error: null,
};

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    case GET_PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    
    default:
      return state;
  }
};
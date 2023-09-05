import { combineReducers } from 'redux';
import { cartReducer } from './cart';
import { productReducer } from './product';

export const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});
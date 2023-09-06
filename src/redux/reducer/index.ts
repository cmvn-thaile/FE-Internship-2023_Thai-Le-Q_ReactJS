import { combineReducers } from 'redux';
import { cartReducer } from './cart';
import { productReducer } from './product';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  auth: authReducer,
});
import { createStore, applyMiddleware } from 'redux';
import { cartReducer } from './cart-reducer';
import { loggerMiddleware } from './middleware';

export const store = createStore(cartReducer, applyMiddleware(loggerMiddleware));

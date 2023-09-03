import { createStore, applyMiddleware, combineReducers } from 'redux';
import { cartReducer } from './cart-reducer';
import thunkMiddleware from 'redux-thunk';
import { productReducer } from './product-reducer';
import { loggerMiddleware } from './middleware';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,loggerMiddleware));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

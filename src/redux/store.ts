import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { loggerMiddleware } from './middleware';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { rootReducer } from './reducer';

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { get } from 'http';
import { User } from '../../types';
import {
  LOGIN_PENDING,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FALSE,
  LOGOUT,
} from '../type';
import {
  StorageKey,
  getFromLocalStorage,
} from '../../shared/services/localStorageServices';

interface Action {
  type: string;
  payload: any;
}

interface State {
  users: any ;
  error: any;
  isLoading?: boolean;
  message?: string;
}

const initialState: State = {
  users: getFromLocalStorage(StorageKey.UserData) ,
  error: null,
  isLoading: false,
  message: '',
};

export const authReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null,
        message: 'Loading...',
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        isLoading: false,
        error: null,
        message: 'Login success',
      };

    case LOGIN_FALSE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: action.payload.isLoading,
        message: 'Email or password is incorrect',
      };

    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        message: 'Login error',
      };
      case LOGOUT:
        return {
          ...state,
          users: [],
          isLoading: false,
          error: null,
          message: 'Logout success',
        };
    default:
      return state;
  }
};

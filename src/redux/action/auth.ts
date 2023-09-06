import { ThunkAction } from 'redux-thunk';
import { endpoint } from '../../app/api/apiUrls';
import {
  LOGIN_PENDING,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FALSE,
} from '../type';
import { RootState } from '../store';
import { User } from '../../types';

export const loginSuccess = (users: User[]) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { users, isLoading: false },
  };
};

export const loginPending = () => {
  return {
    type: LOGIN_PENDING,
    payload: { isLoading: true },
  };
};

export const loginError = (error: any) => {
  return {
    type: LOGIN_ERROR,
    payload: { error, isLoading: false },
  };
};

export const loginFalse = (error: any) => {
  return {
    type: LOGIN_FALSE,
    payload: { error: error, isLoading: false },
  };
};

interface LoginCredentials {
  email: string;
  password: string;
}

export const login =
  ({
    email,
    password,
  }: LoginCredentials): ThunkAction<Promise<void>, RootState, null, any> =>
  async (dispatch: any) => {
    await dispatch(loginPending());

    setTimeout(async () => {
      try {
        const response = await fetch(endpoint.userData, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        const userData = await response.json();

        const user = userData.find(
          (user: any) => user.email === email && user.password === password
        );
        if (user) {
          await dispatch(loginSuccess(user));
        } else {
          await dispatch(loginFalse('Wrong email or password'));
        }
      } catch (error: any) {
        dispatch(loginError(error));
      }
    }, 1000);
  };

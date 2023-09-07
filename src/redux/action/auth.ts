import { ThunkAction } from 'redux-thunk';
import { endpoint } from '../../app/api/apiUrls';
import {
  LOGIN_PENDING,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FALSE,
  LOGOUT,
} from '../type';
import { RootState } from '../store';
import { toast } from 'react-toastify';

export const loginSuccess = (users: any) => {
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
    toast.info('Please wait...')

    setTimeout(async () => {
      try {
        const response = await fetch(endpoint.userData, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        const userData = await response.json();

        const userExist = userData.find(
          (user: any) => user.email === email && user.password === password
        );

        const user = {
          id: userExist.id,
          name: userExist.name,
          email: userExist.email,
          password: userExist.password,
        };

        if (user) {
          await dispatch(loginSuccess(user));
          toast.success('Login success')
        } else {
          await dispatch(loginFalse('Wrong email or password'));
          toast.error('Wrong email or password')
        }
      } catch (error: any) {
        dispatch(loginError(error));
        toast.error('Something went wrong')
      }
    }, 1000);
  };


  export const logout = () => {
    return {
      type: LOGOUT,
    };
  }
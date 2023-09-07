import React, { useEffect, useContext } from 'react';
import { redirect, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../../assets/img/logo.png';
import { calTotalQuantity } from '../../utils/caculation';
import { Cart } from '../../types';

import { useModalContext } from '../context/modalContext';
import 'react-toastify/dist/ReactToastify.css';

import {
  StorageKey,
  saveToLocalStorage,
} from '../services/localStorageServices';

import { useAppDispatch } from '../../redux/store';
import { getProduct } from '../../redux/action/product';
import Modal from './Modal';
import { login, logout } from '../../redux/action/auth';
import { clearCart } from '../../redux/action/cart';
import { useForm } from '../hook/useForm';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const [isCardHeader, setIsCardHeader] = React.useState(false);
  const cartData = useSelector(
    (state: { cart: { carts: Cart[] } }) => state.cart.carts
  );

  const userError = useSelector(
    (state: { auth: { error: any } }) => state.auth.error
  );

  const userMessage = useSelector(
    (state: { auth: { message: any } }) => state.auth.message
  );

  const userData = useSelector(
    (state: { auth: { users: any } }) => state.auth.users
  );

  const [count, setCount] = React.useState(0);
  const [isSubmit, setIsSubmit] = React.useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const action = getProduct();
    if (action) {
      dispatch(action);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!userData && userData === null) return;
    saveToLocalStorage(StorageKey.UserData, userData);
  }, [userData]);

  useEffect(() => {
    if (!cartData && cartData === null) return;
    saveToLocalStorage(StorageKey.CartData, cartData);
    const count = calTotalQuantity(cartData);
    setCount(count);
    console.log(count);
  }, [cartData]);

  React.useEffect(() => {
    if (pathname === '/cart') {
      setIsCardHeader(true);
    } else if (pathname === '/error') {
      setIsCardHeader(true);
    } else {
      setIsCardHeader(false);
    }
  }, [pathname]);

  React.useEffect(() => {
    if (userData?.name) {
      setIsShowModal(false);
    }
  }, [userData]);

  const [isSignUp, setIsSignUp] = React.useState<boolean>(false);
  const [isClickCart, setIsClickCart] = React.useState<boolean>(false);

  const handleLogout = () => {
    const action = logout();
    if (action) {
      dispatch(action);
    }
    const clearCartAction = clearCart();
    if (clearCartAction) {
      dispatch(clearCartAction);
    }
  };
  const { isShowModal, setIsShowModal } = useModalContext();

  const {
    formData,
    handleChange,
    isEmailValid,
    isPasswordValid,
    isFormValid,
    handleBlur,
  } = useForm({
    initState: { email: '', password: '' },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFormValid) {
      const { email, password } = formData;
      const action = login({ email, password , isClickCart});
      if (action) {
        dispatch(action);
      }
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }

    if (userData.length !== 0 && isClickCart) {
      redirect('/cart');
    }
  };

  console.log('s', isClickCart);

  return (
    <>
      {isShowModal &&
        (isSignUp ? (
          <Modal>
            <SignUp handleChange={handleChange} setIsSignUp={setIsSignUp} />
          </Modal>
        ) : (
          <Modal>
            <SignIn
              formData={formData}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              isEmailValid={isEmailValid}
              isPasswordValid={isPasswordValid}
              handleBlur={handleBlur}
              isSubmit={isSubmit}
            />
          </Modal>
        ))}
      <header>
        <div className={isCardHeader ? `header header-cart` : `header `}>
          <div className="container">
            <div
              className={
                isCardHeader
                  ? ` header-container header-container-cart`
                  : `header-container`
              }
            >
              <h1 className="logo">
                <Link to="/" className="logo-lg">
                  <img className="logo-img" src={logo} alt="E-Shop" />
                </Link>
                <a className="logo-sm" href="index.html">
                  <img
                    className="logo-img"
                    src="assets/img/logo-black.png"
                    alt="E-Shop"
                  />
                </a>
              </h1>
              <nav className="nav">
                <ul className="nav-list">
                  <li className="nav-item">
                    <a className="nav-link" href="@#">
                      Men
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="@#">
                      Women
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="@#">
                      Kids
                    </a>
                  </li>
                </ul>
              </nav>
              <ul className="header-icons-list-lg">
                <li className="header-icons-item">
                  <a className="link-search" href="@#">
                    <i className="icon icon-search"></i>
                  </a>
                </li>
                <li className="header-icons-item">
                  <Link
                    className="link-cart"
                    to={userData?.length === 0 ? `/` : '/cart'}
                    onClick={() => {
                      if (userData?.length === 0) {
                        setIsShowModal(true);
                      }
                      setIsClickCart(true);
                    }}
                  >
                    {count > 0 ? (
                      <span className="cart-quantity">{count}</span>
                    ) : null}
                    <i className="icon icon-cart"></i>
                  </Link>
                </li>
                <li
                  onClick={
                    userData?.length === 0
                      ? () => setIsShowModal(true)
                      : undefined
                  }
                  className="header-icons-item"
                >
                  {userData?.length === 0 ? (
                    <i className="icon icon-user"></i>
                  ) : (
                    <div className="user-login">
                      <span className="user-name">{userData?.name}</span>
                      <Link to={'/'}>
                        <span onClick={handleLogout} className="user-logout">
                          Log out
                        </span>
                      </Link>
                    </div>
                  )}
                </li>
              </ul>
              <ul className="header-icons-list-sm">
                <li className="header-icons-item">
                  <a className="link-search" href="@#">
                    <i className="icon icon-search-black"></i>
                  </a>
                </li>
                <li className="header-icons-item">
                  <a className="link-cart" href="@#">
                    <i className="icon icon-cart-black"></i>
                  </a>
                </li>

                <li className="header-icons-item">
                  <a className="link-user" href="@#">
                    <i className="icon icon-user-black"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

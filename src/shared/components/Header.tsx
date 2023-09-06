import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../../assets/img/logo.png';
import { calTotalQuantity } from '../../utils/caculation';
import { Cart } from '../../types';

import { ModalContext, useModalContext } from '../context/modalContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  StorageKey,
  saveToLocalStorage,
} from '../services/localStorageServices';

import { useAppDispatch } from '../../redux/store';
import { getProduct } from '../../redux/action/product';
import Modal from './Modal';
import { login } from '../../redux/action/auth';

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

  const [count, setCount] = React.useState(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const action = getProduct();
    if (action) {
      dispatch(action);
    }
  }, [dispatch]);

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

  const [formData, setFormData] = React.useState<any>([]);
  const [isSignUp, setIsSignUp] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevFormData: FormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log('sign in', formData);
    const { email, password } = formData;
    const action = login({ email, password });
    // console.log(action);
    if (action) {
      dispatch(action);
    }
    toast.info('Login in....');
    if (userMessage === 'Login success') {
      setIsShowModal(false);
    }
  };

  const handleSubmitSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('sign up', formData);
    if (formData.password !== formData.rePassword) {
      alert('Password is not correct');
    }

    // Perform any necessary actions here, such as submitting the form data to a server endpoint
  };

  const { isShowModal, setIsShowModal } = useModalContext();

  useEffect(() => {
    if (userError) {
      toast.error(userError);
    }
    if (userMessage === 'Login success') {
      toast.success(userMessage);
    }
  }, [userError, userMessage]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      {isShowModal &&
        (isSignUp ? (
          <Modal>
            <form onSubmit={handleSubmitSignUp}>
              <h2 className="modal-title">Sign up to use our features</h2>
              <input
                className="modal-input"
                type="email"
                required
                onChange={handleChange}
                name="email"
                id="sign-up-email"
                placeholder="Fill your email"
              />

              <input
                className="modal-input"
                type="text"
                required
                name="name"
                onChange={handleChange}
                id="sign-up-name"
                placeholder="Fill your name"
              />

              <input
                className="modal-input"
                type="password"
                required
                name="password"
                onChange={handleChange}
                id="sign-up-password"
                placeholder="Fill your password"
              />
              <input
                className="modal-input"
                type="password"
                required
                name="rePassword"
                onChange={handleChange}
                id="sign-up-rePassword"
                placeholder="Re-fill your password"
              />
              <button className="btn btn-primary" type="submit">
                Sign up
              </button>
            </form>
            <p>
              If you have an account.
              <span onClick={() => setIsSignUp(false)}>
                Click here to sign in
              </span>
            </p>
          </Modal>
        ) : (
          <Modal>
            <form onSubmit={handleSubmitLogin}>
              <h2 className="modal-title">Login to use our features</h2>
              <input
                className="modal-input"
                type="email"
                required
                onChange={handleChange}
                name="email"
                id="sign-in-email"
                placeholder="Fill your email"
              />
              <input
                className="modal-input"
                type="password"
                required
                name="password"
                onChange={handleChange}
                id="sign-in-password"
                placeholder="Fill your password"
              />
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </form>
            <p>
              If you dont have an account.{' '}
              <span onClick={() => setIsSignUp(true)}>
                Click here to sign up
              </span>
            </p>
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
                  <Link className="link-cart" to={`/cart`}>
                    {count > 0 ? (
                      <span className="cart-quantity">{count}</span>
                    ) : null}
                    <i className="icon icon-cart"></i>
                  </Link>
                </li>
                <li
                  onClick={() => setIsShowModal(true)}
                  className="header-icons-item"
                >
                  <i className="icon icon-user"></i>
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

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../../assets/img/logo.png';
import { calTotalQuantity } from '../../utils/caculation';
import { Cart } from '../../types';

import {
  StorageKey,
  saveToLocalStorage,
} from '../services/localStorageServices';

import { useAppDispatch } from '../../redux/store';
import { getProduct } from '../../redux/action/product';

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const [isCardHeader, setIsCardHeader] = React.useState(false);
  const cartData = useSelector(
    (state: { cart: { carts: Cart[] } }) => state.cart.carts
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
    } else if(pathname === '/error'){
      setIsCardHeader(true);
    } else {
      setIsCardHeader(false);
    }
  }, [pathname]);
  return (
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
              <li className="header-icons-item">
                <a className="link-user" href="@#">
                  <i className="icon icon-user"></i>
                </a>
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
  );
};

export default Header;

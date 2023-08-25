import React from "react";
import logo from "../../assets/img/logo.png";
const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="header-container">
            <h1 className="logo">
              <a className="logo-lg" href="">
                <img className="logo-img" src={logo} alt="E-Shop" />
              </a>
              <a className="logo-sm" href="">
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
                  <a className="nav-link" href="#">
                    Men
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Women
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Kids
                  </a>
                </li>
              </ul>
            </nav>
            <ul className="header-icons-list-lg">
              <li className="header-icons-item">
                <a className="link-search" href="">
                  <i className="icon icon-search"></i>
                </a>
              </li>
              <li className="header-icons-item">
                <a className="link-cart" href="cart.html">
                  <span id="cart-quantity"></span>
                  <i className="icon icon-cart"></i>
                </a>
              </li>
              <li className="header-icons-item">
                <a className="link-user" href="">
                  <i className="icon icon-user"></i>
                </a>
              </li>
            </ul>
            <ul className="header-icons-list-sm">
              <li className="header-icons-item">
                <a className="link-search" href="">
                  <i className="icon icon-search-black"></i>
                </a>
              </li>
              <li className="header-icons-item">
                <a className="link-cart" href="">
                  <i className="icon icon-cart-black"></i>
                </a>
              </li>

              <li className="header-icons-item">
                <a className="link-user" href="">
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

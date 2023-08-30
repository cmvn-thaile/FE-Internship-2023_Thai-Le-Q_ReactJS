import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';
import { useCart } from './shared/hook/useCart';
import { Cart } from './shared/services/types';

const Layout = () => {
  const { cartData, setCartData, addToCart, handleQuantity, handleDeleteCart } =
    useCart();
  return (
    <>
      <Header cartData={cartData} />
      <Outlet context={{cartData, setCartData, addToCart, handleQuantity, handleDeleteCart }}/>
      <Footer />
    </>
  );
};

export default Layout;

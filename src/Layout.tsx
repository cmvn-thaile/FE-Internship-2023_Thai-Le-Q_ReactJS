import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';
import { useCart } from './shared/hook/useCart';
import { Cart } from './shared/services/types';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

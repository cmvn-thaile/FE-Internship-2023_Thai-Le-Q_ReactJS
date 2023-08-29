import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';
import { useCart } from './shared/hook/useCart';
import { Cart } from './shared/services/types';

const Layout = () => {
  // const { cartData, addToCart } = useCart();
  // const [count, setCount] = React.useState(0);
  // const [productAddToCart, setProductAddToCart] = React.useState<any>(null);

  // const handleAddToCart = (product: Cart) => {
  //   console.log('product', product);
  //   addToCart(product);
  //   const count = JSON.parse(localStorage.getItem('cartQuantity') || '[]');
  //   setCount(count);
  // };

  // useEffect(() => {
  //   // setCount(JSON.parse(localStorage.getItem('cartQuantity') || '[]'));
  //   if (productAddToCart !== null) {
  //     handleAddToCart(productAddToCart);
  //   } else {
  //     setCount(0);
  //   }
  // }, [productAddToCart]);

  return (
    <>
      <Header/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

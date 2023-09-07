import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { redirect, useLocation } from 'react-router-dom';
import CartTable from './components/CartTable';
import CartEmpty from './components/CartEmpty';
import { Cart } from '../../../types';
import { useModalContext } from '../../../shared/context/modalContext';

export const Index = () => {
  const cartData = useSelector(
    (state: { cart: { carts: Cart[] } }) => state.cart.carts
  );



  return (
    <div className="container">
      {cartData && cartData.length !== 0 ? (
        <>
          <h2> Shopping Cart</h2>
          <CartTable />
        </>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

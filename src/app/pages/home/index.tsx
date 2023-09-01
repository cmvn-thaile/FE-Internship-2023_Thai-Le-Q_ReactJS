import React from 'react';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Recommend from './components/Recommend';
import Reason from './components/Reason';
import NewArrived from './components/NewArrived';

import { Cart } from '../../../types';
import { useOutletContext } from 'react-router-dom';

interface Props {
  cartData: Cart[];
  setCartData: React.Dispatch<React.SetStateAction<Cart[]>>;
  addToCart: (item: Cart) => Cart[];
  handleQuantity: (id: number, type: string) => void;
  handleDeleteCart: (id: number) => void;
}

export const Index = () => {
  const {
    cartData,
    setCartData,
    addToCart
  }: Props = useOutletContext();
  return (
    <main>
      <Banner />
      <Categories />
      <Recommend
        // cartData={cartData}
        // setCartData={setCartData}
        // addToCart={addToCart}
      />
      <Reason />
      <NewArrived
        // cartData={cartData}
        // setCartData={setCartData}
        // addToCart={addToCart}
      />
    </main>
  );
};

import React from 'react';
import CartTable from './components/CartTable';
import CartEmpty from './components/CartEmpty';
import { useCart } from '../../../shared/hook/useCart';
import {
  StorageKey,
  getFromLocalStorage,
} from '../../../shared/services/localStorageServices';
import { Cart } from '../../../shared/services/types';
import { createId } from '../../../shared/services/createId';

export const Index = () => {
  const { getCartData, handleQuantity, handleDeleteCart } = useCart();

  const [cartData, setCartData] = React.useState<Cart[]>(getCartData());
  const [productId, setProductId] = React.useState<string>('');

  const updateQuantity = (id: number, type: string) => {
    handleQuantity(id, type);
    setProductId(createId());
  };

  const deleteCartItem = (id: number) => {
    handleDeleteCart(id);
    setProductId(createId());
  };

  React.useEffect(() => {
    setCartData(getCartData());
  }, [productId]);

  return (
    <div className='container'>
      {cartData && cartData.length !== 0 ? (
        <>
          <h2> Shopping Cart</h2>
          <CartTable
            cartData={cartData}
            deleteCartItem={deleteCartItem}
            updateQuantity={updateQuantity}
          />
        </>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

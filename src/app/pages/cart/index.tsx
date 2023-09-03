import { useSelector } from 'react-redux';

import CartTable from './components/CartTable';
import CartEmpty from './components/CartEmpty';
import { Cart } from '../../../types';

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

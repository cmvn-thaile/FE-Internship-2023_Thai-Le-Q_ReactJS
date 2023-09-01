import { useSelector } from 'react-redux';

import CartTable from './components/CartTable';
import CartEmpty from './components/CartEmpty';
import { Cart } from '../../../types';

export const Index = () => {
  const cartData = useSelector((state: { carts: Cart[] }) => state.carts);

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

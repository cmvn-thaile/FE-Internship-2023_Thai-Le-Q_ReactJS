
import CartTable from './components/CartTable';
import CartEmpty from './components/CartEmpty';

import { Cart } from '../../../types';

import { useOutletContext } from 'react-router-dom';

interface Props {
  cartData: Cart[];
  handleQuantity: (id: number, type: string) => void;
  handleDeleteCart: (id: number) => void;
}

export const Index = () => {
  const {
    cartData,

    handleQuantity,
    handleDeleteCart,
  }: Props = useOutletContext();



  return (
    <div className="container">
      {cartData && cartData.length !== 0 ? (
        <>
          <h2> Shopping Cart</h2>
          <CartTable
            cartData={cartData}
            handleDeleteCart={handleDeleteCart}
            handleQuantity={handleQuantity}
          
          />
        </>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

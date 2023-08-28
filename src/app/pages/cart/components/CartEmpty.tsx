import React from 'react';
import { Link } from 'react-router-dom';
import CartEmptyImg from '../../../../assets/img/nothing-in-cart.svg';

const CartEmpty = () => {
  return (
    <>
      <div className='cart-empty'>
        <img className='cart-empty-img' src={CartEmptyImg} alt='Cart empty' />
        <h3 className='cart-empty-title'>Nothing in your cart!</h3>
        <button className='btn btn-primary'>
          <Link className='cart-empty-link' to={'/'}>
            Continue shopping
          </Link>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;

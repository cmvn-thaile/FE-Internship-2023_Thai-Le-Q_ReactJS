import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartQuantity } from '../../../../redux/action';

import { Cart } from '../../../../types';
import { calDiscountPrice, calSubTotal } from '../../../../utils/caculation';


const CartTable = () => {
  const cartData = useSelector((state: { carts: Cart[] }) => state.carts);

  const dispatch = useDispatch();

  const handleQuantity = (id: number, quantity: number) => {
    const action = updateCartQuantity(id, quantity);
    if (action) {
      dispatch(action);
    }
  };

  const handleDeleteCart = (id: number) => {
    const action = updateCartQuantity(id, 0);
    if (action) {
      dispatch(action);
    }
  }

  return (
    <table className="cart-table">
      <thead>
        <tr className="cart-table-header">
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Image</th>
          <th>Price</th>
          <th>Sub Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartData.map((item: Cart) => (
          <tr className="cart-product-row" key={item.id}>
            <td>{item.name}</td>
            <td className="cart-table-quantity-group">
              <button
                id={`minus-btn-${item.id}`}
                className="quantity-btn minus-btn"
                onClick={() => handleQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <p id={`quantity-${item.id}`}>{item.quantity}</p>
              <button
                id={`plus-btn-${item.id}`}
                className="quantity-btn plus-btn"
                onClick={() => handleQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </td>
            <td>
              <img
                className="cart-table-img"
                src={item.image}
                alt={item.name}
              />
            </td>
            <td>
              {item.discount ? (
                <div className="cart-table-price-group">
                  <span className="product-price-old">{item.price}</span>
                  <span className="product-price-new">
                    {calDiscountPrice(item.price, item.discount)}
                  </span>
                </div>
              ) : (
                <div>
                  <span className="product-price">{item.price}</span>
                </div>
              )}
            </td>
            <td>{calSubTotal(item.price, item.quantity, item.discount)}</td>
            <td>
              <button onClick={() => handleDeleteCart(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;

import React from "react";
import { useCart } from "../../../../shared/services/useCart";
import { Cart } from "../../../../shared/services/types";

const CartTable = () => {
  const { getCartData } = useCart();
  const cartData = getCartData();
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
              >
                -
              </button>
              <p id={`quantity-${item.id}`}>{item.quantity}</p>
              <button
                id={`plus-btn-${item.id}`}
                className="quantity-btn plus-btn"
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
            <td>{item.price}</td>
            <td>{item.quantity * item.price}</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;

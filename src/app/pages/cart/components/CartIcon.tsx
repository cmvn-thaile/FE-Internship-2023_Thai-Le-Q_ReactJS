import React, { useEffect } from "react";
import { useCart } from "../../../../shared/hook/useCart";
import { Cart } from "../../../../shared/services/types";

import {
  StorageKey,
  getFromLocalStorage,
} from "../../../../shared/services/localStorageServices";

const CartIcon = () => {
  const calCartQuantity = (cartItems: Cart[]) => {
    return cartItems.reduce((accumulator, item) => {
      return accumulator + item.quantity;
    }, 0);
  };
  const [cartData, setCartData] = React.useState<Cart[]>([]);
  useEffect(() => {
    setCartData(getFromLocalStorage(StorageKey.CartData));
  }, []);

  return (
    <>
      {cartData && <span id="cart-quantity">{calCartQuantity(cartData)}</span>}
      <i className="icon icon-cart"></i>
    </>
  );
};

export default CartIcon;

import React from "react";
import CartTable from "./components/CartTable";
import CartEmpty from "./components/CartEmpty";
import { useCart } from "../../../shared/hook/useCart";
import {
  StorageKey,
  getFromLocalStorage,
} from "../../../shared/services/localStorageServices";
export const Index = () => {
  const cartData = getFromLocalStorage(StorageKey.CartData);
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

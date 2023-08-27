import React, { useEffect, useState } from "react";
import { Product, Cart } from "./types";
import {
  StorageKey,
  saveToLocalStorage,
  getFromLocalStorage,
} from "./localStorageServices";

export const useCart = () => {
  const [cartData, setCartData] = useState<Cart[]>([]);


  useEffect(() => {
    const oldCartData = getFromLocalStorage(StorageKey.CartData);
    if (oldCartData) return;
    saveToLocalStorage(StorageKey.CartData, cartData);
  }, [cartData]);

  const addToCart = (product: Cart) => {
    const allCartData = getFromLocalStorage(StorageKey.CartData);
    const existingProductIndex = allCartData.findIndex(
      (item: Cart) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...allCartData];
      updatedProducts[existingProductIndex].quantity += product.quantity;
      saveToLocalStorage(StorageKey.CartData, updatedProducts);
      setCartData(updatedProducts);
    } else {
      const cartData = [...allCartData, product];
      saveToLocalStorage(StorageKey.CartData, cartData);
      setCartData(cartData);
    }
  };

  const getCartData = () => {
    return getFromLocalStorage(StorageKey.CartData);
  }

  return { getCartData,addToCart };
};

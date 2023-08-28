import React, { useEffect, useState } from "react";
import { Product, Cart } from "../services/types";
import {
  StorageKey,
  saveToLocalStorage,
  getFromLocalStorage,
} from "../services/localStorageServices";

export const useCart = () => {
  const [cartData, setCartData] = useState<Cart[]>([]);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  useEffect(() => {
    const oldCartData = getFromLocalStorage(StorageKey.CartData);
    if (oldCartData) return;
    saveToLocalStorage(StorageKey.CartData, cartData);
  }, [cartData]);

  const addToCart = (product: Cart) => {
    console.log({product})
    const allCartData = getFromLocalStorage(StorageKey.CartData);

    if (!allCartData && allCartData.length !== 0) return;

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

    handleCartQuantity();
  };

  const getCartData = () => {
    return getFromLocalStorage(StorageKey.CartData);
  };

  const handleQuantity = (productId: number, type: string) => {
    if (!productId) return;

    const allCartData = getFromLocalStorage(StorageKey.CartData) || [];

    const existingProductIndex = allCartData.findIndex(
      (item: Cart) => item.id === productId
    );

    if (existingProductIndex === -1) return;

    const updatedProducts = [...allCartData];
    if (type === "plus") {
      updatedProducts[existingProductIndex].quantity += 1;
    } else if (type === "minus") {
      updatedProducts[existingProductIndex].quantity -= 1;
      if (updatedProducts[existingProductIndex].quantity < 1) {
        updatedProducts.splice(existingProductIndex, 1);
      }
    }

    saveToLocalStorage(StorageKey.CartData, updatedProducts);
    setCartData(updatedProducts);
    handleCartQuantity();
  };

  const handleDeleteCart = (productId: number) => {
    if (!productId) return;
    const allCartData = getFromLocalStorage(StorageKey.CartData);
    const productDelete = allCartData.findIndex(
      (item: Cart) => item.id === productId
    );

    if (productDelete === -1) return;

    const updatedProducts = [...allCartData];
    updatedProducts.splice(productDelete, 1);

    saveToLocalStorage(StorageKey.CartData, updatedProducts);
    setCartData(updatedProducts);
    handleCartQuantity();
  };

  const handleCartQuantity = () => {
    const allCartData = getFromLocalStorage(StorageKey.CartData);
    const totalQuantity = allCartData.reduce(
      (total: any, item: any) => total + item.quantity,
      0
    );
    saveToLocalStorage(StorageKey.CartQuantity, totalQuantity);
    setCartQuantity(totalQuantity);
    setIsUpdate(!isUpdate);
  };

  return {
    cartData,
    cartQuantity,
    isUpdate,
    getCartData,
    addToCart,
    handleQuantity,
    handleDeleteCart,
    handleCartQuantity,
  };
};

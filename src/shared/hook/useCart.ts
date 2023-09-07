import { useEffect, useState } from 'react';
import {  Cart } from '../../types';
import {
  StorageKey,
  saveToLocalStorage,
  getFromLocalStorage,
} from '../services/localStorageServices';

export const useCart = () => {
  const [cartData, setCartData] = useState<Cart[]>(
    getFromLocalStorage(StorageKey.CartData)
  );

  

  useEffect(() => {
    saveToLocalStorage(StorageKey.CartData, cartData);
  }, [cartData]);

  const addToCart = (product: Cart) => {
    console.log({ product });
    const allCartData = getFromLocalStorage(StorageKey.CartData);

    if (!allCartData && allCartData.length === 0) return;

    const existingProductIndex = allCartData.findIndex(
      (item: Cart) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...allCartData];
      updatedProducts[existingProductIndex].quantity += product.quantity;

      return updatedProducts;
    } else {
      const cartData = [...allCartData, product];
      return cartData;
    }
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
    if (type === 'plus') {
      updatedProducts[existingProductIndex].quantity += 1;
    } else if (type === 'minus') {
      updatedProducts[existingProductIndex].quantity -= 1;
      if (updatedProducts[existingProductIndex].quantity < 1) {
        updatedProducts.splice(existingProductIndex, 1);
      }
    }

    saveToLocalStorage(StorageKey.CartData, updatedProducts);
    setCartData(updatedProducts);

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

  };


  return {
    cartData,
    setCartData,
    getCartData,
    addToCart,
    handleQuantity,
    handleDeleteCart,
  };
};

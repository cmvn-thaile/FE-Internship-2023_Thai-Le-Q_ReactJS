import { Cart } from "../shared/services/types";

export const calDiscountPrice = (price: number, discount: number): number => {
  return price - parseFloat(((price * discount) / 100).toFixed(2));
};

export const calCartQuantity = (cartItems: Cart[]) => {
  return cartItems.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);
};

export const calSubTotal = (
  price: number,
  quantity: number,
  discount?: number | null
) => {
  if (discount) {
    return (calDiscountPrice(price, discount) * quantity).toFixed(2);
  } else {
    return (price * quantity).toFixed(2);
  }
};

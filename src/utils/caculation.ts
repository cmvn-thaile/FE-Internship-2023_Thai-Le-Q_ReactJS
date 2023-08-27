export const calDiscountPrice = (price: number, discount: number): number => {
  return price - parseFloat(((price * discount) / 100).toFixed(2));
};

import React from 'react';
import { Cart, Product } from '../../../../shared/services/types';
import ProductCard from '../../../../shared/components/ProductCard';

interface ProductListProps {
  data: Product[];
  cartData: Cart[];
  setCartData: React.Dispatch<React.SetStateAction<Cart[]>>;
  addToCart: (item: Cart) => Cart[];
}
const ProductList = ({
  data,
  cartData,
  setCartData,
  addToCart,
}: ProductListProps) => {
  return (
    <ul className="product-list pt-12 sm-p-reset row">
      {data.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cartData={cartData}
          setCartData={setCartData}
          addToCart={addToCart}
        />
      ))}
    </ul>
  );
};

export default ProductList;

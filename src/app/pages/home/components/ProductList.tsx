import React from "react";
import { Cart, Product } from "../../../../shared/services/types";
import ProductCard from "../../../../shared/components/ProductCard";

interface ProductListProps {
  data: Product[];
  setProductAddToCart: (product: Cart) => void;
}

const ProductList = ({ data, setProductAddToCart }: ProductListProps) => {
  return (
    <ul className="product-list pt-12 sm-p-reset row">
      {data.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          setProductAddToCart={setProductAddToCart}
        />
      ))}
    </ul>
  );
};

export default ProductList;

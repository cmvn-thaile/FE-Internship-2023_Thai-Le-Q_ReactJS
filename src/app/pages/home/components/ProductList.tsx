import React from "react";
import { Cart, Product } from "../../../../shared/services/types";
import ProductCard from "../../../../shared/components/ProductCard";

interface ProductListProps {
  data: Product[];

}

const ProductList = ({ data }: ProductListProps) => {
  return (
    <ul className="product-list pt-12 sm-p-reset row">
      {data.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </ul>
  );
};

export default ProductList;

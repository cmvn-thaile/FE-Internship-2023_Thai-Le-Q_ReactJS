import React from "react";
import { Product } from "../../../../shared/services/types";
import ProductCard from "../../../../shared/components/ProductCard";

type ProductListProps = {
  data: Product[];
};
const ProductList = ({ data }: ProductListProps) => {
  return (
    <ul className="product-list pt-12 sm-p-reset row">
      {data.map((product) => (
        <ProductCard product={product} />
      ))}
    </ul>
  );
};

export default ProductList;

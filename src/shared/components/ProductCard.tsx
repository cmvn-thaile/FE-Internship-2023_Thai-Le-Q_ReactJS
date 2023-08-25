import React from "react";
import { Product } from "../services/types";

type ProductCardProps = {
  product: Product;

};
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <li className="product-item col col-3 col-sm-6">
      <a className="product-link">
        {product.discount ? (
          <span className="badge badge-danger product-discount absolute">
            -{product.discount}%
          </span>
        ) : (
          ""
        )}
        <div
          id={`product-${product.id}`}
          className="relative product-image-wrapper"
        >
          <img className="product-img" src={product.image} alt={product.name} />
          <button
            id={product.id.toString()}
            className={`btn ${product.id} btn-add-to-cart absolute`}
          >
            Add to cart
          </button>
        </div>
        <h4 className="product-name">{product.name}s</h4>
        <div className="product-price-group d-flex justify-space-between">
          {product.discount ? (
            <p className="product-price text-danger">
              {(
                product.price -
                (product.price * product.discount) / 100
              ).toFixed(2)}
            </p>
          ) : (
            ""
          )}
          <p className="product-price text-gray-2">{product.price}</p>
        </div>
      </a>
    </li>
  );
};

export default ProductCard;

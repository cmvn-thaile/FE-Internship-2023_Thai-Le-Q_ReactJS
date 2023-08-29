import React from "react";
import product1 from "../../../../assets/img/product-1.png";
import product2 from "../../../../assets/img/product-2.png";
import product3 from "../../../../assets/img/product-3.png";
import product4 from "../../../../assets/img/product-4.png";
import { Cart, Product, productStatus } from "../../../../shared/services/types";
import ProductList from "./ProductList";

const NewArrived = () => {
  const products: Product[] = [
    {
      id: 5,
      name: "T-Shirt Summer Vibes",
      image: product1,
      price: 119.99,
      discount: 30,
      status: productStatus.outOfStock,
    },
    {
      id: 6,
      name: "Loose Knit 3/4 Sleeve",
      image: product2,
      price: 119.99,
      discount: 25,
      status: productStatus.available,
    },
    {
      id: 7,
      name: "Basic Slim Fit T-Shirt",
      image: product3,
      price: 99.9,
      discount: null,
      status: productStatus.available,
    },
    {
      id: 8,
      name: "Loose Textured T-Shirt",
      image: product4,
      price: 11.99,
      discount: null,
      status: productStatus.outOfStock,
    },
  ];
  return (
    <section className="section section-new-arrived">
      <div id="new-arrived-product" className="container">
        <h3 className="section-title pb-24 sm-pb-16 product-sm-title">
          Product in today
        </h3>
        <ProductList data={products} />
      </div>
    </section>
  );
};

export default NewArrived;

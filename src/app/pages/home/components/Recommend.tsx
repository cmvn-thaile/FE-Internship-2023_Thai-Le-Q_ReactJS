import React from 'react';
import {
  Cart,
  Product,
  productStatus,
} from '../../../../shared/services/types';
import ProductList from './ProductList';
import product1 from '../../../../assets/img/product-1.png';
import product2 from '../../../../assets/img/product-2.png';
import product3 from '../../../../assets/img/product-3.png';
import product4 from '../../../../assets/img/product-4.png';

const Recommend = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'T-Shirt Summer Vibes',
      image: product1,
      price: 119.99,
      discount: 30,
      status: productStatus.outOfStock,
    },
    {
      id: 2,
      name: 'Loose Knit 3/4 Sleeve',
      image: product2,
      price: 119.99,
      discount: 10,
      status: productStatus.available,
    },
    {
      id: 3,
      name: 'Basic Slim Fit T-Shirt',
      image: product3,
      price: 99.9,
      discount: 50,
      status: productStatus.available,
    },
    {
      id: 4,
      name: 'Loose Textured T-Shirt',
      image: product4,
      price: 11.99,
      discount: null,
      status: productStatus.outOfStock,
    },
  ];

  return (
    <section className="section section-recommended">
      <div id="category-product" className="container">
        <div className="d-flex justify-space-between pb-24 sm-pb-16 align-center">
          <h3 className="section-title">Selected just for you</h3>
          <a className="btn btn-recommended" href="@#">
            SHOW MORE
          </a>
        </div>

        <ProductList data={products} />
      </div>
    </section>
  );
};

export default Recommend;

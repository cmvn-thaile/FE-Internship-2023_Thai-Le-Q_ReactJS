import { useSelector } from 'react-redux';

import { Product } from '../../../../types';
import ProductList from './ProductList';

const Recommend = () => {
  const products = useSelector(
    (state: { product: { products: Product[] } }) => state.product.products
  );

  return (
    <section className="section section-recommended">
      <div id="category-product" className="container">
        <div className="d-flex justify-space-between pb-24 sm-pb-16 align-center">
          <h3 className="section-title">Selected just for you</h3>
          <a className="btn btn-recommended" href="@#">
            SHOW MORE
          </a>
        </div>

        <ProductList
          data={products}
          // cartData={cartData}
          // setCartData={setCartData}
          // addToCart={addToCart}
        />
      </div>
    </section>
  );
};

export default Recommend;

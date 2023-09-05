import { useSelector } from 'react-redux';

import {
  Product,
} from '../../../../types';
import ProductList from './ProductList';

const NewArrived = () => {
  const products = useSelector(
    (state: { product: { products: Product[] } }) => state.product.products
  );
  return (
    <section className="section section-new-arrived">
      <div id="new-arrived-product" className="container">
        <h3 className="section-title pb-24 sm-pb-16 product-sm-title">
          Product in today
        </h3>
        <ProductList
          data={products}
        />
      </div>
    </section>
  );
};

export default NewArrived;

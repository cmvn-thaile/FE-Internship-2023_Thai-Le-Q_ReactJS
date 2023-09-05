import { useSelector } from 'react-redux';

import { Product } from '../../../../types';
import ProductList from './ProductList';
import Error from '../../../../shared/components/Error';

const NewArrived = () => {
  const products = useSelector(
    (state: { product: { products: Product[] } }) => state.product.products
  );

  const isError = useSelector(
    (state: { product: { error: string } }) => state.product.error
  );
  return (
    <section className="section section-new-arrived">
      <div id="new-arrived-product" className="container">
        {isError ? (
          <Error error={isError} />
        ) : (
          <>
            <h3 className="section-title pb-24 sm-pb-16 product-sm-title">
              Product in today
            </h3>
            <ProductList data={products} />
          </>
        )}
      </div>
    </section>
  );
};

export default NewArrived;

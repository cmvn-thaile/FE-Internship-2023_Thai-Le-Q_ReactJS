import { useSelector } from 'react-redux';

import { Product } from '../../../../types';
import ProductList from './ProductList';
import Error from '../../../../shared/components/Error';

const Recommend = () => {
  const products = useSelector(
    (state: { product: { products: Product[] } }) => state.product.products
  );
  const isError = useSelector(
    (state: { product: { error: string } }) => state.product.error
  );

  return (
    <section className="section section-recommended">
      <div id="category-product" className="container">
        {isError ? (
          <Error error={isError}/>
        ) : (
          <>
            <div className="d-flex justify-space-between pb-24 sm-pb-16 align-center">
              <h3 className="section-title">Selected just for you</h3>
              <a className="btn btn-recommended" href="@#">
                SHOW MORE
              </a>
            </div>

            <ProductList data={products} />
          </>
        )}
      </div>
    </section>
  );
};

export default Recommend;

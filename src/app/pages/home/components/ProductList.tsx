import { Product } from '../../../../types';
import ProductCard from '../../../../shared/components/ProductCard';
import { useSelector } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface ProductListProps {
  data: Product[];
}
const ProductList = ({ data }: ProductListProps) => {
  const isLoading = useSelector(
    (state: { product: { isLoading: boolean } }) => state.product.isLoading
  );

  return (
    <>
      {isLoading ? (
        <li className="product-skeleton row">
          <Skeleton
            containerClassName="col col-3"
            height={350}
            count={1}
          />
          <Skeleton
            containerClassName="col col-3"
            height={350}
            count={1}
          />
          <Skeleton
            containerClassName=" col col-3"
            height={350}
            count={1}
          />
          <Skeleton
            containerClassName="col col-3"
            height={350}
            count={1}
          />
        </li>
      ) : (
        <ul className="product-list pt-12 sm-p-reset row">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ProductList;

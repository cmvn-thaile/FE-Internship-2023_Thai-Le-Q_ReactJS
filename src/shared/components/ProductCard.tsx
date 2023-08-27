import { Product, Cart } from "../services/types";
import { useCart } from "../services/useCart";

type ProductCardProps = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const productToCart: Cart = {
      id: product.id,
      image: product.image,
      discount: product.discount,
      name: product.name,
      price: product.price,
      quantity: 1,
    };
    addToCart(productToCart);
  };

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
          {product.status === "outOfStock" ? (
            <button
              className={`btn ${product.id} btn-add-to-cart absolute cart-btn-disabled`}
              onClick={() =>
                alert(
                  "This product is out of stock. Please try another product!"
                )
              }
            >
              Out of stock
            </button>
          ) : (
            <button
              className={`btn ${product.id} btn-add-to-cart absolute`}
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          )}
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

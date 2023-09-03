import { useDispatch, useSelector } from 'react-redux';
import { updateCartQuantity } from '../../../../redux/action';
import { useRef, useState, useEffect } from 'react';

import { Cart } from '../../../../types';
import { calDiscountPrice, calSubTotal } from '../../../../utils/caculation';


const CartTable = () => {
  const cartData = useSelector(
    (state: { cart: { carts: Cart[] } }) => state.cart.carts
  );

  const dispatch = useDispatch();

  const handleQuantity = (id: number, quantity: number) => {
    const action = updateCartQuantity(id, quantity);
    if (action) {
      dispatch(action);
    }
  };

  const handleDeleteCart = (id: number) => {
    const action = updateCartQuantity(id, 0);
    if (action) {
      dispatch(action);
    }
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number | undefined>();

  const quantityInputRef = useRef<HTMLInputElement>(null);

  const handleQuantityDoubleClick = (id: number) => {
    setEditId(id);
    setQuantity(cartData.find((cart: Cart) => cart.id === id)?.quantity || 0);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (editId && quantity !== undefined) {
        const action = updateCartQuantity(editId, quantity);
        if (action) {
          dispatch(action);
        }
      }

      setEditId(null);
    }
  };

  const handleEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        quantityInputRef.current &&
        !quantityInputRef.current.contains(event.target as Node)
      ) {
        setEditId(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setEditId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <table className="cart-table">
      <thead>
        <tr className="cart-table-header">
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Image</th>
          <th>Price</th>
          <th>Sub Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartData.map((item: Cart) => (
          <tr className="cart-product-row" key={item.id}>
            <td>{item.name}</td>
            <td className="cart-table-quantity-group">
              <button
                id={`minus-btn-${item.id}`}
                className="quantity-btn minus-btn"
                onClick={() => handleQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <td onDoubleClick={() => handleQuantityDoubleClick(item.id)}>
                {item.id === editId ? (
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleEdit}
                    onKeyDown={handleKeyDown}
                    ref={quantityInputRef}
                    autoFocus
                  />
                ) : (
                  item.quantity
                )}
              </td>
              <button
                id={`plus-btn-${item.id}`}
                className="quantity-btn plus-btn"
                onClick={() => handleQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </td>
            <td>
              <img
                className="cart-table-img"
                src={item.image}
                alt={item.name}
              />
            </td>
            <td>
              {item.discount ? (
                <div className="cart-table-price-group">
                  <span className="product-price-old">{item.price}$</span>
                  <span className="product-price-new">
                    {calDiscountPrice(item.price, item.discount)}$
                  </span>
                </div>
              ) : (
                <div>
                  <span className="product-price">{item.price}$</span>
                </div>
              )}
            </td>
            <td>{calSubTotal(item.price, item.quantity, item.discount)}$</td>
            <td>
              <button onClick={() => handleDeleteCart(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;

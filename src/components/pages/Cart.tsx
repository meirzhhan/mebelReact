import { useSelector } from 'react-redux';
import { selectCartState } from '../redux/cart/selectors';
import CartItem from '../CartItem/CartItem';
import CartTotal from '../CartItem/CartTotal';

const Cart = () => {
  const { items, totalPrice } = useSelector(selectCartState);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  if (!totalCount) {
    return <div></div>;
  }

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__div">
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <CartTotal totalCount={totalCount} totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Cart;

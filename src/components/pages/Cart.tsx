import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartState } from '../redux/cart/selectors';
import { addItem, minusItem, removeItem } from '../redux/cart/slice';
import { TCartItems } from '../redux/cart/types';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const { items } = useSelector(selectCartState);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__content">
          <div>
            {items.map((item, index) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

          <div>Итого {totalCount} товаров на сумму</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

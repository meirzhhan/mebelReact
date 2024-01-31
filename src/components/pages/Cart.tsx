import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartState } from '../redux/cart/selectors';

const Cart = () => {
  const { items } = useSelector(selectCartState);

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__content">
          <div className="cart__item">
            {items.map((item, index) => (
              <>
                <img className="cart__item-img" src={item.imageUrl} alt="" />
                <div className="cart__item-info">
                  <div className="cart__item__top">
                    <Link to="/cart" className="cart__item-title">
                      {item.title}
                    </Link>
                    <button>Удалить</button>
                  </div>

                  <div className="cart__item__middle">
                    <span>Размеры: {item.sizes.map((i) => `${i}см * `)}</span>

                    <span>Цвет: {}</span>
                    <div>
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div>price</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

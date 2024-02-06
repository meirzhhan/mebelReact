import { Link } from 'react-router-dom';
import cl from './CartEmpty.module.scss';

const CartEmpty = () => {
  return (
    <div className="container">
      <div className={cl.cart}>
        <h4>Оформление заказа</h4>
        <p>В вашей корзине пока нет товаров</p>
        <Link className={cl.div} to="/">
          <button>Перейти к покупкам</button>
        </Link>

        <img src="https://cdn0.divan.by/app/v1/node/website/bb0a3da62fe026060267.svg" alt="" />
      </div>
    </div>
  );
};

export default CartEmpty;

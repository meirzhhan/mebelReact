import React from 'react';
import { addItem, minusItem, removeItem } from '../redux/cart/slice';
import { TCartItems } from '../redux/cart/types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import cl from './CartItem.module.scss';

const CartItem: React.FC<TCartItems> = ({ id, imageUrl, title, sizes, price, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id, price } as TCartItems));
  };
  const onClickMinus = () => {
    dispatch(minusItem({ id, price } as TCartItems));
  };
  const onClickRemove = () => {
    dispatch(removeItem({ id, price, count } as TCartItems));
  };

  return (
    <div className={cl.div}>
      <img className={cl.image} src={imageUrl} alt="" />
      <div className={cl.info}>
        <div className={cl.info__top}>
          <Link to="/cart" className={cl.info__top__title}>
            {title}
          </Link>
          <button className={cl.info__top__button} onClick={onClickRemove}>
            Удалить
          </button>
        </div>

        <div className={cl.info__middle}>
          <span className={cl.info__middle__span}>Размеры: {sizes.map((i) => `${i}см `)}</span>

          <span className={cl.info__middle__span}>Цвет: {}</span>
          <div className={cl.info__middle__button}>
            <button disabled={count === 1} onClick={onClickMinus}>
              -
            </button>
            <span>{count}</span>
            <button onClick={onClickPlus}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

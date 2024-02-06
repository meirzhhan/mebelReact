import React from 'react';

import cl from './MebelItem.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cart/slice';
import { selectCartItemById } from '../redux/cart/selectors';
import { TCartItems } from '../redux/cart/types';

type TProps = {
  id: string;
  imageUrl: string;
  title: string;
  sizes: number[];
  price: number;
};

const MebelItem: React.FC<TProps> = ({ id, imageUrl, title, sizes, price }) => {
  const dispatch = useDispatch();
  const cartItm = useSelector(selectCartItemById(id));

  const discount = price * 0.8;
  return (
    <div className={cl.mebel}>
      <img src={imageUrl} alt="" />
      <h4 className={cl.mebel__title}>{title}</h4>
      <p>Размеры: {sizes.map((size) => `${size} см`).join(' х ')}</p>
      <p>Цена со скидкой</p>
      <p className={cl.mebel__discount}>{discount.toLocaleString()} ₸</p>
      <p className={cl.mebel__price}>{price.toLocaleString()} ₸</p>
      <button onClick={() => !cartItm && dispatch(addItem({ id, price } as TCartItems))}>
        {cartItm ? 'В корзине' : 'Купить'}
      </button>
    </div>
  );
};

export default MebelItem;

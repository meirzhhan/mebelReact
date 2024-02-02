import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import cl from './MebelItem.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cart/slice';
import { TCartItems } from '../redux/cart/types';
import { selectCartItemById } from '../redux/cart/selectors';

const MebelItem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // берет id  из параметров url
  const { id } = useParams();
  // локальный стейт для сохранения  данных о мебели
  const [mebel, setMebel] = useState<TCartItems>();
  // для проверки  наличия товара в корзине
  const cartItm = useSelector(selectCartItemById(id || '0'));
  //  запрос на сервер при первом рендере компонента, выполняется 1 раз
  useEffect(() => {
    async function fetchMebel() {
      try {
        const { data } = await axios.get(
          `https://65b5597841db5efd2867a177.mockapi.io/items/mebel/${id}`,
        );
        setMebel(data);
      } catch (error) {
        alert('не удалось загрузить данные');
        navigate('/');
      }
    }
    fetchMebel();
  }, [id, navigate]);

  if (!mebel || !id) {
    return <></>;
  }

  const discount = mebel.price * 0.8;

  return (
    <div className={cl.mebel}>
      <img src={mebel.imageUrl} alt="" />
      <h4 className={cl.mebel__title}>{mebel.title}</h4>
      <p>Размеры: {mebel.sizes.map((size) => `${size} см`).join(' х ')}</p>
      <p>Цена со скидкой</p>
      <p className={cl.mebel__discount}>{discount.toLocaleString()} ₸</p>
      <p className={cl.mebel__price}>{mebel.price.toLocaleString()} ₸</p>
      <button onClick={() => !cartItm && dispatch(addItem({ ...mebel }))}>
        {cartItm ? 'В корзине' : 'Купить'}
      </button>
    </div>
  );
};

export default MebelItem;

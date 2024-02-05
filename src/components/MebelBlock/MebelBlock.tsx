import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { TCartItems } from '../redux/cart/types';
import { TMebel } from '../redux/mebel/types';
import { selectCartItemById } from '../redux/cart/selectors';
import { addItem } from '../redux/cart/slice';

const MebelBlock: React.FC<TMebel> = ({ id, imageUrl, title, sizes, price }) => {
  const dispatch = useDispatch();
  //  проверка  наличия товара в корзине по его ID
  const cartItm = useSelector(selectCartItemById(id));
  // функция для  добавления товара в корзину, срабатывает лишь 1 раз
  const onClickAdd = () => {
    const item: TCartItems = {
      id,
      imageUrl,
      title,
      price,
      sizes,
      count: 0,
    };
    !cartItm && dispatch(addItem(item));
  };

  return (
    <div className="mebel-block-wrapper">
      <div className="mebel-block">
        <Link to={`/mebel/${id}`}>
          <div className="mebel-block__image__wrapper">
            <img className="mebel-block__image" src={imageUrl} alt="Mebel" />
          </div>

          <h4 className="mebel-block__title">{title}</h4>
        </Link>

        <div className="mebel-block__bottom">
          <div className="mebel-block__price"> {price.toLocaleString()} ₸</div>
          <button onClick={onClickAdd} className="mebel-block__button">
            +<span className="mebel-block__span">{cartItm ? 'В корзине' : 'Добавить'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MebelBlock;

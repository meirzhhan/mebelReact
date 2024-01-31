import { useDispatch, useSelector } from 'react-redux';
import { TMebel } from '../redux/mebel/types';
import { addItem } from '../redux/cart/slice';
import { TCartItems } from '../redux/cart/types';
import { selectCartItemById } from '../redux/cart/selectors';

const MebelBlock: React.FC<TMebel> = ({ id, imageUrl, title, sizes, price }) => {
  const cartItm = useSelector(selectCartItemById(id));

  const dispatch = useDispatch();

  const count = 5;
  const onClickAdd = () => {
    const item: TCartItems = {
      id,
      imageUrl,
      title,
      price,
      sizes,
      count,
    };
    !cartItm && dispatch(addItem(item));
  };

  return (
    <div className="mebel-block-wrapper">
      <div className="mebel-block">
        <a href="#">
          <div className="mebel-block__image__wrapper">
            <img className="mebel-block__image" src={imageUrl} alt="Mebel" />
          </div>

          <h4 className="mebel-block__title">{title}</h4>
        </a>

        <div className="mebel-block__selector">
          <ul>
            {sizes.map((size, i) => (
              <li key={i}>{size} см</li>
            ))}
          </ul>
        </div>

        <div className="mebel-block__bottom">
          <div className="mebel-block__price"> {price} ₸</div>
          {/* <button  onClick={onClickAdd}  className="button button--outline button--add"> */}
          <button onClick={onClickAdd} className="mebel-block__button">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span className="mebel-block__span">{cartItm ? 'В корзине' : 'Добавить'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MebelBlock;

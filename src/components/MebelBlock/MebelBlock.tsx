import axios from 'axios';
import { useEffect, useState } from 'react';
import { TMebel } from '../redux/mebel/types';
import { title } from 'process';
// import '../../scss/_mebelBlock.scss';

const MebelBlock: React.FC<TMebel> = ({ id, imageUrl, title, sizes, price }) => {
  // const addedCount = cartItm ? cartItm.count : 0;
  const addedCount = 1;

  // const [mebel, setMebel] = useState<{
  //   imageUrl: string;
  //   title: string;
  //   price: number;
  // }>();

  // useEffect(() => {
  //   const mebelUrl = 'https://run.mocky.io/v3/cdb7289a-5cd2-440a-b877-10c82c20adfb';
  //   axios.get(mebelUrl).then((resp) => {
  //     const allMebel = resp.data;
  //     setMebel(allMebel);
  //   });
  // }, []);

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
          <button className="mebel-block__button">
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
            <span className="mebel-block__span">Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MebelBlock;

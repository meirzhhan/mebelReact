import React, { memo, useState } from 'react';

import cl from './Sort.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { selectFilterState } from '../redux/filter/selectors';
import { setSortByOrder, setSortByType } from '../redux/filter/slice';

const sortList = [
  { name: 'рейтингу', property: 'rating' },
  { name: 'цене', property: 'price' },
  { name: 'алфавиту', property: 'title' },
];

const Sort: React.FC = memo(() => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false); //  открыто ли меню сортировки или нет
  const { sortByType, sortByOrder } = useSelector(selectFilterState); //  получение типа сортировки из редаксТК

  //   функция для выбора типа сортировки. Передает тип сортировки в редакс и закрывает окно
  const onClickListItem = (obj: string) => {
    dispatch(setSortByType(obj));
    setOpen(false);
  };

  const sortName =
    sortByType === 'rating' ? 'рейтингу' : sortByType === 'price' ? 'цене' : 'алфавиту';

  return (
    // <div ref={sortRef} className="sort">
    <div className={cl.sort}>
      <div className={cl.sort__content}>
        <h2 className={cl.sort__content__title}>Весь асортимент</h2>

        <div className={cl.sort__label}>
          <b>Сортировка по:</b>
          <span onClick={() => setOpen(!open)}>{sortName}</span>
          <button
            onClick={() => dispatch(setSortByOrder('asc'))}
            className={sortByOrder === 'asc' ? `${cl.activeButton}` : ''}>
            ↑
          </button>
          <button
            onClick={() => dispatch(setSortByOrder('desc'))}
            className={sortByOrder === 'desc' ? `${cl.activeButton}` : ''}>
            ↓
          </button>
        </div>
        {open && (
          <div className={cl.sort__popup}>
            <ul>
              {sortList.map((obj, i) => (
                <li
                  key={i}
                  onClick={() => onClickListItem(obj.property)}
                  className={sortByType === obj.property ? `${cl.active}` : ''}>
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
});

export default Sort;

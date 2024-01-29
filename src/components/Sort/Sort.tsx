import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterState } from '../redux/filter/selectors';

import cl from './Sort.module.scss';
import { setSortByType } from '../redux/filter/slice';
import { TSort } from '../redux/filter/types';

const sortList = [
  { name: 'рейтингу', property: 'rating' },
  { name: 'цене', property: 'price' },
  { name: 'алфавиту', property: 'title' },
];

const Sort: React.FC = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false); //  открыто ли меню сортировки или нет
  const { sortByType } = useSelector(selectFilterState); //  получение типа сортировки из редаксТК

  //   функция для выбора типа сортировки. Передает тип сортировки в редакс и закрывает окно
  const onClickListItem = (obj: TSort) => {
    dispatch(setSortByType(obj));
    setOpen(false);
  };

  return (
    // <div ref={sortRef} className="sort">
    <div className={cl.sort}>
      <div className={cl.sort__label}>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sortByType.name}</span>
        <button
        // onClick={() => dispatch(setSortByOrder('asc'))}
        // className={valueOrder === 'asc' ? 'activeButton' : ''}
        >
          ↑
        </button>
        <button
        // onClick={() => dispatch(setSortByOrder('desc'))}
        // className={valueOrder === 'desc' ? 'activeButton' : ''}
        >
          ↓
        </button>
      </div>
      {open && (
        <div className={cl.sort__popup}>
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={sortByType.property === obj.property ? `${cl.active}` : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;

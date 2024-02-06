import React from 'react';

import cl from './Pagination.module.scss';

import { useSelector } from 'react-redux';
import { selectFilterState } from '../redux/filter/selectors';

type paginationProps = {
  pageLength: number;
  totalItems: number;
  onchangePage: (page: number) => void;
};

const Pagination: React.FC<paginationProps> = ({ pageLength, totalItems, onchangePage }) => {
  const { currentPage } = useSelector(selectFilterState);
  const items = [];

  for (let i = 1; i <= pageLength; i++) {
    items.push(i);
  }

  return (
    <ul className={cl.pagination}>
      <li onClick={() => onchangePage(Number(currentPage) - 1)}>{`<`}</li>
      {items.map((item, index) => (
        <li
          className={`${Number(currentPage) === item ? cl.active : ''}`}
          key={index}
          onClick={() => onchangePage(item)}>
          {item}
        </li>
      ))}
      <li onClick={() => onchangePage(Number(currentPage) + 1)}>{`>`}</li>
    </ul>
  );
};

export default Pagination;

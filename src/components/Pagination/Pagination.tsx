import { useDispatch, useSelector } from 'react-redux';
import { selectFilterState } from '../redux/filter/selectors';
import React from 'react';
import { setCurrentPage } from '../redux/filter/slice';

type paginationProps = {
  itemsPerPage: number;
  totalItems: number;
  onchangePage: (page: number) => void;
};

const Pagination: React.FC<paginationProps> = ({ itemsPerPage, totalItems, onchangePage }) => {
  const { currentPage, xTotalCount } = useSelector(selectFilterState);
  const a = [];
  // console.log(totalItems);

  for (let i = 1; i <= Math.ceil(xTotalCount / itemsPerPage); i++) {
    a.push(i);
  }

  return (
    <ul className="pagination">
      {a.map((a) => (
        <li key={a} onClick={() => onchangePage(a)}>
          {a}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;

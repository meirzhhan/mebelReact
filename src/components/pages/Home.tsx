import { useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Gallery from '../Gallery';
import Sort from '../Sort/Sort';
import Categories from '../Categories/Categories';
import MebelBlock from '../MebelBlock/MebelBlock';
import MebelSkeleton from '../MebelBlock/MebelSkeleton';
import MebelVoid from '../MebelBlock/MebelVoid';
import Pagination from '../Pagination/Pagination';

import QueryString from 'qs';

import { useAppDispatch } from '../redux/store';
import { fetchMebels } from '../redux/mebel/asyncActions';
import { useSelector } from 'react-redux';
import { selectMebelState } from '../redux/mebel/selectors';
import { selectFilterState } from '../redux/filter/selectors';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/filter/slice';
import { TFilterSliceState } from '../redux/filter/types';

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const itemsPerPage = 8;

  const { items, status } = useSelector(selectMebelState);
  const { categoryId, sortByType, sortByOrder, searchValue, currentPage } =
    useSelector(selectFilterState); // получение параметров фильтра из хранилища

  // для изменения текущей страницы пагинации
  const onchangePage = (page: number) => {
    dispatch(setCurrentPage(String(page)));
  };

  // функция для изменении категории
  const onChangeCategory = useCallback(
    (id: number) => {
      dispatch(setCategoryId(id));
    },
    [dispatch],
  );

  // При первом рендере берутся параметры из url и устанавливаются в store если они есть.
  useEffect(() => {
    if (window.location.search) {
      const params = QueryString.parse(window.location.search.substring(1)); //  убираем первый символ '?'
      dispatch(
        setFilters({
          ...params,
        } as unknown as TFilterSliceState),
      );

      isSearch.current = true;
    }
  }, [dispatch]);

  // При изменении фильтра, параметры вшиваются в url
  useEffect(() => {
    if (isMounted.current) {
      const qs = QueryString.stringify({
        currentPage,
        categoryId: categoryId > 0 ? categoryId : 0,
        sortByType,
        sortByOrder,
      });
      navigate(`?${qs}`);
    }
    isMounted.current = true;
  }, [categoryId, sortByType, sortByOrder, currentPage, navigate]);

  // get запрос на мокапи для получении данных
  const getMebels = useCallback(async () => {
    const page = `page=${currentPage}`;
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const property = `&sortBy=${sortByType}`;
    const order = `&order=${sortByOrder}`;
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchMebels({
        page,
        category,
        property,
        order,
        search,
      }),
    );
  }, [currentPage, categoryId, sortByType, sortByOrder, searchValue, dispatch]);

  // get запрос при первом  рендере и при изменении зависимостей
  useEffect(() => {
    if (!isSearch.current) {
      getMebels();
    }
    isSearch.current = false;
  }, [currentPage, categoryId, sortByType, sortByOrder, searchValue, getMebels]);

  return (
    <div className="container">
      <Gallery />
      <Categories value={categoryId} onChangeCategory={onChangeCategory} />
      <Sort />

      {status === 'error' ? (
        <MebelVoid />
      ) : (
        <div className="content__items">
          {status === 'loading'
            ? [...new Array(12)].map((_, id) => <MebelSkeleton key={id} />)
            : items.map((items) => <MebelBlock key={items.id} {...items} />)}
        </div>
      )}

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        onchangePage={onchangePage}
      />
    </div>
  );
};

export default Home;

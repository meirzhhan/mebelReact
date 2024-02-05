import { useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Gallery from '../Gallery';
import Sort from '../Sort/Sort';
import Categories from '../Categories/Categories';
import MebelBlock from '../MebelBlock/MebelBlock';
import MebelSkeleton from '../MebelBlock/MebelSkeleton';
import MebelVoid from '../MebelBlock/MebelVoid';

import QueryString from 'qs';

import { useAppDispatch } from '../redux/store';
import { fetchMebels } from '../redux/mebel/asyncActions';
import { useSelector } from 'react-redux';
import { selectMebelState } from '../redux/mebel/selectors';
import { selectFilterState } from '../redux/filter/selectors';
import { setCategoryId, setFilters } from '../redux/filter/slice';
import { TFilterSliceState } from '../redux/filter/types';

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { items, status } = useSelector(selectMebelState);
  const { categoryId, sortByType, sortByOrder, searchValue } = useSelector(selectFilterState); // получение параметров фильтра из хранилища

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

      console.log(params);
      isSearch.current = true;
    }
  }, [dispatch]);

  // При изменении фильтра, параметры вшиваются в url
  useEffect(() => {
    if (isMounted.current) {
      const qs = QueryString.stringify({
        categoryId: categoryId > 0 ? categoryId : 0,
        sortByType,
        sortByOrder,
        // currentPage
      });
      console.log(qs);
      navigate(`?${qs}`);
    }
    isMounted.current = true;
  }, [categoryId, sortByType, sortByOrder, navigate]);

  // get запрос на мокапи для получении данных
  const getMebels = useCallback(async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const property = `&sortBy=${sortByType}`;
    const order = `&order=${sortByOrder}`;
    const search = `&title=${searchValue}`;

    dispatch(
      fetchMebels({
        category,
        property,
        order,
        search,
      }),
    );
  }, [categoryId, sortByType, sortByOrder, searchValue, dispatch]);

  // get запрос при первом  рендере и при изменении зависимостей
  useEffect(() => {
    if (!isSearch.current) {
      getMebels();
    }
    isSearch.current = false;
  }, [categoryId, sortByType, sortByOrder, searchValue, getMebels]);

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
    </div>
  );
};

export default Home;

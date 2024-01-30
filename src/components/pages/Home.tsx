import React, { useCallback, useEffect, useRef } from 'react';
import Categories from '../Categories/Categories';
import { useSelector } from 'react-redux';
import { fetchMebel } from '../redux/mebel/asyncActions';
import { useAppDispatch } from '../redux/store';
import MebelBlock from '../MebelBlock/MebelBlock';
import { selectMebelState } from '../redux/mebel/selectors';
import { selectFilterState } from '../redux/filter/selectors';
import { setCategoryId } from '../redux/filter/slice';
import Sort from '../Sort/Sort';
import MebelSkeleton from '../MebelBlock/MebelSkeleton';
import Gallery from '../Gallery';

const Home = () => {
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);

  const { items, status } = useSelector(selectMebelState);
  const { categoryId, sortByType, sortByOrder, searchValue } = useSelector(selectFilterState);

  // При изменении категории
  const onChangeCategory = useCallback((id: number) => {
    // categoryId === id ? dispatch(setCategoryId(0)) : dispatch(setCategoryId(id));
    dispatch(setCategoryId(id));
  }, []);

  // Запрос на мокапи для получении данных
  const getMebel = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const property = `&sortBy=${sortByType.property}`;
    const order = `&order=${sortByOrder}`;
    const search = `&title=${searchValue}`;

    dispatch(
      fetchMebel({
        category,
        property,
        order,
        search,
      }),
    );
  };

  // Если  категория изменилась - запрашиваем новые мебельные бло
  useEffect(() => {
    if (!isSearch.current) {
      getMebel();
    }
  }, [categoryId, sortByType, sortByOrder, searchValue]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        {/* <Categories value={categoryId} onChangeCategory={onChangeCategory} /> */}
        {/* <Sort valueType={sortByType} valueOrder={sortByOrder} /> */}
      </div>
      <Gallery />

      <div className="content__middle">
        <h2 className="content__middle-title">Весь асортимент</h2>
        <Sort />
      </div>

      {status === 'error' ? (
        <div>lol</div>
      ) : (
        <div className="content__items">
          {status === 'loading'
            ? [...new Array(8)].map((_, id) => <MebelSkeleton key={id} />)
            : items.map((items) => <MebelBlock key={items.id} {...items} />)}
        </div>
      )}

      <div className="content__items"></div>
    </div>
  );
};

export default Home;

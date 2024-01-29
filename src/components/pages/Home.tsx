import React, { useCallback, useEffect, useRef, useState } from 'react';
import Categories from '../Categories/Categories';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMebel } from '../redux/mebel/asyncActions';
import { useAppDispatch } from '../redux/store';
import MebelBlock from '../MebelBlock/MebelBlock';
import { selectMebelState } from '../redux/mebel/selectors';
import { selectFilterState } from '../redux/filter/selectors';
import { setCategoryId } from '../redux/filter/slice';
import Sort from '../Sort/Sort';

const Home = () => {
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);

  const { items, status } = useSelector(selectMebelState);
  const { categoryId, sortByType } = useSelector(selectFilterState);

  // При изменении категории
  const onChangeCategory = useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  // Запрос на мокапи для получении данных
  const getMebel = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const property = `sortBy=${sortByType.property}`;

    dispatch(
      fetchMebel({
        category,
        property,
      }),
    );
  };

  // Если  категория изменилась - запрашиваем новые мебельные бло
  useEffect(() => {
    if (!isSearch.current) {
      getMebel();
    }
  }, [categoryId, sortByType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        {/* <Categories value={categoryId} onChangeCategory={onChangeCategory} /> */}
        {/* <Sort valueType={sortByType} valueOrder={sortByOrder} /> */}
      </div>
      <div className="content__middle">
        <h2 className="content__middle-title">Весь асортимент</h2>
        <Sort />
      </div>

      <div className="content__items">
        {items.map((items) => (
          <MebelBlock key={items.id} {...items} />
        ))}
      </div>

      <div className="content__items"></div>
    </div>
  );
};

export default Home;

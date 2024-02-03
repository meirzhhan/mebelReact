import { useCallback, useEffect, useRef } from 'react';

import Gallery from '../Gallery';
import Sort from '../Sort/Sort';
import Categories from '../Categories/Categories';
import MebelBlock from '../MebelBlock/MebelBlock';
import MebelSkeleton from '../MebelBlock/MebelSkeleton';
import MebelVoid from '../MebelBlock/MebelVoid';

import { useAppDispatch } from '../redux/store';
import { fetchMebels } from '../redux/mebel/asyncActions';
import { useSelector } from 'react-redux';
import { selectMebelState } from '../redux/mebel/selectors';
import { selectFilterState } from '../redux/filter/selectors';
import { setCategoryId } from '../redux/filter/slice';

const Home = () => {
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);
  const { items, status } = useSelector(selectMebelState);

  const { categoryId, sortByType, sortByOrder, searchValue } = useSelector(selectFilterState); // получение  фильтра из хранилища

  //  функция для получения мебели при изменении категории
  const onChangeCategory = useCallback(
    (id: number) => {
      dispatch(setCategoryId(id));
    },
    [dispatch],
  );

  // Запрос на мокапи для получении данных
  const getMebels = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const property = `&sortBy=${sortByType.property}`;
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
  };

  // Если что-то  поменялось в фильтре - делаем запрос
  useEffect(() => {
    if (!isSearch.current) {
      getMebels();
    }
    // isSearch.current = true;
  }, [categoryId, sortByType, sortByOrder, searchValue]);

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

import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MebelItem from '../MebelItem/MebelItem';
import MebelItemSkeleton from '../MebelItem/MebelItemSkeleton';

import { useSelector } from 'react-redux';
import { fetchMebelById } from '../redux/mebelById/asyncActions';
import { useAppDispatch } from '../redux/store';
import { selectMebelByIdState } from '../redux/mebelById/selectors';

const MebelFull = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams(); // берет id из url
  const { items, status } = useSelector(selectMebelByIdState);

  const getMebelById = useCallback(
    (id: string) => {
      id && dispatch(fetchMebelById(id));
    },
    [dispatch],
  );
  useEffect(() => {
    id && getMebelById(id);
  }, [getMebelById, id]);

  if (!items || !id) {
    return <></>;
  }

  return (
    <div className="container">
      {status === 'error' ? (
        <div></div>
      ) : status === 'loading' ? (
        <MebelItemSkeleton />
      ) : (
        <MebelItem id={id} {...items} />
      )}
    </div>
  );
};

export default MebelFull;

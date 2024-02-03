import { useSelector } from 'react-redux';
import { selectFilterState } from '../redux/filter/selectors';

const MebelVoid = () => {
  const { searchValue } = useSelector(selectFilterState);

  return (
    <div className="void">
      По запросу <span>"{searchValue}"</span> товаров не найдено. Попробуйте изменить запрос
    </div>
  );
};

export default MebelVoid;

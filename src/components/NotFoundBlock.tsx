import { Link } from 'react-router-dom';
import png from '../assets/NotFound.png';

const NotFoundBlock = () => {
  return (
    <div className="notFound">
      <img src={png} alt="" />
      <h4>Страница не найдена</h4>
      <p>К сожалению,такой страницы не существует.</p>
      <Link to="/">Перейти на главную</Link>
    </div>
  );
};

export default NotFoundBlock;

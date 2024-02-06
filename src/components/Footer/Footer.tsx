import { Link } from 'react-router-dom';

import cl from './Footer.module.scss';

const contact = ['Информация', '+7 (707) 600-20-75', 'beimishevv@gmail.com', 'Контакты'];
const info = ['Покупатель', 'филиалы', 'Доставка', 'Гарантия'];
const catalog = ['Каталог', 'Мягкая мебель', 'Корпусная мебель', 'Модульная мебель'];

const Footer = () => {
  return (
    <div className={cl.footer}>
      <div className={cl.footer__top}>
        <ul>
          {contact.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul>
          {info.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul>
          {catalog.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <Link to="https://github.com/meirzhhan" className={cl.footer__bottom}>
        Е-мебель by meirzhhan
      </Link>
    </div>
  );
};

export default Footer;

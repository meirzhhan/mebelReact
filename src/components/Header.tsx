import logoSvg from '../assets/mebel.png';

import { Link, useLocation } from 'react-router-dom';
import HeaderSearch from './HeaderSearch/HeaderSearch';

const Header = () => {
  // const location = useLocation();

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={logoSvg} alt="Pizza logo" />
          <div className="header__logo-h1">
            <h1>е-мебель</h1>
          </div>
        </div>
        <HeaderSearch />
        {/* {location.pathname !== '/cart' && ( */}
        <a href="/cart" className="header__button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              d="M24,23a3,3,0,1,0,3,3A3.0033,3.0033,0,0,0,24,23Zm0,4a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,24,27Z"
              fill="#fff"></path>
            <path
              d="M18,23H10a1,1,0,0,1,0-2H26a1,1,0,0,0,.9863-.8359l2-12A.9994.9994,0,0,0,28,7H12a1,1,0,0,0,0,2H26.8193L25.1528,19h-12.46L6.9365,3.6484A1.0008,1.0008,0,0,0,6,3H4A1,1,0,0,0,4,5H5.3071l5.25,14H10a2.99,2.99,0,0,0-.7791,5.8823A3.005,3.005,0,1,0,14.8157,25H18a1,1,0,0,0,0-2Zm-5,3a1,1,0,1,1-1-1A1.0009,1.0009,0,0,1,13,26Z"
              fill="#fff"></path>
            <path
              d="M18,11a1,1,0,0,0-1,1v1H16a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V15h1a1,1,0,0,0,0-2H19V12A1,1,0,0,0,18,11Z"
              fill="#fff"></path>
          </svg>
          <div></div>
          <span>5</span>
        </a>
        {/* )} */}
      </div>
    </div>
  );
};

export default Header;

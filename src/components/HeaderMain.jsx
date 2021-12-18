import { useState } from 'react';
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../styles/components/headerMain.scss';

const HeaderMain = () => {
  const [show, setShow] = useState(false);

  const showMenu = () => (!show ? setShow(true) : setShow(false));
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__main">
          <h2 className="header__main-logo">MarktPul</h2>
          <button type="button" className="header__bars" onClick={showMenu}>
            {!show ? <FaBars /> : <FaTimes />}
          </button>
        </div>
        <ul
          className={!show ? 'header__ul' : 'header__ul--show background--show'}
        >
          <li className="header__li">
            <Link to="/" style={{ textDecoration: 'none' }}>
              Inicio
            </Link>
          </li>
          <li className="header__li">
            <Link to="/register" style={{ textDecoration: 'none' }}>
              Registro
            </Link>
          </li>
          <li className="header__li">
            <Link to="/login" style={{ textDecoration: 'none' }}>
              Mi cuenta
            </Link>
          </li>
          <li className="header__li">
            <FaShoppingCart />
          </li>
        </ul>
        <div className="background" />
      </nav>
      <div className="header__info">
        <h1 className="header__info__title">
          Encuentra lo que necesitas, vende lo que no
        </h1>
        <div className="header__info__des">
          <input className="header__info__des__input" type="text" />
          <div className="header__info__des__fa">
            <Link to="/main/search">
              <FaSearch />
            </Link>
          </div>
        </div>
        <div className="header__info__sell">Quiero vender</div>
        <div className="header__info__buy">Quiero comprar</div>
        <div className="header__info__market">Quiero realizar un mercado</div>
      </div>
    </header>
  );
};

export default HeaderMain;

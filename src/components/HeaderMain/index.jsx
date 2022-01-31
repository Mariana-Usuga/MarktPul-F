/* eslint-disable no-unused-vars */
import JWTDecode from 'jwt-decode';
import { useState, useEffect } from 'react';
import {
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentLocalStorage } from '../../store/utils/LocalStorageUtils';

import './HeaderMain.scss';

const HeaderMain = () => {
  const cart = useSelector((state) => state.cartReducer.cart);

  const [show, setShow] = useState(false);
  useEffect(() => {
    window.localStorage.setItem('cartProduct', [JSON.stringify(cart)]);
  }, [cart]);

  const showMenu = () => (!show ? setShow(true) : setShow(false));
  const token = getCurrentLocalStorage('token');
  const usernameFromToken = token ? JWTDecode(token).username : null;
  const [username, setUsername] = useState(usernameFromToken);

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
            {username ? (
              <div>
                <FaUser />
                <Link to="/login">{` ${username}`}</Link>
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
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
            <Link to="/pages/search">
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

import { useState, useEffect } from 'react';
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HeaderMain.scss';

const HeaderMain = () => {
  const cart = useSelector((state) => state.cartReducer.cart);

  const [show, setShow] = useState(false);
  useEffect(() => {
    window.localStorage.setItem('cartProduct', [JSON.stringify(cart)]);
  }, [cart]);

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
            <Link to="/pages/search">
              <FaSearch />
            </Link>
          </div>
        </div>
        <div className="header__info__sell">
          <Link to="/pages/createProduct" style={{ textDecoration: 'none' }}>
            Quiero vender
          </Link>
        </div>
        <div className="header__info__buy">Quiero comprar</div>
        <div className="header__info__market">
          <Link to="/pages/createMarket" style={{ textDecoration: 'none' }}>
            Quiero realizar un mercado
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;

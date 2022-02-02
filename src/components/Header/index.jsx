import JWTDecode from 'jwt-decode';
import { FaUser } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Header.scss';
import { Link } from 'react-router-dom';
import CartPreview from '../CartPreview';
import { fetchCart } from '../../store/actions/cartActions';
import { getCurrentLocalStorage } from '../../store/utils/LocalStorageUtils';

const generateKey = (pre) => `${pre}_${new Date().getTime()}`;

const Header = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const cart = useSelector((state) => state.cartReducer.cart);
  const showMenu = () => (!show ? setShow(true) : setShow(false));
  const token = getCurrentLocalStorage('token');
  const usernameFromToken = token ? JWTDecode(token).username : null;
  const [username] = useState(usernameFromToken);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);
  const cartPreview = () => {
    document.getElementById('cartPrev').style.display = 'initial';
  };
  const cartPreviewLeave = () => {
    document.getElementById('cartPrev').style.display = 'none';
  };
  return (
    <header>
      <nav className="search-header__nav">
        <div className="search-header__main">
          <h2 className="search-header__main-logo">MarktPul</h2>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <i
            className="search-header__main-bars fas fa-bars"
            onClick={showMenu}
            onKeyPress={showMenu}
            role="button"
            tabIndex="0"
          />
        </div>
        <div className="search-header__des__d">
          <input
            className="search-header__des__d__input"
            type="text"
            placeholder="search for anything"
          />
          <i className="search-header__des__d__fa fas fa-search" />
        </div>
        <ul className={!show ? 'search-header__ul' : 'search-header__ul--show'}>
          <li className="search-header__li">
            <Link to="/">Inicio</Link>
          </li>
          <li className="search-header__li">
            <Link to="/register">Registro</Link>
          </li>
          <li className="search-header__li">
            {username ? (
              <div>
                <FaUser />
                <Link to="/user">{` ${username}`}</Link>
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          <li
            className="search-header__li"
            onMouseOver={cartPreview}
            onMouseLeave={cartPreviewLeave}
            onFocus={cartPreview}
          >
            <Link to="/cart">
              <i className="search-header__mobile-cart fas fa-shopping-cart">
                {/* <div className="header--cartLength">{cart.length}</div> */}
              </i>
            </Link>
            <div className="header--cartPrev" id="cartPrev">
              {cart.map((element) => (
                <CartPreview
                  src={element.imageMain}
                  producto={element.title}
                  cantidad={element.qty}
                  precio={element.price}
                  id={element._id}
                  key={generateKey(element.title)}
                />
              ))}
              <Link to="/cart">
                <button type="button" className="cartPrev--button">
                  Ir al Carrito
                </button>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

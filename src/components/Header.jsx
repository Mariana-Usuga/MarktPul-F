import React, { useState } from 'react';
import '../styles/components/header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(false);
  const showMenu = () => (!show ? setShow(true) : setShow(false));
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
            <Link to="/login">Mi cuenta</Link>
          </li>
          <li className="search-header__li">
            <Link to="/cart">
              <i className="search-header__mobile-cart fas fa-shopping-cart" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

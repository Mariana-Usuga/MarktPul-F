import React from 'react';
import '../styles/components/header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleMenu = () => {
    // const iconoMenu = document.querySelector('.header__main-bars');
    const menu = document.querySelector('.search-header__ul');
    menu.classList.toggle('search-header__ul--show');
  };
  return (
    <header>
      <nav className="search-header__nav">
        <div className="search-header__main">
          <h2 className="search-header__main-logo">MarktPul</h2>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <i
            className="search-header__main-bars fas fa-bars"
            onClick={handleMenu}
            onKeyPress={handleMenu}
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
        <ul className="search-header__ul">
          <li className="search-header__li">
            <Link to="/">Inicio</Link>
          </li>
          <li className="search-header__li">
            <Link to="/register">Registro</Link>
          </li>
          <li className="search-header__li">Mi cuenta</li>
          <li className="search-header__li">
            <i className="search-header__mobile-cart fas fa-shopping-cart" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

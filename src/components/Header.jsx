import React from 'react';
import '../styles/components/header.scss';
export const Header = () => {
  const handleMenu=(e) =>{
    const iconoMenu = document.querySelector('.header__main-bars');
    const menu = document.querySelector('.header__ul');
    menu.classList.toggle('header__ul--show');
  }    
  return (
    <header>
      <nav className="header__nav">
        <div className="header__main">
          <h2 className="header__main-logo">MarktPul</h2>
          <i className="header__main-bars fas fa-bars" onClick={handleMenu}></i>
        </div>
        <div className="header__des__d">
          <input
            className="header__des__d__input"
            type="text"
            placeholder="search for anything"
          />
          <i className="header__des__d__fa fas fa-search"></i>
        </div>
        <ul className="header__ul">
          <li className="header__li">Inicio</li>
          <li className="header__li">Registro</li>
          <li className="header__li">Mi cuenta</li>
          <li className="header__li">
            <i className="header__mobile-cart fas fa-shopping-cart"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

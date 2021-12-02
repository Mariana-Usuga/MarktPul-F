import { useState } from 'react';
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

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
          <li className="header__li">Inicio</li>
          <a href="./register">
            <li className="header__li">Registro</li>
          </a>
          <li className="header__li">Mi cuenta</li>
          <li className="header__li">
            <FaShoppingCart />
          </li>
        </ul>
        <div className="background" />
      </nav>
      <div className="header__des">
        <h1 className="header__des__title">
          Encuentra lo que necesitas, vende lo que no
        </h1>
        <div className="header__des__d">
          <input className="header__des__d__input" type="text" />
          <div className="header__des__d__fa">
            <FaSearch />
          </div>
        </div>
        <div className="header__des__sell">Quiero vender</div>
        <div className="header__des__buy">Quiero comprar</div>
        <div className="header__des__market">Quiero realizar un mercado</div>
      </div>
    </header>
  );
};

export default HeaderMain;

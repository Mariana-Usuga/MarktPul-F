import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import '../styles/components/header.scss';
import useFormProduct from '../hooks/useFormProduct';
import getMarketSearch from '../utils/getMarketSearch';

const Header = () => {
  const [show, setShow] = useState(false);
  const showMenu = () => (!show ? setShow(true) : setShow(false));
  const { data } = useFetchProducts();
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const [formValues, handleInputChange] = useFormProduct({
    searchText: q,
  });
  const { searchText } = formValues;
  const handleSearch = (e) => {
    const productsSearch = getMarketSearch(data, searchText);
    e.preventDefault();
    navigate(`productos/?q=${searchText}`);
    setProducts(productsSearch);
    e.target.value = '';
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
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="search for anything"
              className="search-header__des__d__input"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
          </form>
          {/*  <input
            className="search-header__des__d__input"
            type="text"
            placeholder="search for anything"
          /> */}
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
            <i className="search-header__mobile-cart fas fa-shopping-cart" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

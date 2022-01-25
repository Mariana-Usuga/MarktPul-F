/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { fetchMarketFilter } from '../../store/actions/searchActionsCreator';
import { fetchMarkets } from '../../store/actions/landingPageActionsCreator';
import CartPreview from '../CartPreview';
import { fetchCart } from '../../store/actions/cartActions';
import './Header.scss';

const Header = () => {
  const generateKey = (pre) => `${pre}_${new Date().getTime()}`;
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const markets = useSelector((state) => state.landing.markets);
  const cart = useSelector((state) => state.cartReducer.cart);
  // const marketsFilter = useSelector((state) => state.search.markets_filter);
  const [show, setShow] = useState(false);
  const [Search, setSearch] = useState('');
  useEffect(() => {
    dispatch(fetchMarkets());
  }, []);
  useEffect(() => {
    dispatch(fetchMarketFilter(markets, Search));
  }, [markets]);
  const { q = '' } = queryString.parse(location.search);
  const handleFilter = (e) => {
    e.preventDefault();
    dispatch(fetchMarketFilter(markets, Search));
    navigate(`search/?q=${Search}`);
    e.target.value = '';
  };
  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };
  const showMenu = () => (!show ? setShow(true) : setShow(false));
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
          <form onSubmit={handleFilter}>
            <input
              className="search-header__des__d__input"
              type="text"
              placeholder="search for anything"
              value={Search}
              onChange={handleSearch}
            />
          </form>

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
          <li
            className="search-header__li"
            onMouseOver={cartPreview}
            onMouseLeave={cartPreviewLeave}
            onFocus={cartPreview}
          >
            <Link to="/cart">
              <i className="search-header__mobile-cart fas fa-shopping-cart">
                <div className="header--cartLength">{cart.length}</div>
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

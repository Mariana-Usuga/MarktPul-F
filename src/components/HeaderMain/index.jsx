/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import CartPreview from '../CartPreview';
import { fetchCart } from '../../store/actions/cartActions';
import './HeaderMain.scss';

const HeaderMain = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');
  const generateKey = (pre) => `${pre}_${new Date().getTime()}`;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartReducer.cart);
  const showMenu = () => (!show ? setShow(true) : setShow(false));
  useEffect(() => {
    window.localStorage.setItem('cartProduct', [JSON.stringify(cart)]);
  }, [cart]);
  useEffect(() => {
    dispatch(fetchCart());
  }, []);
  const cartPreview = () => {
    document.getElementById('cartPrev').style.display = 'initial';
  };
  const cartPreviewLeave = () => {
    document.getElementById('cartPrev').style.display = 'none';
  };
  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };
  const handleFilter = (e) => {
    e.preventDefault();
    // dispatch(fetchMarketFilter(markets.items, search));
    navigate(`../main/search/?q=${search}`);
    e.target.value = '';
  };
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
            <Link to="/">Inicio</Link>
          </li>
          <li className="header__li">
            <Link to="/register">Registro</Link>
          </li>
          <li className="header__li">
            <Link to="/login">Mi cuenta</Link>
          </li>
          <li
            className="header__li"
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
        <div className="background" />
      </nav>
      <div className="header__info">
        <h1 className="header__info__title">
          Encuentra lo que necesitas, vende lo que no
        </h1>
        <div className="header__info__des">
          <form onSubmit={handleFilter}>
            <input
              className="header__info__des__input"
              type="text"
              placeholder="search for anything"
              value={search}
              onChange={handleSearch}
            />
            <div className="header__info__des__fa">
              <Link to={`/main/search/?q=${search}`}>
                <FaSearch />
              </Link>
            </div>
          </form>
        </div>
        <div className="header__info__sell">Quiero vender</div>
        <div className="header__info__buy">Quiero comprar</div>
        <div className="header__info__market">Quiero realizar un mercado</div>
      </div>
    </header>
  );
};

export default HeaderMain;

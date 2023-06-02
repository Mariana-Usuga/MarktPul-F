import JWTDecode from 'jwt-decode';
import { useState, useEffect } from 'react';
import { FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentLocalStorage } from '../../store/utils/LocalStorageUtils';
import CartPreview from '../CartPreview';
import { fetchCart } from '../../store/actions/cartActions';
import './HeaderMain.scss';

const HeaderMain = () => {
  const token = getCurrentLocalStorage('token');
  const cart = useSelector((state) => state.cartReducer.cart);

  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');
  const generateKey = (pre) => `${pre}_${new Date().getTime()}`;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showMenu = () => (!show ? setShow(true) : setShow(false));
  const usernameFromToken = token ? JWTDecode(token).username : null;
  const [username] = useState(usernameFromToken);
  useEffect(() => {
    window.localStorage.setItem('cartProduct', [JSON.stringify(cart)]);
    console.log('USER ', username);
    console.log('usernameFromToken ', usernameFromToken);
    console.log('usernameFromToken ', usernameFromToken);
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
    navigate(`../pages/search/?q=${search}`);
    e.target.value = '';
  };
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__main">
          <h2 className="header__main-logo">
            <Link to="/">MarktPul</Link>
          </h2>
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
                <Link to="/user">{` ${username}`}</Link>
              </div>
            ) : (
              <Link to="login">Login</Link>
            )}
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
              <Link to={`/pages/search/?q=${search}`}>
                <FaSearch />
              </Link>
            </div>
          </form>
        </div>
        <div className="header__info__sell">
          <Link
            to={token ? '/pages/createProduct' : '/login'}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Quiero vender
          </Link>
        </div>
        {/* <div className="header__info__buy">Quiero comprar</div> */}
        <div className="header__info__market">
          <Link
            to={token ? '/pages/createMarket' : '/login'}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Quiero realizar un mercado
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;

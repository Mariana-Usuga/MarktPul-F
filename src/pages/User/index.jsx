/*eslint-disable*/
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UserSectionAccount from '../../components/UserSectionAccount';
import UserSectionPicture from '../../components/UserSectionPicture';
import UserSectionAdress from '../../components/UserSectionAdress';
import { logout } from '../../store/actions/authActionsCreator';
import { getCurrentLocalStorage } from '../../store/utils/LocalStorageUtils';
import { fetchUser } from '../../store/actions/userActionsCreator';

import 'react-phone-number-input/style.css';
import './User.scss';

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [optionState, setOptionState] = useState({
    current: 'account',
  });

  const renderOptions = (option) => {
    switch (option) {
      case 'account':
        return <UserSectionAccount />;
      case 'address':
        return <UserSectionAdress />;
      default:
        return <UserSectionAccount />;
    }
  };

  const token = getCurrentLocalStorage('token');

  const handleClick = ({ target }) => {
    const { name } = target;
    setOptionState({ current: name });
  };

  const handleClickLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (token) {
      dispatch(fetchUser(token));
    }
  }, []);

  return (
    <div className="user-page">
      <Header />
      <div className="user-container">
        <h1 className="user-container__title">Mis datos</h1>
        <div className="user-container__data">
          <div className="user-container__data--sidebar">
            <UserSectionPicture />
            <ul className="user-container__data--sidebar-options">
              <li>
                <button
                  className={'user-container__data--sidebar-options-btn'}
                  name="account"
                  onClick={handleClick}
                  type="button"
                >
                  Cuenta
                </button>
              </li>
              <li>
                <button
                  className={'user-container__data--sidebar-options-btn'}
                  name="address"
                  onClick={handleClick}
                  type="button"
                >
                  Direcciones
                </button>
              </li>
              <li>
                <Link to="/pages/createMarket">Crear Mercado</Link>
              </li>
              <li>
                <Link to="/pages/createProduct">Crear Productos</Link>
              </li>
              <li>
                <Link to="/pages/marketReport/">Ver Mercados</Link>
              </li>
              <li>
                <button
                  className={'user-container__data--sidebar-options-btn'}
                  name="logout"
                  onClick={handleClickLogout}
                  type="button"
                >
                  Cerrar sesión
                </button>
              </li>
            </ul>
          </div>
          {renderOptions(optionState.current)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default User;

/*eslint-disable*/
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

const currentUser = {
  _id: {
    $oid: '61f5b8ff506fd791801b17cd',
  },
  email: 'jocdiazmuic@gmail.com',
  username: 'josekdiaz',
  name: 'Jose Carlos Díaz',
  password: '$2b$10$tERZn5CnLLaBm.jO2QzWwu.NcpCPGzk8qMBdDGDDQEqz5Nii5nv/C',
  role: 'user',
  cell: '+573017559052',
  marketId: {
    $oid: '61f5b8ff506fd791801b17cb',
  },
  picture: 'https://avatars.githubusercontent.com/u/13368066?v=4',
  active: true,
  passwordResetToken: null,
  passwordResetExpires: null,
  createdAt: {
    $date: '2022-01-29T22:00:31.121Z',
  },
  updatedAt: {
    $date: '2022-01-29T22:00:54.277Z',
  },
  __v: 0,
};

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

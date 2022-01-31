/*eslint-disable*/
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import PhoneInput from 'react-phone-number-input';
import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import 'react-phone-number-input/style.css';
import './User.scss';

const user = {
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
  const hi = 'hi';
  const [accountData, setAccountData] = useState({
    name: user.name ?? '',
    country: user.country ?? '',
  });
  const handleSubmitAccount = (e) => {
    e.preventDefault();
    console.log('Has hecho submit al account', e);
  };
  return (
    <div className="user-page">
      <Header />
      <div className="user-container">
        <h1>Mis datos</h1>
        <div className="user-container__data">
          <div className="user-container__data--hero">
            <div className="user-container__data--hero-pic">
              <img src={user.picture} alt={user.username} />
            </div>
            <div className="user-container__data--hero-username">
              {`@${user.username}`}
            </div>
          </div>
          <div className="user-container__data--form">
            <h2>De la cuenta</h2>
            <form
              action="submit"
              onSubmit={handleSubmitAccount}
              method="post"
              className="user-container__data--form-section"
            >
              <label htmlFor="email">
                Email
                <input
                  value={user.email}
                  data-testid="email-user"
                  id="email"
                  title="email registrado"
                  className="user-container__data--form-section-input"
                  disabled
                />
              </label>
              <label htmlFor="username">
                Usuario
                <input
                  value={user.username}
                  data-testid="username-user"
                  id="username"
                  title="username registrado"
                  className="user-container__data--form-section-input"
                  disabled
                />
              </label>
              <label htmlFor="firstname">
                Nombre completo
                <input
                  value={user.name}
                  data-testid="name-user"
                  id="name"
                  title="Nombre completo"
                  className="user-container__data--form-section-input"
                />
              </label>
              <label htmlFor="country">
                Pais
                <CountryDropdown
                  id="country"
                  data-testid="country-user"
                  preferredCountries={['co', 'pe']}
                  value={user.country}
                  handleChange={(e) => console.log(e.target.value)}
                  style={{ border: 'none' }}
                  className="user-container__data--form-section-input"
                ></CountryDropdown>
              </label>
              <label htmlFor="cell">
                Celular
                <PhoneInput
                  country={user.country}
                  international={true}
                  value={user.cell}
                  onChange={(e) => console.log(e)}
                  className="user-container__data--form-section-input"
                />
              </label>
              <label htmlFor="register__button">
                <input
                  type="submit"
                  value="Actualizar datos"
                  className="user-container__data--form-section-btn_submit"
                  id="register__button"
                />
              </label>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default User;

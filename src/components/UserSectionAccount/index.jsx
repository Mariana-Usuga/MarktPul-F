/*eslint-disable*/
/* eslint-disable jsx-a11y/label-has-associated-control */
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import PhoneInput from 'react-phone-number-input';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCurrentLocalStorage } from '../../store/utils/LocalStorageUtils';
import {
  fetchUser,
  fetchUpdateUser,
} from '../../store/actions/userActionsCreator';

const UserSectionAccount = () => {
  const token = getCurrentLocalStorage('token');
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [userAccount, setUserAccount] = useState({
    ...user,
    name: user.name ?? '',
    country: user.country ?? '',
    cell: user.cell ?? '',
    email: user.email ?? '',
    username: user.username ?? '',
  });

  useEffect(() => {
    if (token) {
      dispatch(fetchUser(token));
    }
  }, []);

  useEffect(() => {
    setUserAccount({
      ...user,
      name: user.name ?? '',
      country: user.country ?? '',
      cell: user.cell ?? '',
      email: user.email ?? '',
      username: user.username ?? '',
    });
  }, [user]);

  const handleChange = ({ target }) => {
    const { id: inputName, value } = target;
    setUserAccount({ ...userAccount, [inputName]: value });
  };

  const handleSubmitAccount = (e) => {
    e.preventDefault();
    const { name, country, cell } = userAccount;
    dispatch(fetchUpdateUser({ name, country, cell }, user._id, token));
  };

  return (
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
            value={userAccount.email}
            onChange={handleChange}
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
            value={userAccount.username}
            onChange={handleChange}
            data-testid="username-user"
            id="username"
            title="username registrado"
            className="user-container__data--form-section-input"
            disabled
          />
        </label>
        <label htmlFor="fullname">
          Nombre completo
          <input
            value={userAccount.name}
            onChange={handleChange}
            data-testid="name-user"
            id="name"
            name="name"
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
            name="country"
            value={userAccount.country}
            handleChange={handleChange}
            style={{ border: 'none' }}
            className="user-container__data--form-section-input"
          />
        </label>
        <label htmlFor="cell">
          Celular
          <PhoneInput
            defaultCountry={'CO'}
            international
            name="cell"
            value={userAccount.cell}
            onChange={(value) =>
              setUserAccount({ ...userAccount, cell: value })
            }
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
  );
};

export default UserSectionAccount;

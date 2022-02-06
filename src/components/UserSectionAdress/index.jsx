import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentLocalStorage } from '../../store/utils/LocalStorageUtils';
import { fetchUpdateUser } from '../../store/actions/userActionsCreator';

/*eslint-disable*/
const UserSectionAdress = () => {
  const token = getCurrentLocalStorage('token');
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const location = user?.location ?? {};

  const [userAdress, setUserAdress] = useState({ location });

  useEffect(() => {
    setUserAdress({
      country: user.location?.country ?? '',
      address: user.location?.address ?? '',
      city: user.location?.city ?? '',
    });
  }, [user]);

  const handleChange = ({ target }) => {
    const { name: inputName, value } = target;
    setUserAdress({ ...userAdress, [inputName]: value });
  };

  const handleSubmitAccount = (e) => {
    e.preventDefault();
    const { country, address, city } = userAdress;
    dispatch(
      fetchUpdateUser(
        { location: { country, address, city } },
        user._id,
        token,
      ),
    );
  };

  return (
    <div className="user-container__data--form">
      <h2>Mi dirección</h2>
      <form
        action="submit"
        onSubmit={handleSubmitAccount}
        method="post"
        className="user-container__data--form-section"
      >
        <label htmlFor="adress">
          Direccion
          <input
            value={userAdress.address}
            name="address"
            data-testid="address-user"
            id="address"
            title="direccion"
            className="user-container__data--form-section-input"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="city">
          Ciudad
          <input
            value={userAdress.city}
            name="city"
            data-testid="city-user"
            id="city"
            title="direccion"
            className="user-container__data--form-section-input"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="adress__button">
          <input
            type="submit"
            value="Actualizar mi dirección"
            className="user-container__data--form-section-btn_submit"
            id="adress_button"
          />
        </label>
      </form>
    </div>
  );
};

export default UserSectionAdress;

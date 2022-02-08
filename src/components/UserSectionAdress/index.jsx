import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentLocalStorage } from '../../store/utils/LocalStorageUtils';
import { fetchUpdateUser } from '../../store/actions/userActionsCreator';
// import { patchUser } from '../../services/UserPageServices';
const UserSectionAdress = () => {
  const token = getCurrentLocalStorage('token');
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const location = user?.location ?? {};
  const [loading, setLoading] = useState(null);
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

  const handleSubmitAccount = async (e) => {
    e.preventDefault();
    const { country, address, city } = userAdress;
    setLoading(true);
    const userResponse = await dispatch(
      fetchUpdateUser(
        { location: { country, address, city } },
        user._id,
        token,
      ),
    );
    if (userResponse === 'OK') {
      setLoading(false);
    }
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
        <button
          type="submit"
          className="user-container__data--form-section-btn_submit"
        >
          {loading ? (
            <img
              className="loading"
              src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
              alt="loading content"
            />
          ) : (
            'Actualizar mi dirección'
          )}
        </button>
        {/* <label htmlFor="adress__button">
          <input
            type="submit"
            value="Actualizar mi dirección"
            className="user-container__data--form-section-btn_submit"
            id="adress_button"
          />
        </label> */}
      </form>
    </div>
  );
};

export default UserSectionAdress;

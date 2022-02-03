import { useState } from 'react';

/*eslint-disable*/
const UserSectionAdress = ({ user }) => {
  const location = user?.location ?? '';

  const [userAdress, setUserAdress] = useState({
    location: location,
  });

  const handleChange = ({ target }) => {
    const { name: inputName, value } = target;
    setUserAdress({ ...userAdress, [inputName]: value });
  };

  const handleSubmitAccount = (e) => {
    e.preventDefault();
    console.log('Has hecho submit a las direcciones', e);
  };
  return (
    <div className="user-container__data--form">
      <h2>Mis direcciones</h2>
      <form
        action="submit"
        onSubmit={handleSubmitAccount}
        method="post"
        className="user-container__data--form-section"
      >
        <label htmlFor="location">
          Direccion
          <input
            value={userAdress.location}
            name="location"
            data-testid="adress-user"
            id="lcoation"
            title="direccion"
            className="user-container__data--form-section-input"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="adress__button">
          <input
            type="submit"
            value="Actualizar datos"
            className="user-container__data--form-section-btn_submit"
            id="adress_button"
          />
        </label>
      </form>
    </div>
  );
};

export default UserSectionAdress;

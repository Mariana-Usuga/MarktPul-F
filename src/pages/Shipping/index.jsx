import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddress } from '../../store/actions/chageAddressActionsCreator';
// import { fetchUser } from '../../store/actions/userActionsCreator';

import './shipping.scss';

const Shipping = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [form, setForm] = useState({
    location: {
      address: '',
      country: '',
      city: '',
      moreDetail: '',
      state: '',
    },
  });
  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const newState = { ...form };
    newState[name] = value;
    setForm(newState);
  };
  const sendData = (e) => {
    e.preventDefault();
    // console.log('token', user._id);
    // console.log('form', form);
    dispatch(fetchAddress(form, user._id));
  };
  return (
    <section className="shipping">
      <div className="notRegistered">
        <h3>¿No estas registrado? ¡Registrate!</h3>
      </div>
      <div className="paymentMethod">
        <h3>Pero antes... Elige tu direccion de envio</h3>
      </div>
      <label className="radio-div shipping--border" htmlFor="saved">
        <input type="radio" name="address" id="saved" />
        Utiliza una direccion ya existente
      </label>
      <div className="saved-address shipping--border">
        <h4>Direccion de envio</h4>
        <div className="saved-address__container">
          <div className="saved-address__description">Mi casa</div>
          <div className="saved-address__address">
            Calle Falsa 123, Barrio Siempre viva
          </div>
          <div className="saved-address__place">Medellín, Colombia</div>
        </div>
      </div>
      <label className="radio-div shipping--border" htmlFor="new">
        <input type="radio" name="address" id="new" />
        Registrar una nueva
      </label>
      <div className="new-address shipping--border">
        <h4>Direccion de envio</h4>
        <div className="new-address__container">
          <div className="new-address__container--left">
            <label htmlFor="new-address__address">
              Direccion
              <input
                onChange={handleChange}
                type="text"
                name="address"
                id="new-address__address"
              />
            </label>
            <label htmlFor="new-address__details">
              Mas Detalles
              <textarea
                onChange={handleChange}
                type="text"
                name="moreDetail"
                id="new-address__details"
              />
            </label>
          </div>
          <div className="new-address__container--right">
            <label htmlFor="new-address__country">
              Pais
              <input
                onChange={handleChange}
                type="text"
                name="country"
                id="new-address__country"
              />
            </label>
            <label htmlFor="new-address__state">
              Estado o Distrito
              <input
                onChange={handleChange}
                type="text"
                name="state"
                id="new-address__state"
              />
            </label>
            <label htmlFor="new-address__city">
              Ciudad
              <input
                onChange={handleChange}
                type="text"
                name="city"
                id="new-address__city"
              />
            </label>
          </div>
        </div>
        <button onClick={sendData} className="btn__changeAddress" type="button">
          Cambiar direccion
        </button>
      </div>
    </section>
  );
};
export default Shipping;

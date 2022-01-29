/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheckCircle } from 'react-icons/fa';
import {
  fetchAddress,
  existingAddressTrue,
  existingAddressFalse,
} from '../../store/actions/changeAddressActionsCreator';
import { showLoader, hideLoader } from '../../store/actions/payActionsCreator';

import './shipping.scss';

const Shipping = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.pay.isLoading);
  const location = useSelector((state) => state.changeAddress.location);
  const [showLoaderState, setShowLoaderState] = useState(false);
  const user = useSelector((state) => state.user.user);
  const [form, setForm] = useState({
    address: '',
    country: '',
    city: '',
    moreDetail: '',
    state: '',
  });
  const handleChange = (e) => {
    if (e.target.id === 'exists') {
      dispatch(existingAddressTrue());
    } else if (e.target.id === 'new') {
      dispatch(existingAddressFalse());
    }
    const { name } = e.target;
    const { value } = e.target;
    const newState = { ...form };
    newState[name] = value;
    setForm(newState);
  };
  const sendData = async (e) => {
    e.preventDefault();
    const locationN = {
      location: {
        address: form.address,
        country: form.country,
        city: form.city,
        moreDetail: form.moreDetail,
        state: form.state,
      },
    };

    if (!isLoading) {
      dispatch(showLoader());
      await dispatch(fetchAddress(locationN, user._id, token));
      if (location) {
        setShowLoaderState(true);
        dispatch(hideLoader());
      }
    }
  };
  return (
    <section className="shipping">
      <div className="notRegistered">
        <h3>¿No estas registrado? ¡Registrate!</h3>
      </div>
      <div className="paymentMethod">
        <h3>Pero antes... Elige tu direccion de envio</h3>
      </div>
      <label className="radio-div shipping--border" htmlFor="exists">
        <input onClick={handleChange} name="address" type="radio" id="exists" />
        Utiliza una direccion ya existente
      </label>
      <div className="saved-address shipping--border">
        <h4>Dirección de envio</h4>
        <div className="saved-address__container">
          <div className="saved-address__description">Direccion registrada</div>
          <div className="saved-address__address">{user.location?.address}</div>
          <div className="saved-address__place">
            {`${user.location?.city}, ${user.location?.country}`}
          </div>
        </div>
      </div>
      <label className="radio-div shipping--border" htmlFor="new">
        <input onClick={handleChange} type="radio" name="address" id="new" />
        Cambiar dirección
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
          {!isLoading && !showLoaderState ? (
            'Cambiar direccion'
          ) : !showLoaderState ? (
            <img
              className="loading"
              src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
              alt="loading content"
            />
          ) : (
            <FaCheckCircle />
          )}
        </button>
      </div>
    </section>
  );
};
export default Shipping;

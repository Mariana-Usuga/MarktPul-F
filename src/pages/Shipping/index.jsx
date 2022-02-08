/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheckCircle } from 'react-icons/fa';
import {
  fetchAddress,
  existingAddressTrue,
  existingAddressFalse,
} from '../../store/actions/changeAddressActionsCreator';
import { showLoader, hideLoader } from '../../store/actions/payActionsCreator';
import { getCurrentLocalStorage } from '../../store/utils/LocalStorageUtils';
import UserSectionAdress from '../../components/UserSectionAdress';

import './shipping.scss';

const Shipping = ({ canProceed, setCanProceed }) => {
  const token = getCurrentLocalStorage('token');
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.pay.isLoading);
  const location = useSelector((state) => state.changeAddress.location);
  const [showLoaderState, setShowLoaderState] = useState(false);
  const user = useSelector((state) => state.user.user);
  const [isNewAddress, setIsNewAddress] = useState(false);

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
      setIsNewAddress(false);
      return;
    }
    if (e.target.id === 'new') {
      dispatch(existingAddressFalse());
      const { name } = e.target;
      const { value } = e.target;
      const newState = { ...form };
      newState[name] = value;
      setForm(newState);
      setIsNewAddress(true);
    }
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
      dispatch(fetchAddress(locationN, user._id));
      if (location) {
        setShowLoaderState(true);
        dispatch(hideLoader());
      }
    }
  };
  useEffect(() => {
    if (user.location?.address) {
      setCanProceed(true);
    } else {
      setCanProceed(false);
      setIsNewAddress(true);
    }
  }, [user]);

  return (
    <section className="shipping">
      {!token ? (
        <div className="notRegistered">
          <h3>¿No estas registrado? ¡Registrate!</h3>
        </div>
      ) : null}
      <div className="paymentMethod">
        <h3>Elige tu direccion de envío</h3>
      </div>
      <label className="radio-div shipping--border" htmlFor="exists">
        <input
          onClick={handleChange}
          name="address"
          type="radio"
          id="exists"
          checked={!isNewAddress}
        />
        Utiliza una direccion ya existente
      </label>
      {!isNewAddress ? (
        <div className="saved-address shipping--border">
          <h4>Dirección de envio</h4>
          <div className="saved-address__container">
            <div className="saved-address__description">
              Direccion registrada
            </div>
            <div className="saved-address__address">
              {user.location?.address}
            </div>
            <div className="saved-address__place">
              {`${user.location?.city}, ${user.location?.country}`}
            </div>
          </div>
        </div>
      ) : null}

      <label className="radio-div shipping--border" htmlFor="new">
        <input
          onClick={handleChange}
          type="radio"
          name="address"
          id="new"
          checked={isNewAddress}
        />
        Registra o cambia de dirección
      </label>
      {isNewAddress ? <UserSectionAdress /> : null}
    </section>
  );
};
export default Shipping;

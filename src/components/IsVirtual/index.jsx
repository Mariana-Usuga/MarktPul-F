import { useState } from 'react';
import PropTypes from 'prop-types';
import AddressMarket from '../AddressMarket/index';

import './IsVirtual.scss';

const IsVirtual = ({ handleChange }) => {
  const [showPlace, setShowPlace] = useState('');
  return (
    <>
      <div className="virtual">
        <label className="virtual__label" htmlFor="virtual">
          <input
            className="virtual__radio"
            id="virtual"
            type="radio"
            name="choosePaymentMethod"
            onClick={() => setShowPlace('Virtual')}
          />
          Virtual
        </label>
        <div className={showPlace === 'Virtual' ? null : 'hide'}>
          <label htmlFor="virtual">Ingresa el link del evento</label>
          <input
            className="formAddressMarket__input"
            onChange={handleChange}
            name="virtual"
            type="text"
            id="virtual"
          />
        </div>
      </div>
      <div className="location">
        <label className="containerPay__label" htmlFor="fisico">
          <input
            className="containerPay__radio"
            id="fisico"
            type="radio"
            name="fisico"
            onClick={() => setShowPlace('Fisico')}
          />
          Fisico
        </label>
        <div className={showPlace === 'Fisico' ? null : 'hide'}>
          <AddressMarket handleChange={handleChange} />
        </div>
      </div>
    </>
  );
};

IsVirtual.propTypes = {
  handleChange: PropTypes.string.isRequired,
};

export default IsVirtual;

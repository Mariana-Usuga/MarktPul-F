import { useState } from 'react';
import PropTypes from 'prop-types';
import AddressMarket from './AddressMarket';

import '../styles/components/IsVirtual.scss';

const IsVirtual = ({ handleChange }) => {
  const [showPlace, setShowPlace] = useState('');
  // const [show, setShow] = useState(false);
  // const showAddress = () => {
  //   setShowPlace('Fisico');
  // };
  return (
    <>
      <div className="containerPay">
        <label className="containerPay__label" htmlFor="Fisico">
          <input
            className="containerPay__radio"
            id="Fisico"
            type="radio"
            name="choosePaymentMethod"
            onClick={() => setShowPlace('Fisico')}
          />
          Fisico
        </label>
        <div className={showPlace === 'Fisico' ? 'item show' : 'item hide'}>
          <AddressMarket handleChange={handleChange} />
        </div>
      </div>
      <div className="containerPay">
        <label className="containerPay__label" htmlFor="virtual">
          <input
            className="containerPay__radio"
            id="virtual"
            type="radio"
            name="choosePaymentMethod"
            onClick={() => setShowPlace('Virtual')}
          />
          Virtual
        </label>
      </div>
    </>
  );
};

IsVirtual.propTypes = {
  handleChange: PropTypes.string.isRequired,
};

export default IsVirtual;

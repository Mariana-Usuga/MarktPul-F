import { useState } from 'react';
import PropTypes from 'prop-types';
import CardPayment from '../CardPayment/index';
// import PaymentOnDelivery from './PaymentOnDelivery';
// import Paypal from './Paypal';
// import Epayco from './Epayco';

import './PaymentMethod.scss';

const PaymentMethod = ({ method, canProceed, setCanProceed, id }) => {
  const [showMethod, setShowMethod] = useState('');
  const [show, setShow] = useState(false);
  const showCardPay = () => {
    if (method === 'Pago contraentrega' && !show) {
      setShowMethod('Pago contraentrega');
      setShow(true);
    } else if (method === 'Pago Tarjeta débito o crédito' && !show) {
      setShowMethod('Pago Tarjeta débito o crédito');
      setShow(true);
    } else if (method === 'Paypal' && !show) {
      setShowMethod('Paypal');
      setShow(true);
    } else if (method === 'ePayco' && !show) {
      setShowMethod('ePayco');
      setShow(true);
    } else {
      setShowMethod('');
      setShow(false);
    }
  };

  return (
    <>
      <div className="containerPay">
        <input
          className="containerPay__radio"
          type="radio"
          name="choosePaymentMethod"
          onClick={showCardPay}
        />
        <label htmlFor="contactChoice1">{method}</label>
      </div>
      <div
        className={showMethod === 'Pago contraentrega' && show ? null : 'hide'}
      >
        {/* <PaymentOnDelivery /> */}
      </div>
      <div
        className={
          showMethod === 'Pago Tarjeta débito o crédito' && show ? null : 'hide'
        }
      >
        <CardPayment
          id={id}
          canProceed={canProceed}
          setCanProceed={setCanProceed}
        />
      </div>
      <div className={showMethod === 'Paypal' && show ? 'show' : 'hide'}>
        {/* <Paypal /> */}
      </div>
      <div className={showMethod === 'ePayco' && show ? 'show' : 'hide'}>
        {/* <Epayco /> */}
      </div>
    </>
  );
};
PaymentMethod.propTypes = {
  method: PropTypes.string.isRequired,
  canProceed: PropTypes.bool.isRequired,
  setCanProceed: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default PaymentMethod;

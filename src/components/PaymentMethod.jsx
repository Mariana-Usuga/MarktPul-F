import PropTypes from 'prop-types';

import '../styles/components/paymentMethod.scss';

const PaymentMethod = ({ method }) => {
  console.log('worki');
  return (
    <div className="containerPay">
      <input className="containerPay__radio" type="radio" />
      <label htmlFor="contactChoice1">{method}</label>
    </div>
  );
};

PaymentMethod.propTypes = {
  method: PropTypes.string.isRequired,
};

export default PaymentMethod;

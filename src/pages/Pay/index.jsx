import PropTypes from 'prop-types';
// import { useEffect } from 'react';
import PaymentMethod from '../../components/PaymentMethod/index';
import ShoppingCart from '../ShoppingCart';
import ShipmentSummary from '../../components/ShipmentSummary';
import BuyAproduct from '../../components/BuyAproduct/index';

import './Pay.scss';

const Pay = ({ id, canProceed, setCanProceed }) => {
  return (
    <div className="payContainer">
      <div className="payContainer__item">
        <ShipmentSummary id={id} />
        <div className="orderSummary">
          <div>
            <h2 className="titleOrder">Resumen de la compra</h2>
          </div>
          {id ? <BuyAproduct id={id} /> : <ShoppingCart />}
        </div>
      </div>
      <div className="payContainer__item">
        <div className="paymentMethod">
          <h3>Elige tu medio de pago</h3>
        </div>
        <PaymentMethod
          id={id}
          method="Pago Tarjeta débito o crédito"
          canProceed={canProceed}
          setCanProceed={setCanProceed}
        />
      </div>
    </div>
  );
};

Pay.propTypes = {
  id: PropTypes.string.isRequired,
  canProceed: PropTypes.bool.isRequired,
  setCanProceed: PropTypes.func.isRequired,
};
export default Pay;

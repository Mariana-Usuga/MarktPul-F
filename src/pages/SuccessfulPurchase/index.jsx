import PropTypes from 'prop-types';
import ShipmentSummary from '../../components/ShipmentSummary/index';
import BuyAproduct from '../../components/BuyAproduct';
import ShoppingCart from '../ShoppingCart';

import './SuccessfulPurchase.scss';

const SuccessfulPurchase = ({ id }) => (
  <div className="purchaseSummary">
    <img
      className="purchaseSummary__img"
      src="https://res.cloudinary.com/db3njhxi0/image/upload/v1642208656/mrgfisonvnnikik8tiy2.png"
      alt="img pay"
    />
    <h1>Felicitaciones, haz realizado tu compra</h1>
    <div>
      <h2 className="purchaseSummary__title">Resumen de la orden</h2>
      <div className="purchaseSummary__container">
        <div>
          <div>
            <h2 className="titleOrder">Resumen de la compra</h2>
          </div>
          {id ? <BuyAproduct id={id} /> : <ShoppingCart />}
        </div>
        <ShipmentSummary id={id} />
      </div>
    </div>
  </div>
);

SuccessfulPurchase.propTypes = {
  id: PropTypes.string.isRequired,
};
export default SuccessfulPurchase;

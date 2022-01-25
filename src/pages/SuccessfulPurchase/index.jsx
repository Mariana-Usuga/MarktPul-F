import { Link } from 'react-router-dom';
import ShipmentSummary from '../../components/ShipmentSummary/index';
import OrderSummary from '../../components/OrderSummary/index';

import './SuccessfulPurchase.scss';

const SuccessfulPurchase = () => (
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
        <OrderSummary />
        <ShipmentSummary />
      </div>
    </div>
    <button className="purchaseSummary__btn" type="button">
      <Link to="/" className="btnPay__link">
        Volver al comercio
      </Link>
    </button>
  </div>
);

export default SuccessfulPurchase;

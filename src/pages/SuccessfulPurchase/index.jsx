// import ShipmentSummary from '../components/ShipmentSummary';
// import OrderSummary from '../components/OrderSummary';

import './SuccessfulPurchase.scss';

const SuccessfulPurchase = () => (
  <div className="purchaseSummary">
    <img
      className="purchaseSummary__img"
      src="https://res.cloudinary.com/db3njhxi0/image/upload/v1641691486/Markt-Pul/Products/Capturacompra_iso8fp.png"
      alt=""
    />
    <h1>Felicitaciones, haz realizado tu compra</h1>
    <div>
      <h2 className="purchaseSummary__title">Resumen de la orden</h2>
      <div className="purchaseSummary__container">
        {/* <OrderSummary /> */}
        {/* <ShipmentSummary /> */}
      </div>
    </div>
    <button className="purchaseSummary__btn" type="button">
      Volver al comercio
    </button>
  </div>
);

export default SuccessfulPurchase;

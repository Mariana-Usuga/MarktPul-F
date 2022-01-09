import ShipmentSummary from '../components/ShipmentSummary';
import PaymentMethod from '../components/PaymentMethod';
import OrderSummary from '../components/OrderSummary';

import '../styles/pages/pay.scss';

const Pay = () => (
  <div className="payContainer">
    <div className="payContainer__item">
      <div className="notRegistered">
        <h3>¿No estas registrado? ¡Registrate!</h3>
      </div>
      <div className="paymentMethod">
        <h3>Elige tu medio de pago</h3>
      </div>
      <PaymentMethod method="Pago contraentrega" />
      <PaymentMethod method="Pago Tarjeta débito o crédito" />
      <PaymentMethod method="Paypal" />
      <PaymentMethod method="ePayco" />
      <button className="btnPay" type="button">
        Pagar
      </button>
    </div>
    <div className="payContainer__item">
      <ShipmentSummary />
      <button className="btn" type="button">
        Volver al envio
      </button>
      <OrderSummary />
      <button className="btn" type="button">
        Volver a la bolsa
      </button>
    </div>
  </div>
);
export default Pay;

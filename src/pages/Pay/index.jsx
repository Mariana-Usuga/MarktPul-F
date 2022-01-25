import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShipmentSummary from '../../components/ShipmentSummary/index';
import PaymentMethod from '../../components/PaymentMethod/index';
import OrderSummary from '../../components/OrderSummary/index';
import './Pay.scss';

const Pay = () => {
  const isLoading = useSelector((state) => state.pay.isLoading);
  return (
    <div className="payContainer">
      <div className="payContainer__item">
        <div className="notRegistered">
          <h3>¿No estas registrado? ¡Registrate!</h3>
        </div>
        <div className="paymentMethod">
          <h3>Elige tu medio de pago</h3>
        </div>
        <PaymentMethod method="Pago Tarjeta débito o crédito" />
        <button className="btnPay" type="button">
          {!isLoading ? (
            <Link to="/main/succesfulPurchase" className="btnPay__link">
              Pagar
            </Link>
          ) : (
            'Pagar'
          )}
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
};

export default Pay;

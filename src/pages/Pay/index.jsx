import { useSelector } from 'react-redux';
import PaymentMethod from '../../components/PaymentMethod/index';
import ShoppingCart from '../ShoppingCart';
import ShipmentSummary from '../../components/ShipmentSummary';
import BuyAproduct from '../../components/BuyAproduct/index';
import './Pay.scss';

const Pay = () => {
  const aProduct = useSelector((state) => state.pay.aProduct);
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
      </div>
      <div className="payContainer__item">
        <ShipmentSummary />
        <div className="orderSummary">
          <div>
            <h2 className="titleOrder">Resumen de la compra</h2>
          </div>
          {aProduct ? <BuyAproduct /> : <ShoppingCart />}
        </div>
      </div>
    </div>
  );
};
export default Pay;

import PaymentMethod from '../components/PaymentMethod';
import CardPayment from '../components/CardPayment';
import ShipmentSummary from '../components/ShipmentSummary';
// import OrderSummary from '../components/OrderSummary';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/pages/pay.scss';

const Pay = () => {
  console.log('working');
  return (
    <>
      <Header />
      <div>
        <div className="notRegistered">
          <h3>¿No estas registrado? ¡Registrate!</h3>
        </div>
        <div className="paymentMethod">
          <h3>Elige tu medio de pago</h3>
        </div>
        <PaymentMethod method="Pago contraentrega" />
        <PaymentMethod method="Pago Tarjeta débito o crédito" />
        <CardPayment />
        <PaymentMethod method="Paypal" />
        <PaymentMethod method="ePayco" />
        <button className="btnPay" type="button">
          Pagar
        </button>
      </div>
      <ShipmentSummary />
      {/* <OrderSummary /> */}
      <Footer />
    </>
  );
};

export default Pay;

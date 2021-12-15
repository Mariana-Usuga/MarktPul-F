import '../styles/components/orderSummary.scss';

const OrderSummary = () => (
  <>
    <div>
      <h2>Resumen de la compra</h2>
    </div>
    <div className="shippingProducts">
      <div className="itemProduct">
        <img
          className="itemProduct__img"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
        <div className="itemProduct__title">Blusa blanca de mujer</div>
        <span className="itemProduct__price">$ 20 000</span>
      </div>
    </div>
  </>
);

export default OrderSummary;

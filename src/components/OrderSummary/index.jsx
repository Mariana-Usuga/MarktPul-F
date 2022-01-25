import ProductsBuy from '../ProductsBuy/index';

import './OrderSummary.scss';

const OrderSummary = () => (
  <div>
    <div>
      <h2 className="titleOrder">Resumen de la compra</h2>
    </div>
    <ProductsBuy title="Blusa blanca de mujer" price="$ 20 000" />
    <ProductsBuy title="Blusa blanca de mujer" price="$ 20 000" />
    <ul className="total">
      <li className="total__li">
        <span className="total__subTotal">Sub Total</span>
        <span className="total__subTotal__item__value">$ 40.00</span>
      </li>
      <li className="total__li">
        <span className="total__discount">Descuentos</span>
        <span className="total__item__value">0</span>
      </li>
      <li className="total__li">
        <span className="total__send">Envio</span>
        <span className="total__item__value">$ 5.00</span>
      </li>
      <li className="total__li">
        <span className="total__estimatedAmount">Total Estimado</span>
        <span className="total__estimatedAmount__item__value">$ 45.00</span>
      </li>
    </ul>
  </div>
);

export default OrderSummary;

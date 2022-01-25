import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const priceFormat = (amount) => {
  const price = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  }).format(amount);
  return price;
};

const CartSummary = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const discount = 0;
  const [cartPrice, setCartPrice] = useState(0);
  // eslint-disable-next-line prettier/prettier
  const reducer = (prevValue, currentValue) => prevValue + currentValue.price * currentValue.qty;
  useEffect(() => {
    setCartPrice(cart.reduce(reducer, 0));
  }, [cart]);
  return (
    <aside className="cart__summary">
      <div className="cart__summary--title">
        <h1>Resumen de la compra</h1>
        <h4>{`${cart.length} productos`}</h4>
      </div>
      <div className="cart__summary--total">
        <div className="cart__summary--value">
          <h4>Sub Total</h4>
          <p>{priceFormat(cartPrice)}</p>
        </div>
        <div className="cart__summary--value" id="descuento">
          <h4>Descuento</h4>
          <p>{priceFormat(discount)}</p>
        </div>
        <div className="cart__summary--value">
          <h4>Total Estimado</h4>
          <p>{priceFormat(cartPrice - discount)}</p>
        </div>
        <p className="cart__summary--terms">
          * Compra sujeta a los Terminos y Condiciones de la web
        </p>
        <div className="cupon">
          <label htmlFor="descuento">
            <p>Cupon de Descuento</p>
            <input type="text" name="" id="descuento" />
          </label>
          <input type="button" value="Aplicar" id="aplicar" />
        </div>
        <button type="button" className="cart__summary--button">
          Pagar
        </button>
      </div>
    </aside>
  );
};
export default CartSummary;

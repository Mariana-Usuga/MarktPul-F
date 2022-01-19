const CartSummary = () => (
  <aside className="cart__summary">
    <div className="cart__summary--title">
      <h1>Resumen de la compra</h1>
      <h4>4 productos</h4>
    </div>
    <div className="cart__summary--total">
      <div className="cart__summary--value">
        <h4>Sub Total</h4>
        <p>$30.000</p>
      </div>
      <div className="cart__summary--value" id="descuento">
        <h4>Descuento</h4>
        <p>$0.000</p>
      </div>
      <div className="cart__summary--value">
        <h4>Total Estimado</h4>
        <p>$30.000</p>
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
export default CartSummary;

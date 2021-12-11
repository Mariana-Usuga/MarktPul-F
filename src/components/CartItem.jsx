import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ src, producto, cantidad, precioUnitario }) => (
  <tr className="cart__table--row">
    <td className="cart__table--item">
      <img src={src} alt={producto} className="cart--image" />
      <div className="cart__item--container">
        <p>{producto}</p>
      </div>
    </td>
    <td>{cantidad}</td>
    <td>
      <p>$</p>
      {precioUnitario.toFixed(2)}
    </td>
    <td>
      <p>$</p>
      {(cantidad * precioUnitario).toFixed(2)}
    </td>
  </tr>
);

CartItem.propTypes = {
  src: PropTypes.string.isRequired,
  producto: PropTypes.string.isRequired,
  cantidad: PropTypes.number.isRequired,
  precioUnitario: PropTypes.number.isRequired,
};

export default CartItem;

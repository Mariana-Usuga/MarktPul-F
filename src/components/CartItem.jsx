import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ producto, cantidad, precioUnitario }) => (
  <tr className="cart__table--row">
    <td>{producto}</td>
    <td>{cantidad}</td>
    <td>{precioUnitario}</td>
    <td>Precio Total</td>
  </tr>
);

CartItem.propTypes = {
  producto: PropTypes.string.isRequired,
  cantidad: PropTypes.number.isRequired,
  precioUnitario: PropTypes.number.isRequired,
};

export default CartItem;

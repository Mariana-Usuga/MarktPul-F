import React from 'react';
import PropTypes from 'prop-types';

const CartPreview = ({ src, producto, cantidad }) => (
  <tr className="cart__table--row">
    <td className="cart__table--item">
      <img src={src} alt={producto} className="cart--image" />
      <div className="cart__item--container">
        <p>{producto}</p>
      </div>
    </td>
    <td>{cantidad}</td>
  </tr>
);

CartPreview.propTypes = {
  src: PropTypes.string.isRequired,
  producto: PropTypes.string.isRequired,
  cantidad: PropTypes.number.isRequired,
};

export default CartPreview;

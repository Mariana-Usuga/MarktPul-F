import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaPlus, FaMinus } from 'react-icons/fa';
import {
  addQtyProductToCart,
  removeQtyProductToCart,
} from '../../store/actions/cartActions';

const CartItem = ({ product, src, producto, cantidad, precioUnitario = 0 }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addQtyProductToCart(product));
  };
  const handleRemove = () => {
    if (cantidad > 1) {
      dispatch(removeQtyProductToCart(product));
    }
  };
  return (
    <tr className="cart__table--row">
      <td className="cart__table--item">
        <img src={src} alt={producto} className="cart--image" />
        <div className="cart__item--container">
          <p>{producto}</p>
        </div>
      </td>
      <td>
        <FaMinus onClick={handleRemove} />
        <p>{cantidad}</p>
        <FaPlus onClick={handleAdd} />
      </td>
      <td>
        {new Intl.NumberFormat('es-CO', {
          style: 'currency',
          currency: 'COP',
        }).format(precioUnitario)}
      </td>
      <td>
        {new Intl.NumberFormat('es-CO', {
          style: 'currency',
          currency: 'COP',
        }).format(cantidad * precioUnitario)}
      </td>
    </tr>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }),
  src: PropTypes.string.isRequired,
  producto: PropTypes.string.isRequired,
  cantidad: PropTypes.number.isRequired,
  precioUnitario: PropTypes.number.isRequired,
};
CartItem.defaultProps = {
  product: {},
};
export default CartItem;

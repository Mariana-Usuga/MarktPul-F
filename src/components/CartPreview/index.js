import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './CartPreview.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { deleteProductFromCart } from '../../store/actions/cartActions';

const CartPreview = ({ src, producto, cantidad, precio, id }) => {
  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch(deleteProductFromCart(id));
  };
  return (
    <div className="cart__preview--item">
      <div className="cart__preview--image">
        <img src={src} alt={producto} className="cart--image" />
      </div>
      <div className="cart__preview--container">
        <p className="cart__preview--title">{producto}</p>
        <h6 className="cart__preview--quantity">
          Cantidad:
          {cantidad}
        </h6>
        <h6 className="cart__preview--quantity">
          {new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
          }).format(precio)}
        </h6>
      </div>
      <div className="cart__preview--remove" title="Eliminar del Carrito">
        <AiOutlineClose onClick={removeItem} />
      </div>
    </div>
  );
};

CartPreview.propTypes = {
  src: PropTypes.string.isRequired,
  producto: PropTypes.string.isRequired,
  cantidad: PropTypes.number.isRequired,
  precio: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default CartPreview;

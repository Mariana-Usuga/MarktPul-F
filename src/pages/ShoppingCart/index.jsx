/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../../components/CartItem';
import { fetchCart } from '../../store/actions/cartActions';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  useEffect(() => {
    window.localStorage.setItem('cartProduct', [JSON.stringify(cart)]);
  }, []);
  useEffect(() => {
    dispatch(fetchCart());
  }, []);
  return (
    <table className="cart__table">
      <thead className="cart__table--thead">
        <tr className="cart__table--row">
          <th>Productos</th>
          <th>
            <span>Cantidad</span>
          </th>
          <th>Precio Unitario</th>
          <th>Precio Total</th>
        </tr>
      </thead>
      <tbody className="cart__table--tbody">
        {cart.map((element) => (
          <CartItem
            src={element.imageMain}
            producto={element.title}
            cantidad={element.qty}
            precioUnitario={element.price}
            key={element.id}
          />
        ))}
      </tbody>
    </table>
  );
};
export default ShoppingCart;

/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import { useCartState } from '../context/CartContext';

const ShoppingCart = () => {
  const { cart } = useCartState();
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem(cart);
  });
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
        {item.map((element) => (
          // eslint-disable-next-line react/jsx-indent
          <CartItem
            src={element.image}
            producto={element.title}
            cantidad={element.quantity}
            precioUnitario={element.price}
            key={element.id}
          />
        ))}
      </tbody>
    </table>
  );
};
export default ShoppingCart;

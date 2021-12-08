/* eslint-disable array-callback-return */
import React from 'react';
import CartItem from './CartItem';

const data = [
  {
    producto: 'cloth ropa xl mujer',
    cantidad: 1,
    precioUnitario: 200.0,
  },
  {
    producto: 'cloth ropa xl mujer',
    cantidad: 2,
    precioUnitario: 200.0,
  },
  {
    producto: 'cloth ropa xl mujer',
    cantidad: 3,
    precioUnitario: 200.0,
  },
];

const ShoppingCart = () => (
  <table className="cart__table">
    <tr className="cart__table--row">
      <th>Productos</th>
      <th>Cantidad</th>
      <th>Precio Unitario</th>
      <th>Precio Total</th>
    </tr>
    {data.map((element) => {
      // eslint-disable-next-line react/jsx-indent
      <CartItem
        producto={element.producto}
        cantidad={element.cantidad}
        precioUnitario={element.precioUnitario}
      />;
    })}
  </table>
);
export default ShoppingCart;

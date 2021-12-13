/* eslint-disable array-callback-return */
import React from 'react';
import CartItem from './CartItem';
import product from '../styles/image/product.png';
import product2 from '../styles/image/product2.png';
import product3 from '../styles/image/product3.png';

const data = [
  {
    id: 1,
    imagen: product,
    producto: 'Zapatillas para mujer AIR',
    cantidad: 1,
    precioUnitario: 30.0,
  },
  {
    id: 2,
    imagen: product2,
    producto: 'Camisa para hombre',
    cantidad: 2,
    precioUnitario: 200.0,
  },
  {
    id: 3,
    imagen: product3,
    producto: 'Chaqueta negra de cuero',
    cantidad: 3,
    precioUnitario: 200.0,
  },
];

const ShoppingCart = () => (
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
      {data.map((element) => (
        // eslint-disable-next-line react/jsx-indent
        <CartItem
          src={element.imagen}
          producto={element.producto}
          cantidad={element.cantidad}
          precioUnitario={element.precioUnitario}
          key={element.id}
        />
      ))}
    </tbody>
  </table>
);
export default ShoppingCart;

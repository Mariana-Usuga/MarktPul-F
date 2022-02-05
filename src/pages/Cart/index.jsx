import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart';
import CartSummary from '../../components/CartSummary';

import './shoppingCart.scss';

const Cart = () => {
  const token = JSON.parse(localStorage.getItem('token'));

  return (
    <>
      <main id="shopping-cart">
        <ShoppingCart />
        <CartSummary />
      </main>
      <Link
        to={token ? '/pages/paymentProcess' : '/login'}
        style={{ textDecoration: 'none' }}
      >
        <button
          // onClick={buyShoppingCart}
          className="shopping-cart__btnPay"
          type="button"
        >
          Proceder al Pago
        </button>
      </Link>
    </>
  );
};
export default Cart;

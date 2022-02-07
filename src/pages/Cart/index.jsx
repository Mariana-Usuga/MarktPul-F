import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart';
import CartSummary from '../../components/CartSummary';

import './shoppingCart.scss';

const Cart = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const cart = useSelector((state) => state.cartReducer.cart);
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (cart.length) {
      setIsEmpty(false);
    }
  }, []);
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
          disabled={isEmpty}
        >
          Proceder al Pago
        </button>
      </Link>
    </>
  );
};
export default Cart;

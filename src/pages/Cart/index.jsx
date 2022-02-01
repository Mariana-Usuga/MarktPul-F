import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ShoppingCart from '../ShoppingCart';
import CartSummary from '../../components/CartSummary';
import { fetchBuyCart } from '../../store/actions/payActionsCreator';

import './shoppingCart.scss';

const Cart = () => {
  const dispatch = useDispatch();

  const buyShoppingCart = () => {
    dispatch(fetchBuyCart());
  };
  return (
    <>
      <Header />
      <main id="shopping-cart">
        <ShoppingCart />
        <CartSummary />
      </main>
      <Link to="/pages/paymentProcess" style={{ textDecoration: 'none' }}>
        <button
          onClick={buyShoppingCart}
          className="shopping-cart__btnPay"
          type="button"
        >
          Proceder al Pago
        </button>
      </Link>
      <Footer />
    </>
  );
};
export default Cart;

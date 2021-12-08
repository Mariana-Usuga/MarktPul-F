import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShoppingCart from '../components/ShoppingCart';
import CartSummary from '../components/CartSummary';
import '../styles/styles.scss';

const Cart = () => (
  <>
    <Header />
    <main id="shopping-cart">
      <ShoppingCart />
      <CartSummary />
    </main>
    <Footer />
  </>
);

export default Cart;

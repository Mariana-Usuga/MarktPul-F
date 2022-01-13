import React, { createContext, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

const ShopContext = createContext();

export const CartContext = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localCart = JSON.parse(window.localStorage.getItem('cartProduct'));
    return localCart !== null ? [...localCart] : [];
  });
  const propsToPass = useMemo(() => ({ cart, setCart }), []);
  return (
    <ShopContext.Provider value={propsToPass}>{children}</ShopContext.Provider>
  );
};

export function useCartState() {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error('useCartState must be used within a Cart Provider');
  }
  return context;
}

CartContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

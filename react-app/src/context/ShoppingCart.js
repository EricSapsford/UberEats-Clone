import React, { createContext, useContext, useState, useEffect } from 'react';

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <ShoppingCartContext.Provider value={{ cart, setCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

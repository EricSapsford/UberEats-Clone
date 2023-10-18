import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const user = useSelector(state => state.session.user)

  const [cart, setCart] = useState([])

  useEffect(() => {
     const savedCart = localStorage.getItem(`cart_${user?.id}`);
     setCart(savedCart ? JSON.parse(savedCart) : []);
  }, [user])

  useEffect(() => {
    localStorage.setItem(`cart_${user?.id}`, JSON.stringify(cart));
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

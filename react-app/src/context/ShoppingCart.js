import React, { createContext, useContext, useState } from 'react';

// Create a new context
const ShoppingCartContext = createContext();

// Create a custom provider for the context
export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // You can add functions to add, remove, or modify items in the cart here

  return (
    <ShoppingCartContext.Provider value={{ cart, setCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

// Create a custom hook to access the shopping cart context
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

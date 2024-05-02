import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = (props) => {
  const [item, setItem] = useState([]);

  return (
    <CartContext.Provider value={{ item, setItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;



export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
}
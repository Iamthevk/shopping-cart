import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cartItems: [],
  cartItemCount: 0,
  addItemToCart: () => {},
});
export const addCartItem = (cartItems, productToAdd) => {
  //find if cartItem contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found increase the quantity by 1
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);

    //set cartItems to localstorage as cartItems being added/removed
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };
  const value = { cartItems, addItemToCart, cartItemCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

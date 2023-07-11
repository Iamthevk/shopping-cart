import { createContext, useState, useEffect, useCallback } from "react";
import useFetch from "../utils/hooks/useFetch";
import { useParams } from "react-router-dom";
export const CartContext = createContext({
  cartItems: [],
  cartItemCount: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});
const addCartItem = (cartItems, productToAdd) => {
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
const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if qty is equal to 1, it true remove that from cart
  if (existingCartItem.quantity === 1) {
    cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  //return back cartItems with matching cartitem with reduced qty
  return cartItems.map((cartItem) => {
    return cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};
const clearCartItem = (cartItems, productToClear) => {
  // here we will filter item's id that is matching with cartItem's id and remove that from array
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [cartItemCount, setCartItemCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  const { id } = useParams();
  console.log({ id });
  const urls = [
    "https://dummyjson.com/products",
    `https://dummyjson.com/products/${id}`,
  ];
  const { get, loading } = useFetch(urls);
  const getData = useCallback(() => {
    return get()
      .then((data) => {
        setProducts(data[0]);
        setSingleProduct(data[1]);
      })
      .catch((err) => console.log("could not load products", err));
  }, []);
  useEffect(() => {
    getData();
  }, [urls]);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);

    //set cartItems to localstorage as cartItems being added/removed
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  console.log(products);
  console.log(singleProduct);
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear));
  };

  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    cartItemCount,
    clearItemFromCart,
    products,
    singleProduct,
    loading,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

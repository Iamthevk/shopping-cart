import { createContext, useState, useEffect } from "react";
import useFetch from "../utils/hooks/useFetch";
import { useParams } from "react-router-dom";
export const CartContext = createContext({
  products: [],
});

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  let { ...a } = useParams();
  let id = a["*"].slice(16, 18);

  const urls = [
    `https://dummyjson.com/products`,
    `https://dummyjson.com/products/${id}`,
  ];
  const { get, loading } = useFetch(urls);

  useEffect(() => {
    if (id) {
      get()
        .then((data) => {
          setSingleProduct(data[1]);
        })
        .catch((err) => console.log("could not load products", err));
    }
  }, [id]);

  useEffect(() => {
    get()
      .then((data) => {
        setProducts(data[0]);
        setSingleProduct(data[1]);
      })
      .catch((err) => console.log("could not load products", err));
  }, []);

  const value = {
    products,
    singleProduct,
    loading,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductsPage({ searchQuery }) {
  const { products, loading } = useContext(CartContext);

  if (loading) {
    return <Loader />;
  }
  const filteredProducts = products?.products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery)
  );
  return (
    <div className="flex flex-wrap mx-auto w-full md:w-10/12 gap-5 pt-20">
      {!loading &&
        products.products &&
        filteredProducts.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
    </div>
  );
}

export default ProductsPage;

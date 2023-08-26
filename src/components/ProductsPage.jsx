import ProductCard from "./ProductCard";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import FilterProducts from "./FilterProducts";
import Shimmer from "./Shimmer";

function ProductsPage({ searchQuery }) {
  const { products, loading } = useContext(CartContext);
  const [newProducts, setNewProducts] = useState(products);
  var filteredProducts = products?.products?.filter((product) =>
    product.title.toLowerCase().includes(searchQuery)
  );

  useEffect(() => {
    setNewProducts(filteredProducts);
  }, [products, searchQuery]);

  function handleSortProducts(sortBy) {
    let sortedProducts;
    if (sortBy === "PRICE_LOW_TO_HIGH") {
      sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (sortBy === "PRICE_HIGH_TO_LOW") {
      sortedProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    } else if (sortBy === "TITLE_A_TO_Z") {
      sortedProducts = [...filteredProducts].sort((a, b) => {
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    } else if (sortBy === "TITLE_Z_TO_A") {
      sortedProducts = [...filteredProducts].sort((a, b) => {
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      });
    } else {
      sortedProducts = [...filteredProducts];
    }
    setNewProducts(sortedProducts);
  }
  return (
    <div>
      <FilterProducts onChange={handleSortProducts} />
      <div className="flex flex-wrap mx-auto w-full md:w-10/12 gap-5 pt-5 mb-10">
        {!loading ? (
          newProducts?.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
}

export default ProductsPage;

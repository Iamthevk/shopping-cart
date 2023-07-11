import { useEffect, useState } from "react";
import useFetch from "../utils/hooks/useFetch";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

function ProductsPage({ searchQuery }) {
  const [products, setProducts] = useState([]);

  const { get, loading } = useFetch("https://dummyjson.com/products");
  useEffect(() => {
    get()
      .then((data) => setProducts(data))
      .catch((err) => console.log("could not load products", err));
  }, []);
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

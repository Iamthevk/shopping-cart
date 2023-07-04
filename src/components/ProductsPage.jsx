import { useEffect, useState } from "react";
import useFetch from "../utils/hooks/useFetch";
import ProductCard from "./Product";
import Loader from "./Loader";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  const { get, loading } = useFetch("https://dummyjson.com/products");
  useEffect(() => {
    get()
      .then((data) => setProducts(data))
      .catch((err) => console.log("could not load products", err));
  }, []);
  // console.log(products.products)
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex flex-wrap mx-auto w-full md:w-10/12 gap-5 pt-20">
      {!loading &&
        products.products &&
        products.products.map((product) => {
          // console.log(product)
          return <ProductCard key={product.id} {...product} />;
        })}
    </div>
  );
}

export default ProductsPage;

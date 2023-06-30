import { useEffect, useState } from "react";
import useFetch from "../utils/hooks/useFetch"
function Products() {
    const [products, setProducts] = useState([]);

const {get,loading} = useFetch("https://dummyjson.com/products");
useEffect(() => {
    get().then(data => setProducts(data))
        .catch(err => console.log("could not load products", err))
},[])
  return (
    <div>{console.log(products)}</div>
  )
}

export default Products
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { singleProduct } = useContext(CartContext);
  console.log(singleProduct);
  return (
    <div>
      <section>
        <h3>Home / Products / </h3>
      </section>
    </div>
  );
}

export default ProductDetails;

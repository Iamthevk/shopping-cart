import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { singleProduct } = useContext(CartContext);
  return (
    <div>
      <section className="w-10/12 mx-auto md:w-full md:flex items-center justify-around mb-5">
        <img src={singleProduct.thumbnail} alt={singleProduct.title} />
        <div>
          <h3 className="font-bold font-sans text-lg md:text-4xl text-amber-700 ">
            Home / Products / {singleProduct.title}{" "}
          </h3>
          <p className=" text-sm md:text-2xl font-semibold  ">
            {singleProduct.brand}
          </p>
          <p>{singleProduct.description}</p>
        </div>
      </section>
      <div className="md:flex w-10/12 mx-auto ">
        {singleProduct?.images?.length > 1 &&
          singleProduct?.images?.map((img, i) => {
            return (
              <div key={i}>
                <img src={img} alt="" className="w-60 h-40" />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProductDetails;

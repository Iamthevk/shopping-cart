import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { singleProduct } = useContext(CartContext);
  return (
    <div className="w-11/12 mx-auto">
      <section className="w-10/12 mx-auto md:w-full md:flex items-center justify-around mb-7">
        <img
          src={singleProduct.thumbnail}
          alt={singleProduct.title}
          className="w-1/3  "
        />
        <div>
          <h3 className="font-bold font-sans text-lg md:text-4xl text-amber-700 ">
            Home / Products / {singleProduct.title}{" "}
          </h3>
          <p className=" text-sm md:text-2xl font-semibold  ">
            {singleProduct.brand}
          </p>
          <p>{singleProduct.description}</p>
          <div className="flex justify-around mt-5">
            <p>
              In Stock:{" "}
              <span className="text-green-600 ">{singleProduct.stock}</span>
            </p>
            <p>
              Price:{" "}
              <span className=" text-purple-600">{singleProduct.price}</span>
            </p>
          </div>
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

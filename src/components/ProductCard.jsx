import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ ...product }) {
  const { addItemToCart } = useContext(CartContext);
  const { title, thumbnail, rating, price, description } = product;
  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <div className="w-96 h-96 border-4 rounded-xl p-2">
      <img src={thumbnail} alt={title} className="h-56 w-full" />
      <div className="relative text-left  mt-3 p-2">
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold truncate overflow-hidden text-ellipsis">
            {title}
          </h1>
          <img src={"../src/assets/bookmark.svg"} className="w-8 h-8" />
        </div>
        <div className="flex justify-between p-1">
          <div className="flex justify-between items-center w-40 mb-3">
            <span className="bg-green-500 p-2 text-white text-sm rounded-md">
              {rating} stars
            </span>
            <p className="font-semibold">₹ {price}</p>
          </div>
          <div className="mx-4 w-24 ">
            <button
              onClick={addProductToCart}
              className="border rounded-full py-1 px-3 mr-2 font-bold  "
            >
              +
            </button>
            {/* <span className="mr-2">{cartItemCount || 0}</span> */}
            <button className="border rounded-full py-1 px-3 font-bold">
              -
            </button>
          </div>
        </div>
        <p className=" truncate overflow-hidden text-ellipsis">{description}</p>
      </div>
    </div>
  );
}

export default ProductCard;

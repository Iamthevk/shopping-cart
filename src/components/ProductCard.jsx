import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { Link } from "react-router-dom";

function ProductCard({ ...product }) {
  const { addItemToCart } = useContext(CartContext);
  const { id, title, thumbnail, rating, price, description } = product;
  const addProductToCart = () => {
    addItemToCart(product);
  };

  const addNotify = () =>
    toast.success("Item added to cart", { autoClose: 500 });

  return (
    <div className="w-96 h-96 border-4 rounded-xl p-2">
      <Link to={`/product-details/${id}`}>
        <img src={thumbnail} alt={title} className="h-56 w-full" />
      </Link>
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
          <div className="mx-4 w-28   ">
            <button
              onClick={() => {
                addProductToCart();
                addNotify();
              }}
              className="border focus:ring-2 rounded-full py-0.5 px-4 mr-2 font-bold  "
            >
              Add to Cart
            </button>
          </div>
        </div>
        <p className=" truncate overflow-hidden text-ellipsis">{description}</p>
        <ToastContainer position="top-right" newestOnTop />
      </div>
    </div>
  );
}

export default ProductCard;

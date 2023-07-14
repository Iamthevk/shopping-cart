import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import Loader from "../components/Loader";

function Checkout() {
  const { cartItems, addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  if (cartItems.length < 1) {
    <Loader />;
  }
  return (
    <div className="mt-5 w-11/12 mx-auto ">
      <div>
        <h2 className="text-5xl mb-10 text-primary-500 ">
          Your Shopping Basket
        </h2>
      </div>
      <div>
        {cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className="md:flex justify-center text-center items-center w-full gap-5 "
            >
              <img src={item.thumbnail} className="w-80  h-60 my-4" />
              <div className="">
                <h1 className="font-bold text-lg">{item.title}</h1>
                <p className="md:w-96 flex-wrap ">{item.description}</p>
                <div className="mt-3">
                  Number of Items: {item.quantity}{" "}
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => addItemToCart(item)}
                      className="border border-[#2ca9bc] p-2 focus:ring-2"
                    >
                      <img src={"../src/assets/arrowUp.svg"} />
                    </button>
                    <button
                      disabled={item.quantity === 0}
                      className="border border-[#2ca9bc] p-2 focus:ring-2"
                      onClick={() => removeItemFromCart(item)}
                    >
                      <img src={"../src/assets/arrowDown.svg"} />
                    </button>
                  </div>
                  <button
                    className="bg-red-500 text-white rounded-lg p-3 m-2 focus:ring-2"
                    onClick={() => clearItemFromCart(item)}
                  >
                    Remove Item
                  </button>
                  <span className="ml-5">Price: ₹{item.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="mt-5 p-3 items-end bg-blue-800 text-white w-2/4 mb-10">
        {" "}
        Go to Checkout
      </button>
    </div>
  );
}

export default Checkout;

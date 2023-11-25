import Loader from "../components/Loader";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, clearProduct, removeProduct } from "../redux/cartSlice";

function Checkout() {
  const [visible, setVisible] = useState(true);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  if (cartItems.length < 1) {
    <Loader />;
  }
  function handleOrder() {
    alert("Your Order was successful.");
    setVisible(false);
    cartItems.map((item) => {
      return dispatch(clearProduct(item));
    });
  }
  return (
    <div className="mt-5 w-11/12 mx-auto ">
      <div>
        {visible && (
          <>
            <h2 className="text-5xl mb-10 text-primary-500 ">
              Your shopping basket {cartItems < 1 && "is empty"}
            </h2>
            <p className="text-3xl text-purple-500">
              {cartItems < 1 && "Please add items to proceed to checkout"}
            </p>
          </>
        )}
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
                      onClick={() => dispatch(addProduct(item))}
                      className="border border-[#2ca9bc] p-2 focus:ring-2"
                    >
                      <img src={"/arrowUp.svg"} />
                    </button>
                    <button
                      disabled={item.quantity === 1}
                      className="border border-[#2ca9bc] p-2 focus:ring-2"
                      onClick={() => dispatch(removeProduct(item))}
                    >
                      <img src={"/arrowDown.svg"} />
                    </button>
                  </div>
                  <button
                    className="bg-red-500 text-white rounded-lg p-3 m-2 focus:ring-2"
                    onClick={() => dispatch(clearProduct(item))}
                  >
                    Remove Item
                  </button>
                  <span className="ml-5">
                    Price: ₹{item.price * item.quantity}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {visible ? (
        <button
          className="mt-5 p-3 items-end bg-blue-800 text-white w-2/4 mb-10"
          onClick={handleOrder}
          disabled={cartItems.length < 1}
        >
          {" "}
          {cartItems.length < 1 ? "Go to Checkout" : "Order"}
        </button>
      ) : (
        <p className="text-7xl text-purple-500 mt-60">
          Thank You for Shopping 🎉
        </p>
      )}
    </div>
  );
}

export default Checkout;

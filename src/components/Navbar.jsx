import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cartItemCount } = useContext(CartContext);
  return (
    <nav className="bg-white border-b p-3 md:w-screen">
      <div className="container flex justify-between items-center gap-6 md:gap-20 m-auto">
        <a
          href="/shopping_cart"
          rel="noopener noreferrer"
          className="md:text-xl uppercase tracking-widest shadow-outline p-1 rounded-lg "
        >
          <span className="bg-primary-500 text-white px-2 rounded mr-1 text-xs md:text-base   ">
            Shopping Cart
          </span>
          👉
          <span className="text-purple-900 p-1 rounded text-xs md:text-base">
            House
          </span>
        </a>
        <SearchBar />
        <ul>
          <li>
            <Link to="/checkout">
              <button className="text-2xl cart_btn flex  focus:outline-none focus:shadow-outline rounded-lg">
                <img
                  src={"../src/assets/cart.svg"}
                  alt="cart"
                  className="w-8 md:w-12 my-auto"
                />
                <span className="text-primary-500 text-xl mt-2 mx-1 font-extrabold inline-block">
                  {cartItemCount || 0}
                </span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

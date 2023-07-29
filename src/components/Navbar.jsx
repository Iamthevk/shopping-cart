import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import { useSelector } from "react-redux";
import { cartCountSelector } from "../features/cartSlice";

function Navbar({ searchQuery, setSearchQuery }) {
  const cartItemCount = useSelector(cartCountSelector);
  return (
    <nav className="bg-white border-b p-3 md:w-screen !mb-10 fixed top-0 z-10">
      <div className="container flex justify-between items-center gap-6 md:gap-20 m-auto">
        <a
          href="/"
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
        <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        <ul>
          <li>
            <Link to="/checkout">
              <button className="text-2xl cart_btn flex  focus:outline-none focus:shadow-outline rounded-lg">
                <img
                  src={"/cart.svg"}
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

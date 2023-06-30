import SearchBar from "./SearchBar"

function Navbar() {
  return (
    <nav className="bg-white border-b p-3 w-screen">
      <div className="container flex justify-between items-center gap-20 m-auto">
        <a
          href="/shopping_cart"
          rel="noopener noreferrer"
          className="md:text-xl uppercase tracking-widest shadow-outline p-1 rounded-lg "
        >
          <span className="bg-primary-500 text-white px-2  rounded mr-1">
            Shopping Cart
          </span>
          👉
          <span className=" text-purple-900 p-1 rounded">House</span>
        </a>
        <SearchBar/>
        <ul>
          <li>
            <button
              className="text-2xl cart_btn flex  focus:outline-none focus:shadow-outline rounded-lg"
            >
             <img src={"../src/assets/cart.svg"} alt="cart" className="w-20 md:w-12 my-auto"/>
              {/* <span className="text-primary-500 text-xl mt-2 mx-1 font-extrabold inline-block">
                {props.productCount}
              </span> */}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
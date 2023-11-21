import "./App.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import ProductsPage from "./components/ProductsPage";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import { useState } from "react";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "*",
    Component: Root,
  },
]);

function Root() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <Routes>
        <Route path="/" element={<ProductsPage searchQuery={searchQuery} />} />
        <Route
          path="/checkout"
          element={
            <>
              <Checkout />
            </>
          }
        />
        <Route
          path="/product-details/:id"
          element={
            <>
              <ProductDetails />
            </>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

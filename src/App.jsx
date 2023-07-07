import "./App.css";
import { CartProvider } from "./context/CartContext";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import ProductsPage from "./components/ProductsPage";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "*",
    Component: Root,
  },
]);

function Root() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route
          path="/checkout"
          element={
            <>
              <Checkout />
            </>
          }
        />
      </Routes>
    </CartProvider>
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

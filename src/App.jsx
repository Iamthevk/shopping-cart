import "./App.css";
import { CartProvider } from "./context/CartContext";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Layout from "./components/Layout";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "*",
    Component: Root,
  },
]);

function Root() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/checkout" element={<Checkout />} />
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

import "./App.css";
import "./scss/custom.scss";
import "swiper/css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product/";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

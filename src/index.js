import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/dashboard/DashBoard";
import ErrorPage from "./components/uilts/ErrorPage";
import Products from "./components/products/Products";
import Orders from "./components/orders/Orders";
import OrdersDetails from "./components/orders/OrdersDetails";
import UpdateProduct from "./components/products/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:productId",
    element: <UpdateProduct />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/orders/:orderId",
    element: <OrdersDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

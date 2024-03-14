import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/dashboard/DashBoard";
import ErrorPage from "./components/uilts/ErrorPage";
import Products from "./components/products/Products";
import Orders from "./components/orders/Orders";
import UpdateOrder from "./components/orders/UpdateOrder";
import UpdateProduct from "./components/products/UpdateProduct";
import Layout from "./components/uilts/Layout";
import OrdersCalendarView from "./components/orders/OrdersCalendarView";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <DashBoard />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: (
      <Layout>
        <Products />
      </Layout>
    ),
  },
  {
    path: "/products/:productId",
    element: (
      <Layout>
        <UpdateProduct />
      </Layout>
    ),
  },
  {
    path: "/orders",
    element: (
      <Layout>
        <Orders />
      </Layout>
    ),
  },
  {
    path: "/orders/:orderId",
    element: (
      <Layout>
        <UpdateOrder />
      </Layout>
    ),
  },
  {
    path: "/ordersCalendar",
    element: (
      <Layout>
        <OrdersCalendarView />
      </Layout>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

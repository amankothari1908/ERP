import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Order.module.css";

const Order = ({ orderData }) => {
  const navigate = useNavigate();

  const classObject = {
    Delivered: "Delivered",
    Shipped: "Shipped",
    Cancelled: "Cancelled",
    Pending: "Pending",
    Processing: "Processing",
  };

  return (
    <div className={styles.order_container}>
      <h4 className={`${styles[classObject[orderData.status]]}`}>
        {orderData.status}
      </h4>
      <div className={styles.order_content}>
        <h3>{orderData.orderId}</h3>
        <h3>{orderData.customerName}</h3>
        <h3>{orderData.orderDate} </h3>
      </div>
      <button onClick={() => navigate(`/orders/${orderData.id}`)}>
        View Order Details
      </button>
    </div>
  );
};

export default Order;

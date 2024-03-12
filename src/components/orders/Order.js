import React from "react";
import { useNavigate } from "react-router-dom";

const Order = ({ orderData }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>{orderData.status}</h1>
      <button onClick={() => navigate(`/orders/${orderData.id}`)}>
        View Order Details
      </button>
      <div>
        <h3>{orderData.orderId}</h3>
        <h2>{orderData.customerName}</h2>
        <h3>{orderData.orderDate} </h3>
      </div>
    </div>
  );
};

export default Order;

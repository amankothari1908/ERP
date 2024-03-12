import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useOrderStore } from "../../store/store";
import DeleteOrder from "./DeleteOrder";
import Modal from "../uilts/Modal";

const OrdersDetails = () => {
  let { orderId } = useParams();
  const navigate = useNavigate();
  const getOrderById = useOrderStore((state) => state.getOrderById);
  const updateOrder = useOrderStore((state) => state.updateOrder);
  const orderDetails = getOrderById(orderId);

  const [enteredStatus, setEnteredStatus] = useState(orderDetails.status);
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal((prev) => !prev);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newOrder = {
      id: orderDetails.id,
      orderId: orderDetails.orderId,
      customerName: orderDetails.customerName,
      orderDate: orderDetails.orderDate,
      status: enteredStatus,
    };
    updateOrder(newOrder);
    navigate("/orders");
  };

  const statusChangeHandler = (event) => {
    setEnteredStatus(event.target.value);
  };

  return (
    <div>
      <h1>Order Details</h1>
      <div>
        <label>orderId</label>
        <h2>{orderDetails.orderId}</h2>
        <label>customerName</label>
        <h2>{orderDetails.customerName}</h2>
        <label>orderDate</label>
        <h2>{orderDetails.orderDate}</h2>
        <label>status</label>
        <input value={enteredStatus} onChange={statusChangeHandler}></input>
        <h2>{orderDetails.status}</h2>
        <button onClick={submitHandler}>save</button>
        <button onClick={modalHandler}>Delete</button>
      </div>
      {showModal && (
        <Modal modalHandler={() => {}}>
          <DeleteOrder modalHandler={modalHandler} orderData={orderDetails} />
        </Modal>
      )}
    </div>
  );
};

export default OrdersDetails;

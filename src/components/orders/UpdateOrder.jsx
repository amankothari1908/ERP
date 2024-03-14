import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useOrderStore } from "../../store/store";
import DeleteOrder from "./DeleteOrder";
import Modal from "../uilts/Modal";
import styles from "./UpdateOrder.module.css";

const UpdateOrder = () => {
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
    <div className={styles.update_order_container}>
      <h1>Order Details</h1>
      <div className={styles.update_order_form}>
        <label>Order Id</label>
        <h4>{orderDetails.orderId}</h4>
        <label>Customer Name</label>
        <h4>{orderDetails.customerName}</h4>
        <label>Order Date</label>
        <h4>{orderDetails.orderDate}</h4>
        <label>Order Status</label>
        <input value={enteredStatus} onChange={statusChangeHandler}></input>

        <div className={styles.update_order_buttons}>
          <button onClick={submitHandler}>save</button>
          <button onClick={modalHandler}>Delete</button>
        </div>
      </div>
      {showModal && (
        <Modal modalHandler={() => {}}>
          <DeleteOrder modalHandler={modalHandler} orderData={orderDetails} />
        </Modal>
      )}
    </div>
  );
};

export default UpdateOrder;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useOrderStore } from "../../store/store";
import styles from "./DeleteOrder.module.css";
import { IoIosClose } from "react-icons/io";

const DeleteOrder = ({ modalHandler, orderData }) => {
  const navigate = useNavigate();
  const deleteOrder = useOrderStore((state) => state.deleteOrder);
  const deleteOrderHandler = () => {
    deleteOrder(orderData.id);
    navigate("/orders");
    modalHandler();
  };
  return (
    <div className={styles.delete_order_container}>
      <div className={styles.delete_order_heading}>
        <h1>Are you sure?</h1>
        <IoIosClose onClick={modalHandler} />
      </div>
      <div className={styles.delete_order_line}></div>
      <div className={styles.delete_order_content}>
        <p>{`${orderData.orderId} will be deleted.`}</p>
      </div>
      <div className={styles.delete_order_line}></div>
      <div className={styles.delete_order_button}>
        <button onClick={modalHandler}>Cancel</button>
        <button onClick={deleteOrderHandler}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteOrder;

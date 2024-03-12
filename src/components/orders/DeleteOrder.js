import React from "react";
import { useNavigate } from "react-router-dom";
import { useOrderStore } from "../../store/store";
import { IoClose } from "react-icons/io5";

const DeleteOrder = ({ modalHandler, orderData }) => {
  const navigate = useNavigate();
  const deleteOrder = useOrderStore((state) => state.deleteOrder);
  const deleteOrderHandler = () => {
    deleteOrder(orderData.id);
    navigate("/orders");
    modalHandler();
  };
  return (
    <div>
      <div>
        <h1>Are you sure?</h1>
        <IoClose />
      </div>
      <div>
        <p>{`${orderData.name} will be deleted.`}</p>
      </div>
      <div>
        <button onClick={modalHandler}>Cancel</button>
        <button onClick={deleteOrderHandler}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteOrder;

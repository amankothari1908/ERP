import React, { useEffect, useState } from "react";
import Order from "./Order";
import { useOrderStore } from "../../store/store";
import Calendar from "react-calendar";

const getFormattedDate = (dateString) => {
  const dateObject = new Date(dateString);
  // Extract year, month, and date components
  const year = dateObject.getFullYear();
  // Months are zero-indexed, so we need to add 1 to get the correct month
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const date = dateObject.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${date}`;
  return formattedDate;
};

const Orders = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [orders, setOrders] = useState([]);
  const getOrdersByDate = useOrderStore((state) => state.getOrdersByDate);
  const getAllOrders = useOrderStore((state) => state.orders);

  const getAllOrdersHandler = () => {
    setOrders(getAllOrders);
  };

  useEffect(() => {
    const formattedDate = getFormattedDate(selectedDate);
    setOrders(getOrdersByDate(formattedDate));
  }, [selectedDate, getOrdersByDate]);

  return (
    <div>
      <h1> Orders</h1>
      <button onClick={getAllOrdersHandler}>Get all Orders</button>
      <div>
        <Calendar onChange={setSelectedDate} value={selectedDate} />
        <div>
          {orders.map((item) => (
            <Order key={item.id} orderData={item} />
          ))}
        </div>
      </div>
      {}
    </div>
  );
};

export default Orders;

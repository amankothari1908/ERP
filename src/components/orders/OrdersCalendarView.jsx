import React, { useEffect, useState } from "react";
import Order from "./Order";
import { useOrderStore } from "../../store/store";
import Calendar from "react-calendar";
import styles from "./OrdersCalendarView.module.css";

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

const OrdersCalendarView = () => {
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
    <div className={styles.ocv_container}>
      <div className={styles.ocv_inner_container}>
        <div className={styles.ocv_calendar_container}>
          <button
            className={styles.ocv_container_button}
            onClick={getAllOrdersHandler}
          >
            Get all Orders
          </button>
          <Calendar onChange={setSelectedDate} value={selectedDate} />
        </div>
        <div className={styles.ocv_order_container}>
          {orders.map((item) => (
            <Order key={item.id} orderData={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersCalendarView;

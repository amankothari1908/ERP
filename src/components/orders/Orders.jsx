import React from "react";
import Order from "./Order";
import { useOrderStore } from "../../store/store";
import styles from "./Orders.module.css";

const Orders = () => {
  const orders = useOrderStore((state) => state.orders);
  return (
    <div>
      <div className={styles.orders}>
        {orders.map((item) => (
          <Order key={item.id} orderData={item} />
        ))}
      </div>
    </div>
  );
};

export default Orders;

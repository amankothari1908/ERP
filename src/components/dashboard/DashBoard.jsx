import React from "react";
import styles from "./DashBoard.module.css";
import { useOrderStore, useProductStore } from "../../store/store";

const DashBoard = () => {
  const getOrdersCount = useOrderStore((state) => state.getOrdersCount);
  const getProductsCount = useProductStore((state) => state.getProductsCount);
  return (
    <div className={styles.dashboard_container}>
      <div className={styles.dashboard_right}>
        <div className={styles.dashboard_cards}>
          <h2>Metrices</h2>
          <div className={styles.dashboard_card}>
            <p>total number of products</p>
            <p>{getProductsCount()}</p>
          </div>
          <div className={styles.dashboard_card}>
            <p>total number of orders</p>
            <p>{getOrdersCount()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

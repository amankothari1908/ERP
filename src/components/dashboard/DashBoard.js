import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import styles from "./DashBoard.module.css";

const DashBoard = () => {
  return (
    <div className={styles.dashboard_container}>
      <NavBar />
      <h2>ENTNT ERP</h2>
      <div>
        <h3>Metrices:</h3>
        <p>total number of products</p>
        <p>total number of orders</p>
      </div>
      <div>
        <Link to="/products">
          <button>Products Management</button>
        </Link>
        <Link to="/orders">
          <button>Orders Management</button>
        </Link>
      </div>
    </div>
  );
};

export default DashBoard;

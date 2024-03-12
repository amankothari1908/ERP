import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar_container}>
      <div>
        <div className={styles.navbar_children}>
          <h1>icon</h1>
          <p className={styles.navbar_children__p}>DashBoard</p>
        </div>
        <div>
          <h1>icon</h1>
          <p>Products</p>
        </div>
        <div>
          <h1>icon</h1>
          <p>Orders</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

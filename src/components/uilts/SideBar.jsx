import React from "react";
import styles from "./SideBar.module.css";
import { IoCalendarOutline, IoHomeOutline } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";
import { PiNotepadLight } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.sidebar_container}>
      <div className={styles.sidebar_inner}>
        <Link to={"/"}>
          <div
            className={`${styles.sidebar_children} ${
              pathname === "/" ? styles.colorify : ""
            }`}
          >
            <IoHomeOutline className={styles.sidebar_children} />
            <p className={styles.sidebar_children__p}>DashBoard</p>
          </div>
        </Link>

        <Link to={"/products"}>
          <div
            className={`${styles.sidebar_children} ${
              pathname === "/products" ? styles.colorify : ""
            }`}
          >
            <CiCircleList className={styles.sidebar_children} />
            <p className={styles.sidebar_children__p}>Products</p>
          </div>
        </Link>

        <Link to={"/orders"}>
          <div
            className={`${styles.sidebar_children} ${
              pathname === "/orders" ? styles.colorify : ""
            }`}
          >
            <PiNotepadLight className={styles.sidebar_children} />
            <p className={styles.sidebar_children__p}>Orders</p>
          </div>
        </Link>

        <Link to={"/ordersCalendar"}>
          <div
            className={`${styles.sidebar_children} ${
              pathname === "/ordersCalendar" ? styles.colorify : ""
            }`}
          >
            <IoCalendarOutline className={styles.sidebar_children} />
            <p className={styles.sidebar_children__p}>Calendar</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default SideBar;

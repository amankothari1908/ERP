import React from "react";
import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <h1>404 Page Not Found !</h1>
      <Link to="/">HomePage</Link>
    </div>
  );
};

export default ErrorPage;

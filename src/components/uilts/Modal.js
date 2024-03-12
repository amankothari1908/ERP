import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ children, modalHandler }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  });
  return ReactDOM.createPortal(
    <>
      <div className={styles.modal_wrapper} onClick={modalHandler} />
      <div className={styles.modal_conatiner}>{children}</div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;

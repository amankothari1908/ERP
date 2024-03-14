import React, { useState } from "react";
import styles from "./Product.module.css";
import { useNavigate } from "react-router-dom";
import Modal from "../uilts/Modal";
import DeleteProduct from "./DeleteProduct";

const Product = ({ productData }) => {
  const navigate = useNavigate();
  const goToProduct = () => {
    navigate(`/products/${productData.id}`);
  };
  const [showModal, setShowModal] = useState(false);
  const modalHandler = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className={styles.product}>
      <h2>{productData.name}</h2>
      <h3>{productData.category}</h3>
      <div className={styles.product_numbers}>
        <h4> Price : {productData.price} </h4>
        <h4> Quanitity : {productData.stockQuantity}</h4>
      </div>
      <div className={styles.product_button}>
        <button onClick={goToProduct}>UPDATE</button>
        <button onClick={modalHandler}>DELETE</button>
      </div>
      {showModal && (
        <Modal modalHandler={() => {}}>
          <DeleteProduct
            modalHandler={modalHandler}
            productData={productData}
          />
        </Modal>
      )}
    </div>
  );
};

export default Product;

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
      <h1>{productData.name}</h1>
      <h2>{productData.category}</h2>
      <div className={styles.product_numbers}>
        <h3>{productData.price} </h3>
        <h3>{productData.stockQuantity}</h3>
      </div>
      <div>
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

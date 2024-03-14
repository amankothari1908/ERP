import React, { useState } from "react";
import Product from "./Product";
import AddProduct from "./AddProduct";
import Modal from "../uilts/Modal";
import { useProductStore } from "../../store/store";
import styles from "./Products.module.css";

const Products = () => {
  const products = useProductStore((state) => state.products);
  const [showModal, setShowModal] = useState(false);
  const modalHandler = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <div>
        <button
          className={styles.products_container_button}
          onClick={modalHandler}
        >
          ADD
        </button>
      </div>

      {showModal && (
        <Modal modalHandler={modalHandler}>
          <AddProduct modalHandler={modalHandler} />
        </Modal>
      )}
      <div className={styles.products_container}>
        {products.map((item) => (
          <Product
            key={item.id}
            productData={item}
            modalHandler={modalHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

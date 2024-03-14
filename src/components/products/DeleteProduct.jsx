import React from "react";
import { useProductStore } from "../../store/store";
import styles from "./DeleteProduct.module.css";
import { IoIosClose } from "react-icons/io";

const DeleteProduct = ({ modalHandler, productData }) => {
  const deleteProduct = useProductStore((state) => state.deleteProduct);
  const deleteProductHandler = () => {
    deleteProduct(productData.id);
    modalHandler();
  };
  return (
    <div className={styles.delete_product_container}>
      <div className={styles.delete_product_heading}>
        <h2>Are you sure?</h2>
        <IoIosClose onClick={modalHandler} />
      </div>
      <div className={styles.delete_product_line}></div>
      <div className={styles.delete_product_content}>
        <p>{`${productData.name} will be deleted.`}</p>
      </div>
      <div className={styles.delete_product_line}></div>
      <div className={styles.delete_product_button}>
        <button onClick={modalHandler}>Cancel</button>
        <button onClick={deleteProductHandler}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteProduct;

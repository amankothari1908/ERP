import React, { useState } from "react";
import styles from "./AddProduct.module.css";
import { useProductStore } from "../../store/store";

const AddProduct = (props) => {
  const addProduct = useProductStore((state) => state.addProduct);
  const [enteredName, setEnteredName] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredQuantity, setEnteredQuantity] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const quantityChangeHandler = (event) => {
    setEnteredQuantity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newProduct = {
      name: enteredName,
      category: enteredCategory,
      price: enteredPrice,
      stockQuantity: enteredQuantity,
    };
    addProduct(newProduct);
    setEnteredName("");
    setEnteredCategory("");
    setEnteredPrice("");
    setEnteredQuantity("");
    props.modalHandler();
  };

  return (
    <>
      <div className={styles.add_product_container}>
        <h1>Add New Product</h1>
        <form onSubmit={submitHandler} className={styles.add_product_form}>
          <label>Product Name</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
            required
          />
          <label>Product Category</label>
          <input
            type="text"
            value={enteredCategory}
            onChange={categoryChangeHandler}
            required
          />
          <label>Product Price</label>
          <input
            type="number"
            value={enteredPrice}
            onChange={priceChangeHandler}
            required
          />
          <label>Product Quantity</label>
          <input
            type="number"
            value={enteredQuantity}
            onChange={quantityChangeHandler}
            required
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;

import React, { useState } from "react";
import styles from "./UpdateProduct.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useProductStore } from "../../store/store";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const getProductById = useProductStore((state) => state.getProductById);
  const updateProduct = useProductStore((state) => state.updateProduct);

  const productData = getProductById(productId);

  const [enteredName, setEnteredName] = useState(productData.name);
  const [enteredCategory, setEnteredCategory] = useState(productData.category);
  const [enteredPrice, setEnteredPrice] = useState(productData.price);
  const [enteredQuantity, setEnteredQuantity] = useState(
    productData.stockQuantity
  );

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
    const updatedProduct = {
      id: productData.id,
      name: enteredName,
      category: enteredCategory,
      price: enteredPrice,
      stockQuantity: enteredQuantity,
    };

    updateProduct(updatedProduct);
    navigate("/products");
  };

  return (
    <>
      <div className={styles.update_product_container}>
        <h1>Update Product</h1>
        <form onSubmit={submitHandler} className={styles.update_product_form}>
          <label>Product Name</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
          <label>Product Category</label>
          <input
            type="text"
            value={enteredCategory}
            onChange={categoryChangeHandler}
          />
          <label>Product Price</label>
          <input
            type="number"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
          <label>Product Quantity</label>
          <input
            type="number"
            value={enteredQuantity}
            onChange={quantityChangeHandler}
          />
          <div className={styles.update_product_buttons}>
            <button
              className={styles.update_product_button_first}
              type="submit"
            >
              Save
            </button>
            <button onClick={() => navigate("/products")}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProduct;

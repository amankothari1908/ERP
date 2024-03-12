import React, { useState } from "react";
import Product from "./Product";
import AddProduct from "./AddProduct";
import Modal from "../uilts/Modal";
import { useProductStore } from "../../store/store";

const Products = () => {
  const products = useProductStore((state) => state.products);
  const [showModal, setShowModal] = useState(false);
  const modalHandler = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <h1>Products List</h1>
      <button onClick={modalHandler}>ADD</button>
      {showModal && (
        <Modal modalHandler={modalHandler}>
          <AddProduct modalHandler={modalHandler} />,
        </Modal>
      )}
      <div>
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

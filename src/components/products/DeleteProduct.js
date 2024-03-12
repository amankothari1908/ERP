import React from "react";
import { useProductStore } from "../../store/store";

const DeleteProduct = ({ modalHandler, productData }) => {
  const deleteProduct = useProductStore((state) => state.deleteProduct);
  const deleteProductHandler = () => {
    deleteProduct(productData.id);
    modalHandler();
  };
  return (
    <div>
      <div>
        <h1>Are you sure?</h1>
        {/* icon */}
      </div>
      <div>
        <p>{`${productData.name} will be deleted.`}</p>
      </div>
      <div>
        <button onClick={modalHandler}>Cancel</button>
        <button onClick={deleteProductHandler}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteProduct;

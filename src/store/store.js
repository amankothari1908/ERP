import { create } from "zustand";
import mockProducts from "../assets/mockProducts";
import mockOrders from "../assets/mockOrders";

export const useProductStore = create((set) => ({
  products: [...mockProducts],
  getProductById: (productId) => {
    const product = useProductStore
      .getState()
      .products.find((item) => item.id === parseInt(productId));
    return product;
  },
  addProduct: (enteredProductData) => {
    set((state) => ({ products: [enteredProductData, ...state.products] }));
  },
  updateProduct: (updatedProduct) => {
    set((state) => ({
      products: state.products.map((item) =>
        item.id === updatedProduct.id ? updatedProduct : item
      ),
    }));
  },
  deleteProduct: (productId) => {
    set((state) => ({
      products: state.products.filter((item) => item.id !== productId),
    }));
  },
}));

export const useOrderStore = create((set) => ({
  orders: [...mockOrders],
  getOrdersByDate: (date) => {
    console.log(date);
    const selectedDateOrder = useOrderStore
      .getState()
      .orders.filter((order) => order.orderDate === date);
    // console.log(selectedDateOrder);
    return selectedDateOrder;
  },
  getOrderById: (orderId) => {
    const orderDetails = useOrderStore
      .getState()
      .orders.find((order) => order.id === parseInt(orderId));
    return orderDetails;
  },
  updateOrder: (updatedOrder) => {
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order
      ),
    }));
  },
  deleteOrder: (orderId) => {
    set((state) => ({
      orders: state.orders.filter((order) => order.id !== parseInt(orderId)),
    }));
  },
}));

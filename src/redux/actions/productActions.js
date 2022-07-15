import axios from "axios";
import { ActionTypes } from "../constants";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(data.data));
    } catch (err) {
      return console.log(err);
    }
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};

// export const removeToCart = (product) => {
//     return {
//         type: ActionTypes.ADD_TO_CART,
//         payload: product
//     }
// }

import { ActionTypes } from "../constants";

const initialProductState = {
  products: [],
};
const initialCartState = {
  carts: [],
};

export const productReducer = ( state = initialProductState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const addToCartReducer = ( state = initialCartState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return { carts: [...state.carts, payload] };
    default:
      return state;
  }
};

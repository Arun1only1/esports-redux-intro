import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import productReducer from "./slice/productSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
});

export default store;

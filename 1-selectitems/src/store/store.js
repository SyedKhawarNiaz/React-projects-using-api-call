import { configureStore } from "@reduxjs/toolkit";
import productslice from "./features/productslice";
const store = configureStore({
  reducer: {
    list: productslice,
  },
});

export default store;

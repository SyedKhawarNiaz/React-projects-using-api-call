import { configureStore } from "@reduxjs/toolkit";
import dataslice from "../Allfeatures/dataslice";
const store = configureStore({
  reducer: {
    crypt: dataslice,
  },
}); 

export default store;

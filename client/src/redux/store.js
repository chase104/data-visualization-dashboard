import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./citiesSlice";

const store = configureStore({
  reducer: {
    citiesSlice: citiesReducer,
  },
});

export default store;

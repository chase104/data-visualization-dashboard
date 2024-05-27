import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./citiesSlice";
import selectedCityReducer from "./selectedCity";

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    selectedCity: selectedCityReducer,
  },
});

export default store;

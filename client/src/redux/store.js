import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./citiesSlice";
import selectedCityReducer from "./selectedCitySlice";
import searchValueReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    selectedCity: selectedCityReducer,
    searchValue: searchValueReducer,
  },
});

export default store;

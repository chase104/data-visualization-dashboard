import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const selectedCitySlice = createSlice({
  name: "selectedCity",
  initialState,
  reducers: {
    setSelectedCity: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedCity } = selectedCitySlice.actions;

export default selectedCitySlice.reducer;

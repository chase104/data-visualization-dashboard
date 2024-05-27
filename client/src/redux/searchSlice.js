import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const searchValueSlice = createSlice({
  name: "searchValue",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSearchValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Houston: null,
  Phoenix: null,
  Chicago: null,
  Dallas: null,
  Austin: null,
  Denver: null,
  Portland: null,
  Seattle: null,
  Atlanta: null,
  Orlando: null,
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setCitiesData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCitiesData } = citiesSlice.actions;

export default citiesSlice.reducer;

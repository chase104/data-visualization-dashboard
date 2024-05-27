import { createSlice } from "@reduxjs/toolkit";

let cities = {
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
let keys = Object.keys(cities);

const initialState = {
  cities,
  keys: keys,
  selectedCity: {},
  searchValue: "",
};
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }

  const copiedObj = { ...obj };
  for (let key in copiedObj) {
    copiedObj[key] = deepCopy(copiedObj[key]);
  }

  return copiedObj;
}
const citiesSlice = createSlice({
  name: "citiesSlice",
  initialState,
  reducers: {
    setCitiesData: (state, action) => {
      return {
        ...state,
        cities: action.payload,
      };
    },
    resetCitiesData: () => {
      return initialState;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSelectedCity: (state, action) => {
      // need a deep copy here because of chartjs bug due to referenced array
      let payloadCopy = deepCopy(action.payload);
      state.selectedCity = payloadCopy;
    },
  },
});

export const {
  setCitiesData,
  resetCitiesData,
  setSearchValue,
  setSelectedCity,
} = citiesSlice.actions;

export default citiesSlice.reducer;

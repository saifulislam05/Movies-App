import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGenres: [],
  sortBy: "",
};

export const searchedSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setGenres: (state, action) => {
      state.selectedGenres=action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setGenres, setSortBy } = searchedSlice.actions;

export default searchedSlice.reducer;

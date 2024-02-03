import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getSearched } from "./searchAPI";

const initialState = {
  searched: { data: [], isLoading: false, isError: false, error: "" },
  
};

// async thunks
export const searchThunk = createAsyncThunk("search/searchAsync", async (text) => {
  const data = await getSearched(text);
  return data;
});



export const searchedSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder
      // searched
      .addCase(searchThunk.pending, (state) => {
        state.searched.isLoading = true;
      })
      .addCase(searchThunk.fulfilled, (state, action) => {
        state.searched.isLoading = false;
        state.searched.isError = false;
        state.searched.data = action.payload;
      })
      .addCase(searchThunk.rejected, (state, action) => {
        state.searched.isLoading = false;
        state.searched.isError = true;
        state.searched.error = action.error?.message;
      })
      
  },
});

export default searchedSlice.reducer;

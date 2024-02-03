import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getSearched } from "./searchAPI";

const initialState = {data: [], isLoading: false, isError: false, error: "" 
  
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
        state.isLoading = true;
      })
      .addCase(searchThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(searchThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      
  },
});

export default searchedSlice.reducer;

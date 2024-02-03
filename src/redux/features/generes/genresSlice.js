import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getGenres } from "./genresAPI";

const initialState = {
  genres: [],
  isLoading: false,
  isError: false,
  error:"",
};


// async thunks
export const fetchGenres = createAsyncThunk("genres/fetchGenres", async (type) => {
  const genres = await getGenres(type);
  return genres;
});

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  extraReducers: (builder) => {
    builder
      // genres
      .addCase(fetchGenres.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.genres = action.payload;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      
  },
});

export default genresSlice.reducer;

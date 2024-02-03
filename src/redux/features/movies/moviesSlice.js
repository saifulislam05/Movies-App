import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getPopularMovies, getTopRatedMovies, getTrendingMovies } from "./moviesAPI";

const initialState = {
  trending: { data: [], isLoading: false, isError: false, error: "" },
  popular: { data: [], isLoading: false, isError: false, error: "" },
  topRated: { data: [], isLoading: false, isError: false, error: "" },
};


// async thunks
export const fetchTrendingMovies = createAsyncThunk(
    "movies/fetchTrendingMovies",
    async () => {
        const movies = await getTrendingMovies();
        return movies
    }
)

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    const movies = await getPopularMovies();
    return movies;
  }
);

export const fetchTopRatedMovies = createAsyncThunk(
  "movies/fetchTopRatedMovies",
  async () => {
    const movies = await getTopRatedMovies();
    return movies;
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder
      // Trending Movies
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.trending.isLoading = true;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.trending.isLoading = false;
        state.trending.isError = false;
        state.trending.data = action.payload;
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.trending.isLoading = false;
        state.trending.isError = true;
        state.trending.error = action.error?.message;
      })
      // Popular Movies
      .addCase(fetchPopularMovies.pending, (state) => {
        state.popular.isLoading = true;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.popular.isLoading = false;
        state.popular.isError = false;
        state.popular.data = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.popular.isLoading = false;
        state.popular.isError = true;
        state.popular.error = action.error?.message;
      })
      // Top Rated Movies
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.topRated.isLoading = true;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.topRated.isLoading = false;
        state.topRated.isError = false;
        state.topRated.data = action.payload;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.topRated.isLoading = false;
        state.topRated.isError = true;
        state.topRated.error = action.error?.message;
      });
  },
});

export default moviesSlice.reducer;

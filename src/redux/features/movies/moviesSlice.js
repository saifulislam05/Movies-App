import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "./moviesAPI";

const initialState = {
  movies: { data: [], isLoading: false, isError: false, error: "" },
  trendingMovies: { data: [], isLoading: false, isError: false, error: "" },
  popularMovies: { data: [], isLoading: false, isError: false, error: "" },
  topRatedMovies: { data: [], isLoading: false, isError: false, error: "" },
};

// async thunks
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ genres, sortBy }) => {
    const movies = await getMovies(genres, sortBy);
    return movies;
  }
);

export const fetchTrendingMovies = createAsyncThunk(
  "movies/fetchTrendingMovies",
  async () => {
    const movies = await getTrendingMovies();
    return movies;
  }
);

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
      // Movies
      .addCase(fetchMovies.pending, (state) => {
        state.movies.isLoading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies.isLoading = false;
        state.movies.isError = false;
        state.movies.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.movies.isLoading = false;
        state.movies.isError = true;
        state.movies.error = action.error?.message;
      })
      // Trending Movies
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.trendingMovies.isLoading = true;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.trendingMovies.isLoading = false;
        state.trendingMovies.isError = false;
        state.trendingMovies.data = action.payload;
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.trendingMovies.isLoading = false;
        state.trendingMovies.isError = true;
        state.trendingMovies.error = action.error?.message;
      })
      // Popular Movies
      .addCase(fetchPopularMovies.pending, (state) => {
        state.popularMovies.isLoading = true;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.popularMovies.isLoading = false;
        state.popularMovies.isError = false;
        state.popularMovies.data = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.popularMovies.isLoading = false;
        state.popularMovies.isError = true;
        state.popularMovies.error = action.error?.message;
      })
      // Top Rated Movies
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.topRatedMovies.isLoading = true;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies.isLoading = false;
        state.topRatedMovies.isError = false;
        state.topRatedMovies.data = action.payload;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.topRatedMovies.isLoading = false;
        state.topRatedMovies.isError = true;
        state.topRatedMovies.error = action.error?.message;
      });
  },
});

export default moviesSlice.reducer;

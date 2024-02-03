import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getPopularTvShows, getTopRatedTvShows, getTrendingTvShows, getTvShows } from "./tvShowsAPI";

const initialState = {
  tvShows: { data: [], isLoading: false, isError: false, error: "" },
  trending: { data: [], isLoading: false, isError: false, error: "" },
  popular: { data: [], isLoading: false, isError: false, error: "" },
  topRated: { data: [], isLoading: false, isError: false, error: "" },
};


// async thunks
export const fetchTvShows = createAsyncThunk(
    "tvShows/fetchTvShows",
    async () => {
        const TvShows = await getTvShows();
        return TvShows
    }
)
export const fetchTrendingTvShows = createAsyncThunk(
    "tvShows/fetchTrendingTvShows",
    async () => {
        const TvShows = await getTrendingTvShows();
        return TvShows
    }
)

export const fetchPopularTvShows = createAsyncThunk(
  "tvShows/fetchPopularTvShows",
  async () => {
    const TvShows = await getPopularTvShows();
    return TvShows;
  }
);

export const fetchTopRatedTvShows = createAsyncThunk(
  "tvShows/fetchTopRatedTvShows",
  async () => {
    const TvShows = await getTopRatedTvShows();
    return TvShows;
  }
);

export const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState,
  extraReducers: (builder) => {
    builder
      // TvShows
      .addCase(fetchTvShows.pending, (state) => {
        state.tvShows.isLoading = true;
      })
      .addCase(fetchTvShows.fulfilled, (state, action) => {
        state.tvShows.isLoading = false;
        state.tvShows.isError = false;
        state.tvShows.data = action.payload;
      })
      .addCase(fetchTvShows.rejected, (state, action) => {
        state.tvShows.isLoading = false;
        state.tvShows.isError = true;
        state.tvShows.error = action.error?.message;
      })
      // Trending TvShows
      .addCase(fetchTrendingTvShows.pending, (state) => {
        state.trending.isLoading = true;
      })
      .addCase(fetchTrendingTvShows.fulfilled, (state, action) => {
        state.trending.isLoading = false;
        state.trending.isError = false;
        state.trending.data = action.payload;
      })
      .addCase(fetchTrendingTvShows.rejected, (state, action) => {
        state.trending.isLoading = false;
        state.trending.isError = true;
        state.trending.error = action.error?.message;
      })
      // Popular TvShows
      .addCase(fetchPopularTvShows.pending, (state) => {
        state.popular.isLoading = true;
      })
      .addCase(fetchPopularTvShows.fulfilled, (state, action) => {
        state.popular.isLoading = false;
        state.popular.isError = false;
        state.popular.data = action.payload;
      })
      .addCase(fetchPopularTvShows.rejected, (state, action) => {
        state.popular.isLoading = false;
        state.popular.isError = true;
        state.popular.error = action.error?.message;
      })
      // Top Rated TvShows
      .addCase(fetchTopRatedTvShows.pending, (state) => {
        state.topRated.isLoading = true;
      })
      .addCase(fetchTopRatedTvShows.fulfilled, (state, action) => {
        state.topRated.isLoading = false;
        state.topRated.isError = false;
        state.topRated.data = action.payload;
      })
      .addCase(fetchTopRatedTvShows.rejected, (state, action) => {
        state.topRated.isLoading = false;
        state.topRated.isError = true;
        state.topRated.error = action.error?.message;
      });
  },
});

export default tvShowsSlice.reducer;

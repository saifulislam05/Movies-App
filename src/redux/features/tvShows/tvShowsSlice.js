import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getPopularTvShows, getTopRatedTvShows, getTrendingTvShows, getTvShows } from "./tvShowsAPI";

const initialState = {
  tvShows: { data: [], isLoading: false, isError: false, error: "" },
  trendingTvShows: { data: [], isLoading: false, isError: false, error: "" },
  popularTvShows: { data: [], isLoading: false, isError: false, error: "" },
  topRatedTvShows: { data: [], isLoading: false, isError: false, error: "" },
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
        state.trendingTvShows.isLoading = true;
      })
      .addCase(fetchTrendingTvShows.fulfilled, (state, action) => {
        state.trendingTvShows.isLoading = false;
        state.trendingTvShows.isError = false;
        state.trendingTvShows.data = action.payload;
      })
      .addCase(fetchTrendingTvShows.rejected, (state, action) => {
        state.trendingTvShows.isLoading = false;
        state.trendingTvShows.isError = true;
        state.trendingTvShows.error = action.error?.message;
      })
      // Popular TvShows
      .addCase(fetchPopularTvShows.pending, (state) => {
        state.popularTvShows.isLoading = true;
      })
      .addCase(fetchPopularTvShows.fulfilled, (state, action) => {
        state.popularTvShows.isLoading = false;
        state.popularTvShows.isError = false;
        state.popularTvShows.data = action.payload;
      })
      .addCase(fetchPopularTvShows.rejected, (state, action) => {
        state.popularTvShows.isLoading = false;
        state.popularTvShows.isError = true;
        state.popularTvShows.error = action.error?.message;
      })
      // Top Rated TvShows
      .addCase(fetchTopRatedTvShows.pending, (state) => {
        state.topRatedTvShows.isLoading = true;
      })
      .addCase(fetchTopRatedTvShows.fulfilled, (state, action) => {
        state.topRatedTvShows.isLoading = false;
        state.topRatedTvShows.isError = false;
        state.topRatedTvShows.data = action.payload;
      })
      .addCase(fetchTopRatedTvShows.rejected, (state, action) => {
        state.topRatedTvShows.isLoading = false;
        state.topRatedTvShows.isError = true;
        state.topRatedTvShows.error = action.error?.message;
      });
  },
});

export default tvShowsSlice.reducer;

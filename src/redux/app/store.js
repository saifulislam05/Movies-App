import { configureStore } from "@reduxjs/toolkit";
import genresReducer from "../features/generes/genresSlice";
import moviesReducer from "../features/movies/moviesSlice";
import searchReducer from "../features/search/searchSlice";
import tvShowsReducer from "../features/tvShows/tvShowsSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    tvShows: tvShowsReducer,
    genres: genresReducer,
    search:searchReducer
  },
});

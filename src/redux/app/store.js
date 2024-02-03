import { configureStore } from "@reduxjs/toolkit";
import genresReducer from "../features/generes/genresSlice";
import moviesReducer from "../features/movies/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    genres: genresReducer,
  },
});

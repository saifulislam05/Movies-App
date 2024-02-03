import axios from "../../utils/axios";

export const getMovies = async () => {
    const response = await axios.get("/discover/movie");
    return response.data.results;
}

export const getTrendingMovies = async () => {
    const response = await axios.get("/trending/movie/day");
    return response.data.results;
}
export const getPopularMovies = async () => {
  const response = await axios.get("/movie/popular");
  return response.data.results;
};

export const getTopRatedMovies = async () => {
  const response = await axios.get("/movie/top_rated");
  return response.data.results;
};
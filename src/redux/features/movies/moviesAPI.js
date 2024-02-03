import axios from "../../utils/axios";

export const getMovies = async (genres, sortBy) => {
  console.log("MoviesAPI" + genres, sortBy);
  let queryString = "";
  if (genres?.length > 0) {
    queryString += `?with_genres=${genres?.join(",")}`;
  }
  if (sortBy !== "" && sortBy !== undefined) {
    if (queryString.includes("?")) {
      queryString += `&sort_by=${sortBy}`;
    } else {
      queryString += `?sort_by=${sortBy}`;
      
    }
  }
  // "/discover/movie?with_genres=80,18&sort_by=vote_average.asc"

  const response = await axios.get(`/discover/movie${queryString}`);
  return response.data.results;
};

export const getTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day");
  return response.data.results;
};
export const getPopularMovies = async () => {
  const response = await axios.get("/movie/popular");
  return response.data.results;
};

export const getTopRatedMovies = async () => {
  const response = await axios.get("/movie/top_rated");
  return response.data.results;
};

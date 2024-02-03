import axios from "../../utils/axios";

export const getTvShows = async (genres, sortBy) => {
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

  const response = await axios.get(`/discover/tv${queryString}`);
  return response.data.results;
};
export const getTrendingTvShows = async () => {
    const response = await axios.get("/trending/tv/day");
    return response.data.results;
}
export const getPopularTvShows = async () => {
  const response = await axios.get("/tv/popular");
  return response.data.results;
};

export const getTopRatedTvShows = async () => {
  const response = await axios.get("/tv/top_rated");
  return response.data.results;
};
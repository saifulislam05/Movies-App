import axios from "../../utils/axios";

export const getTvShows = async () => {
    const response = await axios.get("/discover/tv");
    return response.data.results;
}
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
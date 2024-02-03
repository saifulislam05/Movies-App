import axios from "../../utils/axios";

export const getGenres = async (type) => {
  const response = await axios.get(`/genre/${type}/list`);
  return response.data.genres;
};

import axios from "../../utils/axios";

export const getSearched = async (text) => {
    const response = await axios.get(`search/multi?query=${text}`);
    return response.data.results;
}

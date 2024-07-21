import axios from "axios";
import { AudioCategory } from "../utils/interfaces";

const API_URL = import.meta.env.VITE_XASSAID_API_BASE;

export default {
  async getMainpage(): Promise<void | AudioCategory[]> {
    try {
      const response = await axios.get(`${API_URL}/mainpage`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("There was an error fetching the data !", error);
    }
  },
};

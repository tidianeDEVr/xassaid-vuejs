import axios from "axios";
import { File } from "../utils/interfaces";

const API_URL = import.meta.env.VITE_XASSAID_API_BASE;

export default {
  async getFiles(page: Number): Promise<void | File[]> {
    try {
      const response = await axios.get(`${API_URL}/files/${page}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("There was an error fetching the files !", error);
    }
  },
};

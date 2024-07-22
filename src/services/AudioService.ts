import { AudioCategory } from "../utils/interfaces";

const API_URL = import.meta.env.VITE_XASSAID_API_BASE;

export default {
  async getMainpage(): Promise<void | AudioCategory[]> {
    try {
      const response = await fetch(`${API_URL}/mainpage`, {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("There was an error fetching the data !", error);
    }
  },
};

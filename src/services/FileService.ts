import { File } from '../utils/interfaces';
import Notiflix from 'notiflix';

const API_URL = import.meta.env.VITE_XASSAID_API_BASE;

export default {
  async getFiles(page: Number): Promise<void | File[]> {
    try {
      const response = await fetch(`${API_URL}/files/${page}`, {
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      Notiflix.Notify.failure("Une erreur s'est produite !");
      console.error('There was an error fetching the files!', error);
    }
  },
  async getFileBySlug(slug: string): Promise<void | File> {
    try {
      const response = await fetch(`${API_URL}/file/${slug}`, {
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      Notiflix.Notify.failure("Une erreur s'est produite !");
      console.error('There was an error fetching the files!', error);
    }
  },
};

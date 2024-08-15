import { File } from '../utils/interfaces';
import Notiflix from 'notiflix';

const API_URL = import.meta.env.VITE_XASSAID_API_BASE;

class FileService {
  private cache: Map<string, any> = new Map();

  private async fetchFromApi(url: string): Promise<any> {
    if (this.cache.has(url)) {
      return this.cache.get(url);
    }

    try {
      const response = await fetch(url, {
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      this.cache.set(url, data);
      return data;
    } catch (error) {
      console.error('There was an error fetching the data!', error);
      Notiflix.Report.failure(
        'Erreur',
        "Une erreur s'est produite lors de la récupération des données !",
        'OK',
      );
      throw error;
    }
  }

  getFiles(page: number): Promise<File[]> {
    const url = `${API_URL}/files/${page}`;
    return this.fetchFromApi(url);
  }

  getFileBySlug(slug: string): Promise<File> {
    const url = `${API_URL}/file/${slug}`;
    return this.fetchFromApi(url);
  }
}

export default new FileService();

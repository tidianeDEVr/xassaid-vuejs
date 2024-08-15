import Notiflix from 'notiflix';
import { Audio, AudioCategory, File } from '../utils/interfaces';

const API_URL = import.meta.env.VITE_XASSAID_API_BASE;

// Création d'une classe pour gérer les appels API et le cache
class AudioService {
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

  getMainpage(): Promise<AudioCategory[]> {
    const url = `${API_URL}/homepage`;
    return this.fetchFromApi(url);
  }

  getAudiopage(
    page: number,
  ): Promise<{ categories: AudioCategory[]; audios: File[] }> {
    const url = `${API_URL}/audios/page/${page}`;
    return this.fetchFromApi(url);
  }

  getAudiosByType(type: string): Promise<{ categories: AudioCategory[] }> {
    const url = `${API_URL}/audios/${type}`;
    return this.fetchFromApi(url);
  }

  getAudiosByCategory(
    category: string,
  ): Promise<{ category: AudioCategory; audios: File[] }> {
    const url = `${API_URL}/audios/category/${category}`;
    return this.fetchFromApi(url);
  }

  async playAudio(audio: Audio) {
    const audioPlayer = document.querySelector('audio-player');
    try {
      audioPlayer?.setAttribute(
        'src',
        `https://files.xassaid.com/audios/${audio.pathToFile}`,
      );
      audioPlayer?.setAttribute('title', audio.title);
    } catch (error) {
      Notiflix.Report.failure(
        'Erreur',
        "Une erreur s'est produite lors de la lecture du fichier audio !",
        'OK',
      );
    }
  }
}

export default new AudioService();

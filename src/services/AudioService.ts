import Notiflix from 'notiflix';
import { Audio, AudioCategory, File } from '../utils/interfaces';

const API_URL = import.meta.env.VITE_XASSAID_API_BASE;

export default {
  async getMainpage(): Promise<void | AudioCategory[]> {
    try {
      const response = await fetch(`${API_URL}/homepage`, {
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was an error fetching the data !', error);
      Notiflix.Report.failure(
        'Erreur',
        "Une erreur s'est produite lors de la récupération des données !",
        'OK',
      );
    }
  },
  async getAudiopage(): Promise<void | {
    categories: AudioCategory[];
    audios: File[];
  }> {
    try {
      const response = await fetch(`${API_URL}/audiopage`, {
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was an error fetching the data !', error);
      Notiflix.Report.failure(
        'Erreur',
        "Une erreur s'est produite lors de la récupération des données !",
        'OK',
      );
    }
  },
  async getAudiosByType(
    type: string,
  ): Promise<void | { categories: AudioCategory[] }> {
    try {
      const response = await fetch(`${API_URL}/audios/${type}`, {
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was an error fetching the data !', error);
      Notiflix.Report.failure(
        'Erreur',
        "Une erreur s'est produite lors de la récupération des données !",
        'OK',
      );
    }
  },
  async getAudiosByCategory(category: string): Promise<void | {
    category: AudioCategory;
    audios: File[];
  }> {
    try {
      const response = await fetch(`${API_URL}/audios/category/${category}`, {
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      Notiflix.Report.failure(
        'Erreur',
        "Une erreur s'est produite lors de la récupération des données !",
        'OK',
      );
    }
  },
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
  },
};

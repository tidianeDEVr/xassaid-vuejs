import Notiflix from 'notiflix';
import { Audio, AudioCategory, File } from '../utils/interfaces';

const API_URL = import.meta.env.VITE_XASSAID_API_BASE;

export default {
  async getMainpage(): Promise<void | AudioCategory[]> {
    try {
      const response = await fetch(`${API_URL}/mainpage`, {
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was an error fetching the data !', error);
    }
  },
  async getAudiopage(): Promise<void | {categories: AudioCategory[], audios: File[]}> {
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
    }
  },
  async playAudio(audio: Audio) {
    const audioPlayer = document.querySelector('audio-player');
    try {
      audioPlayer?.setAttribute('src', `https://files.xassaid.com/audios/${audio.pathToFile}`);
      audioPlayer?.setAttribute('title', audio.title);
      
      const playButton = audioPlayer?.querySelector('.play-btn') as HTMLButtonElement | null;
      console.log(playButton);
      
      // playButton?.click();
    } catch (error) {
      Notiflix.Notify.failure("Une erreur s'est produite lors de la lecture!");
    }
  }
};

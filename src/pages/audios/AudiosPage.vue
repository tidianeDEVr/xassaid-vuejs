<script setup lang="ts">
import AudioTile from '../../components/Audios/AudioTile.vue';
import Notiflix from 'notiflix';
import AudioService from '../../services/AudioService';
import CategoryCard from '../../components/Audios/CategoryCard.vue';
import { Audio, AudioCategory } from '../../utils/interfaces';
import { ref } from 'vue';
function selectBadge() {
  Notiflix.Notify.warning('Cette fonctionnalité est bientôt disponible !');
}
let badges = [
  'Djangum 61',
  'Djangum 71',
  'Djangum 78',
  'Tawil',
  'Bassite',
  'Sokhna Fat Dia',
];
let categories = ref<AudioCategory[]>([]);
let audios = ref<Audio[]>([]);

initialize();

function initialize(){
  AudioService.getAudiopage().then((res)=>{
    if(res && res.categories) categories.value = res.categories;
    if(res && res.audios) audios.value = res.audios;
  });
}
</script>

<template>
  <div class="bg-gradient-to-b from-zinc-100/5 to-zinc-100/0 p-4">
    <h1 class="font-title text-xl font-bold lg:text-2xl">Audios</h1>
    <div class="no-scrollbar mt-2 flex overflow-scroll">
      <span
        class="mr-2 cursor-pointer text-nowrap rounded-full bg-green-500/40 px-3 py-1 text-xs font-medium text-white"
        @click="selectBadge"
        v-for="badge of badges"
        >{{ badge }}</span
      >
    </div>
    <div
      class="mt-4 flex gap-4 overflow-x-scroll pb-2"
    >
      <CategoryCard v-for="category of categories" :category/>
    </div>
    <div class="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      <AudioTile v-for="(audio, index) of audios" :index :audio />
    </div>
  </div>
</template>

<style scoped></style>

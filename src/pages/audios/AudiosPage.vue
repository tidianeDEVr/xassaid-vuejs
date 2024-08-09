<script setup lang="ts">
import AudioTile from '../../components/Audios/AudioTile.vue';
import AudioService from '../../services/AudioService';
import CategoryCard from '../../components/Audios/CategoryCard.vue';
import EmptyContent from '../../components/Dumbs/EmptyContent.vue';
import { Audio, AudioCategory } from '../../utils/interfaces';
import { ref } from 'vue';
import { TYPES } from '../../utils/constants';

let badges = TYPES;
let categories = ref<AudioCategory[]>([]);
let audios = ref<Audio[]>([]);

initialize();

function initialize() {
  AudioService.getAudiopage().then((res) => {
    if (res && res.categories) categories.value = res.categories;
    if (res && res.audios) audios.value = res.audios;
  });
}
</script>

<template>
  <div class="bg-gradient-to-b from-zinc-100/5 to-zinc-100/0 p-4">
    <h1 class="font-title text-xl font-bold lg:text-2xl">Audios</h1>
    <div class="no-scrollbar mt-2 flex overflow-scroll">
      <router-link
        class="mr-2 cursor-pointer text-nowrap rounded-full bg-green-500/40 px-3 py-1 text-xs font-medium capitalize text-white"
        :to="'/audios/' + badge"
        v-for="badge of badges"
        >{{ badge }}</router-link
      >
    </div>
    <div class="mt-4 flex gap-2 overflow-x-scroll pb-2">
      <CategoryCard
        v-for="category of categories"
        :category
        style="min-width: 150px"
      />
    </div>
    <div
      class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4"
      v-if="audios.length > 0"
    >
      <AudioTile v-for="(audio, index) of audios" :index :audio />
    </div>
    <div v-else>
      <EmptyContent />
    </div>
  </div>
</template>

<style scoped></style>

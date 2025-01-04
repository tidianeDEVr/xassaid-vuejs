<script setup lang="ts">
import FileService from '../services/FileService';

import { onMounted, ref, watch } from 'vue';
import { Audio, File } from '../utils/interfaces';
import { useRoute } from 'vue-router';
import EmptyContent from '../components/Dumbs/EmptyContent.vue';
import FileTile from './files/components/FileTile.vue';
import AudioTile from './audios/components/AudioTile.vue';
import LoadingSpinner from '../components/Dumbs/LoadingSpinner.vue';

const route = useRoute();
let activeCategory = ref('file');
let term = ref<String>();
let audios = ref<Audio[]>([]);
let files = ref<File[]>([]);
let isLoading = ref(true);

watch(
  () => route.params.term,
  () => {
    term.value = (route.params.term as string) || '';
    processSearch(term.value);
  },
);

function changeCategory(category: 'audio' | 'file') {
  activeCategory.value = category;
}

function processSearch(term: String) {
  isLoading.value = true;
  FileService.searchByTerm(term)
    .then((res) => {
      audios.value = res.audios ?? [];
      files.value = res.files ?? [];
    })
    .finally(() => (isLoading.value = false));
}

onMounted(() => {
  term.value = (route.params.term as string) || '';
  processSearch(term.value);
});
</script>

<template>
  <div class="bg-gradient-to-b from-zinc-100/5 to-zinc-100/0 p-4">
    <div class="align-center flex flex-col justify-between gap-2 md:flex-row">
      <div
        class="order-2 flex w-fit gap-2 rounded-full bg-green-500/30 p-1 font-title md:order-1"
      >
        <button
          class="rounded-full px-2"
          :class="{ 'bg-green-500/60': activeCategory == 'file' }"
          @click="changeCategory('file')"
        >
          Fichiers
        </button>
        <button
          class="rounded-full px-2"
          :class="{ 'bg-green-500/60': activeCategory == 'audio' }"
          @click="changeCategory('audio')"
        >
          Audios
        </button>
      </div>
      <h1 class="order-1 font-title text-xl font-bold md:order-2 lg:text-2xl">
        Résultats pour :
        <span class="capitalize">{{ term }}</span>
      </h1>
    </div>
    <div class="mt-4" v-if="!isLoading">
      <div v-if="activeCategory == 'file'">
        <div v-if="files.length > 0">
          <div
            class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4"
          >
            <FileTile v-for="(file, index) of files" :file :index />
          </div>
        </div>
        <div v-else>
          <EmptyContent />
        </div>
      </div>
      <div v-else>
        <div
          class="mt-4 grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4"
          v-if="audios.length > 0"
        >
          <AudioTile v-for="(audio, index) of audios" :index :audio />
        </div>
        <div v-else>
          <EmptyContent />
        </div>
      </div>
    </div>
    <div v-else class="align-center mt-8 flex justify-center p-4">
      <LoadingSpinner />
    </div>
  </div>
</template>

<style scoped></style>

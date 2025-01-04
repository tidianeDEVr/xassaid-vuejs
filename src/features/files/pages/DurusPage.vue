<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { File } from '../../../utils/interfaces';

import FileService from '../../../services/FileService';
import FileTile from '../components/FileTile.vue';
import LoadingSpinner from '../../../components/Dumbs/LoadingSpinner.vue';

let files = ref<File[]>([]);
let isLoading = ref(true);
let isInitialized = false;
let currentPage = ref(1);
let isEnd = ref(false);

FileService.getFiles(currentPage.value)
  .then((res) => {
    files.value = res ?? [];
  })
  .finally(() => {
    isLoading.value = false;
    isInitialized = true;
  });

const target = ref<HTMLElement | null>(null);

const callback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && isInitialized) {
      loadMore();
    }
  });
};

const observer = new IntersectionObserver(callback, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
});

function loadMore() {
  currentPage.value += 1;
  FileService.getFiles(currentPage.value)
    .then((res) => {
      if (res && res.length == 0) isEnd.value = true;
      files.value = files.value.concat(res ?? []);
    })
    .finally(() => {
      isLoading.value = false;
      isInitialized = true;
    });
}

onMounted(() => {
  if (target.value) {
    observer.observe(target.value);
  }
});

onUnmounted(() => {
  if (target.value) {
    observer.unobserve(target.value);
  }
});
</script>

<template>
  <div
    class="bg-gradient-to-b from-zinc-100/5 to-zinc-100/0 p-4 pb-10"
    id="main"
  >
    <h1 class="font-title text-xl font-bold lg:text-3xl">Durus</h1>
    <div
      class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4"
    >
      <FileTile v-for="(file, index) of files" :file :index />
    </div>
    <!-- Load More -->
    <div
      v-if="!isEnd"
      class="align-center mt-8 flex justify-center p-4"
      ref="target"
    >
      <LoadingSpinner />
    </div>
    <div class="pt-5 text-center font-title text-2xl" v-else>
      Fin de liste !
    </div>
  </div>
</template>

<style scoped></style>

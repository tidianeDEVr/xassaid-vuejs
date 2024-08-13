<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import FileTile from '../../components/Files/FileTile.vue';
import FileService from '../../services/FileService';
import { File } from '../../utils/interfaces';

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
      <div role="status">
        <svg
          aria-hidden="true"
          class="inline h-8 w-8 animate-spin fill-green-500 text-gray-200 dark:text-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="pt-5 text-center font-title text-2xl" v-else>
      Fin de liste !
    </div>
  </div>
</template>

<style scoped></style>

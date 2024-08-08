<script setup lang="ts">
import FileService from '../../services/FileService';

import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

import router from '../../routes';
import { File } from '../../utils/interfaces';
import LoadAssetService from '../../services/LoadAssetService';

let file = ref<File>();
let isLoading = ref(true);
const route = useRoute();
const slug = ref(route.params.slug as string);
if (!slug.value) router.push({ path: '/durus' });

watch(
  () => route.params.slug,
  (newSlug) => {
    slug.value = newSlug as string;
    if (!slug.value) {
      router.push({ path: '/durus' });
    }
  },
);

onMounted(async () => {
  initialize();
  try {
    await LoadAssetService.loadCSS('/dflip/css/dflip.min.css');
    await LoadAssetService.loadCSS('/dflip/css/themify-icons.min.css');
    await LoadAssetService.loadScript('/dflip/js/libs/jquery.min.js');
    await LoadAssetService.loadScript('/dflip/js/dflip.min.js');
    initialize();
  } catch (error: any) {
    console.error(error.message);
    router.push({ path: '/durus' });
  }
});

function initialize() {
  FileService.getFileBySlug(slug.value)
    .then((res) => {
      if (res) {
        file.value = res;
      } else {
        console.error(`File not found for slug: ${slug.value}`);
        router.push({ path: '/durus' });
      }
    })
    .catch((err) => {
      console.error(`Error fetching file: ${err.message}`);
      router.push({ path: '/durus' });
    })
    .finally(() => {
      isLoading.value = false;
    });
}
</script>
<template>
  <div class="bg-gradient-to-b from-zinc-100/5 to-zinc-100/0 p-4">
    <div class="align-center flex justify-between">
      <h1 class="font-title text-xl font-bold lg:text-2xl">
        {{ file?.title }}
      </h1>
      <router-link
        to="/durus"
        class="text-body mt-1 bg-transparent text-sm font-bold opacity-60"
        >Tout afficher</router-link
      >
    </div>

    <div class="relative mx-auto mt-0 w-fit pb-10" v-if="!isLoading">
      <div
        class="_df_book"
        webgl="true"
        height="500"
        id="df_manual_book"
        source="https://files.xassaid.com/files/01-quran1-ar.pdf"
      ></div>
      <!-- :source="getPath()" -->
    </div>
  </div>
</template>

<style scoped>
._df_book {
  width: 1100px !important;
  height: 750px !important;
}
.df-ui-controls {
  display: none !important;
}
</style>

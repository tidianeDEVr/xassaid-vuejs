<script setup lang="ts">
import FileService from '../../../services/FileService';
import router from '../../../routes';
import PDF from 'pdf-vue3';

import { ref, onMounted, watch, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { File } from '../../../utils/interfaces';
import LoadingSpinner from '../../../components/Dumbs/LoadingSpinner.vue';

let file = ref<File | null>();
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
});

onUnmounted(() => {
  isLoading.value = true;
  file.value = null;
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
  <div class="relative">
    <div class="absolute top-32 w-full">
      <div role="status" class="flex animate-pulse items-center justify-center">
        <LoadingSpinner />
      </div>
    </div>
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

      <div class="relative mx-auto mt-4 w-fit pb-10" v-if="!isLoading">
        <PDF
          :src="'https://files.xassaid.com/files/' + file?.pathToFile"
          :show-progress="true"
          :progressColor="'#00bf63'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

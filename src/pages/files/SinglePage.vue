<script setup lang="ts">
import FileService from "../../services/FileService";
import VuePdfEmbed from "vue-pdf-embed";
import { ref } from "vue";
import { useRoute } from "vue-router";

import "vue-pdf-embed/dist/style/index.css";
import "vue-pdf-embed/dist/style/annotationLayer.css";
import "vue-pdf-embed/dist/style/textLayer.css";
import router from "../../routes";
import { File } from "../../utils/interfaces";

const FILE_PATH_BASE = `${import.meta.env.VITE_XASSAID_BASE}/storage/files/`;
let actualPage = ref(1);
let pageCount = ref(0);
let isLoading = ref(true);
let file = ref<File | null>(null);
const route = useRoute();
const slug = ref(route.params.slug as string);
if (!slug.value) router.push({ path: "/durus" });

FileService.getFileBySlug(slug.value)
  .then((res) => {
    file.value = res ?? null;
  })
  .catch(() => {
    router.push({ path: "/durus" });
  });

function previousPage() {
  if (actualPage.value == 1) return;
  actualPage.value--;
}
function nextPage() {
  if (actualPage.value == pageCount.value) return;
  actualPage.value++;
}
function loaded(data: any) {
  pageCount.value = data.numPages;
}
function handleDocumentRender() {
  isLoading.value = false;
}
</script>
<template>
  <div class="p-4 bg-gradient-to-b from-zinc-100/5 to-zinc-100/0">
    <div class="flex align-center justify-between">
      <h1 class="text-xl lg:text-2xl font-title font-bold">
        {{ file?.title }}
      </h1>
      <router-link
        to="/durus"
        class="text-body bg-transparent font-bold opacity-60 text-sm mt-1"
        >Tout afficher</router-link
      >
    </div>

    <div
      class="relative w-fit mx-auto pb-10 mt-4 xl:scale-150 xl:mt-24"
      v-if="file"
    >
      <VuePdfEmbed
        :annotation-layer="true"
        :text-layer="true"
        :source="FILE_PATH_BASE + file.pathToFile"
        :page="actualPage"
        :height="500"
        @loaded="loaded"
        @rendered="handleDocumentRender"
      />
      <div
        class="absolute z-30 top-0 w-full flex justify-between"
        v-if="!isLoading"
      >
        <button
          class="bg-gradient-to-r from-black/70 to-transparent h-[500px] text-3xl px-2"
          @click="previousPage"
        >
          <i class="ri-arrow-left-s-line opacity-80"></i>
        </button>
        <button
          class="bg-gradient-to-l from-black/70 to-transparent h-[500px] text-3xl px-2"
          @click="nextPage"
        >
          <i class="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

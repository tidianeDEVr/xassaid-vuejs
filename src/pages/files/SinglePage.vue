<script setup lang="ts">
// import { useRoute } from "vue-router";
import VuePdfEmbed from "vue-pdf-embed";
import { ref } from "vue";
import "vue-pdf-embed/dist/style/index.css";
import "vue-pdf-embed/dist/style/annotationLayer.css";
import "vue-pdf-embed/dist/style/textLayer.css";

// const route = useRoute();
// let slug = route.params.slug;
let actualPage = ref(1);
let pageCount = ref(0);
let isLoading = ref(true);

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
      <h1 class="text-xl lg:text-2xl font-title font-bold">Tawbatu Nasuh</h1>
      <router-link
        to="/durus"
        class="text-body bg-transparent font-bold opacity-60 text-sm mt-1"
        >Tout afficher</router-link
      >
    </div>
    <div class="relative w-fit mx-auto pb-10 mt-4">
      <VuePdfEmbed
        :annotation-layer="true"
        :text-layer="true"
        :source="'/pdf/TawbatuNasuh.pdf'"
        :page="actualPage"
        :height="500"
        @loaded="loaded"
        @rendered="handleDocumentRender"
      />
      <div
        class="absolute z-30 top-0 w-full flex justify-between"
        v-if="!isLoading.valueOf()"
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

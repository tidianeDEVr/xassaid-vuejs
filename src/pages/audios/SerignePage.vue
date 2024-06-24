<script setup lang="ts">
import AudioTile from "../../components/audios/AudioTile.vue";
import { useRoute } from "vue-router";
const route = useRoute();
let badges = [
  "Djangum 61",
  "Djangum 71",
  "Djangum 78",
  "Tawil",
  "Bassite",
  "Sokhna Fat Dia",
];
let slug = route.params.slug;
</script>

<template>
  <div class="p-4 bg-gradient-to-b from-zinc-100/5 to-zinc-100/0">
    <h1 class="text-xl lg:text-2xl font-title font-bold">Serigne {{ slug }}</h1>
    <div class="flex mt-2 overflow-scroll no-scrollbar">
      <span
        class="bg-green-500/40 text-white text-xs font-medium mr-2 px-3 py-1 text-nowrap rounded-full"
        v-for="badge of badges"
        >{{ badge }}</span
      >
    </div>
  </div>
  <div class="px-4 gap-3 grid grid-cols-1 xl:grid-cols-2 pb-16 xl:pb-0">
    <AudioTile v-for="(file, index) of badges" :index />
  </div>
</template>

<style scoped></style>

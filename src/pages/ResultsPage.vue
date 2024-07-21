<script setup lang="ts">
import { ref } from "vue";
let activeCategory = ref("file");

function changeCategory(category: "audio" | "file") {
  activeCategory.value = category;
}
</script>

<template>
  <div class="p-4 bg-gradient-to-b from-zinc-100/5 to-zinc-100/0">
    <div class="flex align-center justify-between">
      <div class="bg-green-500/30 flex gap-2 p-1 w-fit rounded-full font-title">
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
      <h1 class="text-xl lg:text-2xl font-title font-bold">
        Résultats pour : XXXXX
      </h1>
    </div>
    <div class="mt-4">
      <div v-if="activeCategory == 'file'">resultats fichiers</div>
      <div v-else>resultats audios</div>
    </div>
  </div>
</template>

<style scoped></style>

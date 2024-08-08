<script setup lang="ts">
import { ref } from 'vue';
let activeCategory = ref('file');

function changeCategory(category: 'audio' | 'file') {
  activeCategory.value = category;
}
</script>

<template>
  <div class="bg-gradient-to-b from-zinc-100/5 to-zinc-100/0 p-4">
    <div class="align-center flex justify-between">
      <div class="flex w-fit gap-2 rounded-full bg-green-500/30 p-1 font-title">
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
      <h1 class="font-title text-xl font-bold lg:text-2xl">
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

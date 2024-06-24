<script setup lang="ts">
import CategoryCard from "../../components/audios/CategoryCard.vue";
import Notiflix from "notiflix";
function selectBadge() {
  Notiflix.Notify.warning("Cette fonctionnalité est bientôt disponible !");
}
let badges = [
  "Djangum 61",
  "Djangum 71",
  "Djangum 78",
  "Tawil",
  "Bassite",
  "Sokhna Fat Dia",
];
</script>

<template>
  <div class="p-4 bg-gradient-to-b from-zinc-100/5 to-zinc-100/0">
    <div class="flex align-center justify-between">
      <h1 class="text-xl lg:text-2xl font-title font-bold">Audios</h1>
      <a
        href="/"
        data-navigo
        class="text-body bg-transparent font-bold opacity-60 text-sm"
        >Tout afficher</a
      >
    </div>
    <div class="flex mt-2 overflow-scroll no-scrollbar">
      <span
        class="bg-green-500/40 text-white text-xs font-medium mr-2 px-3 py-1 rounded-full cursor-pointer"
        @click="selectBadge"
        v-for="badge of badges"
        >{{ badge }}</span
      >
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-4 gap-4">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route = useRoute();
let badges = [
  'Djangum 61',
  'Djangum 71',
  'Djangum 78',
  'Tawil',
  'Bassite',
  'Sokhna Fat Dia',
];
let category = route.params.category;</script>
<template>
    <div class="bg-gradient-to-b from-zinc-100/5 to-zinc-100/0 p-4">
    <h1 class="font-title text-xl font-bold lg:text-2xl">{{ category }}</h1>
    <div class="no-scrollbar mt-2 flex overflow-scroll">
      <span
        class="mr-2 text-nowrap rounded-full bg-green-500/40 px-3 py-1 text-xs font-medium text-white"
        v-for="badge of badges"
        >{{ badge }}</span
      >
    </div>
  </div>
  <div class="grid grid-cols-1 gap-3 px-4 pb-16 xl:grid-cols-2 xl:pb-0">
    <!-- <AudioTile v-for="(file, index) of badges" :index :file /> -->
      <div v-for="(file) of badges">{{file}}</div>
  </div>
</template>

<script scoped></script>
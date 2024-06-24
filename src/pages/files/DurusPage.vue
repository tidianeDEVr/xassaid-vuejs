<script setup lang="ts">
import FileTile from "../../components/Files/FileTile.vue";
let files = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
</script>

<template>
  <div class="p-4 pb-10 bg-gradient-to-b from-zinc-100/5 to-zinc-100/0">
    <h1 class="text-xl lg:text-2xl font-title font-bold">Durus</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-2 gap-4">
      <FileTile v-for="(file, index) of files" :file :index />
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { AudioCategory } from "../../utils/interfaces";

defineProps<{ category: AudioCategory }>();

const imagePathBase = `${import.meta.env.VITE_XASSAID_BASE}/storage/images/`;
</script>
<template>
  <router-link
    :to="'/audios/' + category.type + '/' + category.slug"
    class="bg-transparent"
  >
    <div
      class="aspect-square rounded-md bg-cover bg-no-repeat bg-center overflow-hidden"
      :style="{
        'background-image':
          'url(' + imagePathBase + category.coverImagePath + ')',
      }"
    >
      <div
        class="bg-gradient-to-t from-black/90 hover:from-green-800/90 duration-300 ease-in-out to-zinc-100/0 w-full h-full flex flex-col justify-end p-4"
      >
        <span class="font-title">{{ category.title }}</span>
      </div>
    </div>
  </router-link>
</template>
<style scoped></style>

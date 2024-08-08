<script setup lang="ts">
import { AudioCategory } from '../../utils/interfaces';

defineProps<{ category: AudioCategory }>();

const imagePathBase = `${import.meta.env.VITE_XASSAID_BASE}/storage/images/`;
</script>
<template>
  <router-link
    :to="'/audios/' + category.type + '/' + category.slug"
    class="bg-transparent"
    style="min-width: 200px;"
  >
    <div
      class="aspect-square overflow-hidden rounded-md bg-cover bg-center bg-no-repeat"
      :style="{
        'background-image':
          'url(' + imagePathBase + category.coverImagePath + ')',
      }"
    >
      <div
        class="flex h-full w-full flex-col justify-end bg-gradient-to-t from-black/90 to-zinc-100/0 p-4 duration-300 ease-in-out hover:from-green-800/90"
      >
        <span class="font-title">{{ category.title }}</span>
      </div>
    </div>
  </router-link>
</template>
<style scoped></style>

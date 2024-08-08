<script setup lang="ts">
import { File } from '../../utils/interfaces';

defineProps<{ index: number; file: File }>();
</script>
<template>
  <div
    class="align-center group relative flex justify-between overflow-hidden rounded-lg border border-gray-200/30 bg-black px-4 py-2 duration-300 ease-in-out"
  >
    <div class="flex w-full">
      <div class="relative mr-2 grid place-content-center">
        <div>
          <span class="font-title text-2xl italic lg:text-3xl">
            {{ index + 1 }}.
          </span>
        </div>
      </div>
      <div style="line-height: 0px" class="ml-1 max-w-[190px] xl:max-w-[150px]">
        <p
          class="font-title text-xl"
          style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis"
        >
          {{ file.title }}
        </p>
        <br />
        <span class="w-11/12 font-body text-sm text-gray-500"
          >Cheikh A. B. Mbacké</span
        >
      </div>
      <div class="flex flex-grow justify-end">
        <router-link
          :to="'/durus/' + file.slug"
          class="ml-1 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/40 text-2xl duration-300 ease-in-out hover:bg-green-500/80"
          id="read-button"
          :title="`${file.title}`"
        >
          <i class="ri-book-3-line"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

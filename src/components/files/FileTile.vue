<script setup lang="ts">
import { File } from "../../utils/interfaces";

defineProps<{ index: number; file: File }>();
</script>
<template>
  <div
    class="overflow-hidden ease-in-out duration-300 group px-4 py-2 border border-gray-200/30 bg-black flex align-center justify-between rounded-lg relative"
  >
    <div class="flex w-full">
      <div class="mr-2 grid place-content-center relative">
        <div>
          <span class="text-3xl lg:text-4xl font-title italic">
            {{ index + 1 }}.
          </span>
        </div>
      </div>
      <div style="line-height: 0px" class="ml-1 max-w-[190px] xl:max-w-[150px]">
        <p
          class="text-xl font-title"
          style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis"
        >
          {{ file.title }}
        </p>
        <br />
        <span class="text-sm text-gray-500 font-body w-11/12"
          >Cheikh A. B. Mbacké</span
        >
      </div>
      <div class="flex-grow flex justify-end">
        <router-link
          :to="'/durus/' + file.slug"
          class="flex bg-green-500/40 hover:bg-green-500/80 duration-300 ease-in-out w-12 h-12 items-center justify-center rounded-full text-2xl ml-1"
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

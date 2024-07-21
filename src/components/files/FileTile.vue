<script setup lang="ts">
import { File } from "../../utils/interfaces";

defineProps<{ index: number; file: File }>();
</script>
<template>
  <div
    class="overflow-hidden ease-in-out duration-300 group px-4 py-2 border border-gray-200/20 bg-black flex align-center justify-between rounded-lg relative"
  >
    <div class="flex w-full">
      <div class="mr-2 grid place-content-center relative">
        <div class="xl:group-hover:xl:group-hover:opacity-0">
          <span class="text-3xl lg:text-4xl font-title italic">
            {{ index + 1 }}.
          </span>
        </div>
        <router-link
          :to="'/durus/' + file.slug"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid place-content-center opacity-0 xl:group-hover:opacity-100 bg-green-500/50 w-10 h-10 rounded-full hover:bg-green-500 duration-300 ease-in-out text-xl"
          id="read-button"
        >
          <i class="ri-book-3-line"></i>
        </router-link>
      </div>
      <div style="line-height: 0px" class="ml-1">
        <p
          class="text-xl font-title w-11/12"
          style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis"
        >
          {{ file.title }}
        </p>
        <br />
        <span class="text-sm text-gray-500 font-body w-11/12"
          >Cheikh Ahmadou Bamba Mbacké</span
        >
      </div>
      <div class="xl:hidden flex-grow flex justify-end">
        <router-link
          to="/durus/sindidi"
          class="flex bg-green-500/25 w-12 h-12 items-center justify-center rounded-full text-2xl ml-1"
          id="read-button"
        >
          <i class="ri-book-3-line"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

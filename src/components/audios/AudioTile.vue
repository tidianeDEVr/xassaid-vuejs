<script setup lang="ts">
import AudioService from '../../services/AudioService';
import { Audio } from '../../utils/interfaces';

defineProps<{ index: number; audio: Audio }>();

function playAudio(audio: Audio) {
  AudioService.playAudio(audio);
}
</script>
<template>
  <div
    class="align-center group relative flex justify-between overflow-hidden rounded-lg border border-gray-200/30 bg-black px-4 py-2 duration-300 ease-in-out"
  >
    <div class="flex w-full">
      <div class="relative mr-2 grid place-content-center">
        <span class="font-title text-3xl italic lg:text-4xl">
          {{ index + 1 }}.
        </span>
      </div>
      <div style="line-height: 0px" class="ml-1 max-w-[190px] xl:max-w-[150px]">
        <p
          class="font-title text-xl"
          style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis"
        >
          {{ audio.title }}
        </p>
        <br />
        <span class="w-11/12 font-body text-sm text-gray-500">{{
          audio.category?.title
        }}</span>
      </div>
      <div class="flex flex-grow justify-end">
        <button
          @click="playAudio(audio)"
          class="ml-1 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/40 text-2xl duration-300 ease-in-out hover:bg-green-500/80"
          id="read-button"
          :title="`${audio.title}`"
        >
          <i class="ri-play-line"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

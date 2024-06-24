<script setup lang="ts">
import { ref } from "vue";

let isOpened = ref(true);
let isPlaying = ref(true);
function toggle() {
  isOpened.value = !isOpened.value;
}
function play() {
  isPlaying.value = !isPlaying.value;
}
</script>

<template>
  <div
    :class="[
      'absolute bottom-0 left-0 w-full text-2xl controls duration-300 ease-in-out',
      { 'controls-out': !isOpened.valueOf() },
    ]"
  >
    <div
      class="container mx-auto backdrop-blur-sm bg-green-500/50 rounded-t-lg p-5"
    >
      <div class="xl:flex xl:align-center xl:justify-between">
        <div class="flex-1 mx-3">
          <audio class="hidden" controls id="audio">
            <source
              src="/mp3/xassaid/midadi-kourel-hizbut-tarqiyyah-rufisque-ramadan-2021.mp3"
            />
          </audio>
          <div class="flex flex-col">
            <p
              class="drop-shadow-2xl mb-2 font-title max-w-[80vw] text-nowrap text-ellipsis overflow-hidden capitalize bottom-12 text-base"
            >
              midadi kourel hizbut tarqiyyah rufisque ramadan 2021 midadi kourel
              hizbut tarqiyyah rufisque ramadan 2021 midadi kourel
            </p>
            <input
              type="range"
              value="0"
              id="progress"
              class="bg-black/50 w-full rounded-full cursor-pointer"
            />
          </div>
        </div>
        <div class="flex justify-center xl:justify-start mt-3 xl:mt-0 gap-3">
          <button
            class="control bg-black/50 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/90 duration-300 ease-in-out hover:scale-110"
          >
            <i class="ri-shuffle-line"></i>
          </button>
          <button
            class="control bg-black/50 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/90 duration-300 ease-in-out hover:scale-110"
            id="backward-btn"
          >
            <i class="ri-replay-15-line"></i>
          </button>
          <button
            class="control bg-black/50 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/90 duration-300 ease-in-out hover:scale-110"
            id="play-pause-btn"
            @click="play"
          >
            <i class="ri-play-line" v-if="isPlaying"></i>
            <i class="ri-pause-line" v-else></i>
          </button>

          <button
            class="control bg-black/50 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/90 duration-300 ease-in-out hover:scale-110"
            id="forward-btn"
          >
            <i class="ri-forward-15-line"></i>
          </button>
          <button
            class="control bg-black/50 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/90 duration-300 ease-in-out hover:scale-110"
          >
            <i class="ri-repeat-line"></i>
          </button>
        </div>
        <div class="absolute -top-4 right-2">
          <button
            @click="toggle"
            class="close w-8 h-8 text-md flex items-center justify-center rounded-full bg-black/50 hover:bg-black/90 duration-300 ease-in-out hover:scale-110"
          >
            <i class="ri-close-line" v-if="isOpened.valueOf()"></i>
            <i class="ri-arrow-up-s-line" v-else></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

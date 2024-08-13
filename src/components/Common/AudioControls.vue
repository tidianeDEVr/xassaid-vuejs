<script setup lang="ts">
import { ref } from 'vue';
const script = document.createElement('script');
script.src = '/scripts/audio-player.js';
script.onload = () => {
  console.log('audio-player component loaded');
};
document.head.appendChild(script);
let isOpened = ref(true);
function toggle() {
  isOpened.value = !isOpened.value;
}
</script>

<template>
  <div
    :class="[
      'controls fixed bottom-0 left-0 z-40 w-full text-2xl duration-300 ease-in-out',
      { 'controls-out': !isOpened },
    ]"
  >
    <div
      class="container mx-auto max-w-3xl rounded-t-lg bg-green-500/50 px-4 py-2 backdrop-blur-sm"
    >
      <audio-player
        v-pre
        title="Midadi - Serigne Cissé"
        src="https://files.xassaid.com/audios/1720973593.MP3"
        bar-width="8"
        bar-gap="2"
        preload
      ></audio-player>

      <!-- autoplay -->
      <div class="absolute -top-4 right-2">
        <button
          @click="toggle"
          class="close text-md flex h-8 w-8 items-center justify-center rounded-full bg-black/50 duration-300 ease-in-out hover:scale-110 hover:bg-black/90"
        >
          <i class="ri-arrow-down-s-line" v-if="isOpened"></i>
          <i class="ri-arrow-up-s-line" v-else></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

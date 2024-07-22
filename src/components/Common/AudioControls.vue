<script setup lang="ts">
import { ref } from "vue";
const script = document.createElement("script");
script.src = "./scripts/audio-player.js";
script.onload = () => {
  console.log("audio-player component loaded");
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
      'fixed bottom-0 left-0 w-full text-2xl controls duration-300 ease-in-out z-50',
      { 'controls-out': !isOpened },
    ]"
  >
    <div
      class="container mx-auto max-w-5xl backdrop-blur-sm bg-green-500/50 rounded-t-lg py-2 px-4"
    >
      <audio-player
        v-pre
        title="Midadi kourel hizbut tarqiyyah rufisque"
        src="./mp3/xassaid/midadi.mp3"
        bar-width="5"
        bar-gap="2"
        preload
      ></audio-player>
      <!-- autoplay -->
      <div class="absolute -top-4 right-2">
        <button
          @click="toggle"
          class="close w-8 h-8 text-md flex items-center justify-center rounded-full bg-black/50 hover:bg-black/90 duration-300 ease-in-out hover:scale-110"
        >
          <i class="ri-arrow-down-s-line" v-if="isOpened"></i>
          <i class="ri-arrow-up-s-line" v-else></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

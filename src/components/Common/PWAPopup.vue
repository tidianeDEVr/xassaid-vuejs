<script lang="ts" setup>
import { ref } from 'vue';

let deferredPrompt: any = null;
let showInstallPrompt = ref(false);

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  showInstallPrompt.value = true;
});

function installPWA() {
  showInstallPrompt.value = false;

  if (deferredPrompt) {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
    });
  }
}

function hideInstallPrompt() {
  showInstallPrompt.value = false;
}
</script>

<template>
  <div
    v-if="showInstallPrompt"
    class="align-center absolute left-0 top-0 z-50 grid h-full w-full place-content-center justify-center bg-black/50 backdrop-blur-sm"
  >
    <div class="rounded-lg bg-green-500 p-4">
      <p>Installez notre application pour une meilleure expérience !</p>
      <br />
      <div class="flex gap-4">
        <button @click="installPWA">Installer</button>
        <button @click="hideInstallPrompt">Non, merci !</button>
      </div>
    </div>
  </div>
</template>

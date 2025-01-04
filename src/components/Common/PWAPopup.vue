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
    class="align-center absolute left-0 top-0 z-50 grid h-full w-full place-content-center justify-center bg-black/50 px-4 backdrop-blur-sm"
  >
    <div
      class="overflow-hidden rounded-lg bg-green-500 lg:p-10"
      style="min-height: 300px; max-width: 800px"
    >
      <div class="relative grid grid-cols-1 md:grid-cols-2 lg:gap-4">
        <div class="p-4 pr-32 md:p-4 lg:p-0">
          <h3 class="font-title text-2xl font-bold md:text-3xl">
            Installez Xassaid !
          </h3>
          <p class="my-4 font-body md:my-6">
            Plongez au cœur des enseignements et du patrimoine du Mouridisme.
            Accédez rapidement et facilement à des ressources éducatives variées
            pour enrichir votre compréhension et votre pratique spirituelle,
            directement depuis votre appareil.
          </p>
          <div
            class="flex flex-col gap-3 font-title font-bold md:flex-row md:gap-4"
          >
            <button
              @click="installPWA"
              class="rounded-md bg-white px-5 py-3 text-black duration-300 ease-in-out hover:bg-black hover:text-white"
            >
              Acceptez et installez
            </button>
            <button
              @click="hideInstallPrompt"
              class="rounded-md bg-black px-5 py-3 duration-300 ease-in-out hover:bg-white hover:text-black"
            >
              Non, merci !
            </button>
          </div>
        </div>
        <div></div>
        <img
          src="/images/xassaid_mockup_mobile.png"
          class="absolute -right-52 top-4 w-[320px] md:right-0"
        />
      </div>
    </div>
  </div>
</template>

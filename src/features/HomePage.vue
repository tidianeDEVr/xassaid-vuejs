<script setup lang="ts">
import LoaderCard from '../components/Dumbs/LoaderCard.vue';
import CategoryCard from '../features/audios/components/CategoryCard.vue';
import AudioService from '../services/AudioService';
import { AudioCategory } from '../utils/interfaces';
import { ref } from 'vue';

let makkGni = ref<AudioCategory[]>([]);
let kourelsYii = ref<AudioCategory[]>([]);
let rajassKatYii = ref<AudioCategory[]>([]);
let sammFallYii = ref<AudioCategory[]>([]);

let isLoading = ref(true);

AudioService.getMainpage()
  .then((res) => {
    console.log(res);

    makkGni.value = res.makkGni ?? [];
    kourelsYii.value = res.kourelsYii ?? [];
    rajassKatYii.value = res.rajassKatYii ?? [];
    sammFallYii.value = res.sammFallYii ?? [];
  })
  .finally(() => {
    isLoading.value = false;
  });
</script>

<template>
  <div class="bg-gradient-to-b from-zinc-100/5 to-zinc-100/0 p-4">
    <div class="align-center flex justify-between">
      <h1 class="font-title text-xl font-bold lg:text-2xl">Mákk gnii</h1>
      <router-link
        to="/audios/makk-gni"
        class="text-body mt-1 bg-transparent text-sm font-bold opacity-60"
        >Tout afficher</router-link
      >
    </div>
    <div
      v-if="isLoading"
      class="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6"
    >
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
    </div>
    <div
      v-else
      class="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6"
    >
      <CategoryCard v-for="category in makkGni" :category />
    </div>
  </div>
  <div class="p-4">
    <div class="align-center flex justify-between">
      <h1 class="font-title text-xl font-bold lg:text-2xl">Kourels yii</h1>
      <router-link
        to="/audios/kourels-yii"
        class="text-body mt-1 bg-transparent text-sm font-bold opacity-60"
        >Tout afficher</router-link
      >
    </div>
    <div
      v-if="isLoading"
      class="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6"
    >
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
    </div>
    <div
      v-else
      class="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6"
    >
      <CategoryCard v-for="category in kourelsYii" :category />
    </div>
  </div>
  <div class="p-4">
    <div class="align-center flex justify-between">
      <h1 class="font-title text-xl font-bold lg:text-2xl">Rajass kat yii</h1>
      <router-link
        to="/audios/rajass-kat-yii"
        class="text-body mt-1 bg-transparent text-sm font-bold opacity-60"
        >Tout afficher</router-link
      >
    </div>
    <div
      v-if="isLoading"
      class="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6"
    >
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
    </div>
    <div
      v-else
      class="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6"
    >
      <CategoryCard v-for="category in rajassKatYii" :category />
    </div>
  </div>
  <div class="p-4">
    <div class="align-center flex justify-between">
      <h1 class="font-title text-xl font-bold lg:text-2xl">Samm Fall</h1>
      <router-link
        to="/audios/samm-fall"
        style="z-index: 49"
        class="text-body mt-1 bg-transparent text-sm font-bold opacity-60"
        >Tout afficher</router-link
      >
    </div>
    <div
      v-if="isLoading"
      class="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6"
    >
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
    </div>
    <div
      v-else
      class="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6"
    >
      <CategoryCard v-for="category in sammFallYii" :category />
    </div>
  </div>
</template>

<style scoped></style>

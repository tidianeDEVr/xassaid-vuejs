<script setup lang="ts">
import LoaderCard from '../components/Dumbs/LoaderCard.vue';
import CategoryCard from '../components/Audios/CategoryCard.vue';
import AudioService from '../services/AudioService';
import { AudioCategory } from '../utils/interfaces';
import { ref } from 'vue';

let categories = ref<AudioCategory[]>([]);
let isLoading = ref(true);

AudioService.getMainpage()
  .then((res) => {
    categories.value = res ?? [];
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
      <CategoryCard v-for="category in categories" :category />
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
    <div class="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
      <a href="/" class="bg-transparent">
        <div
          class="aspect-square overflow-hidden rounded-md bg-cover bg-center bg-no-repeat"
          style="background-image: url(../../images/ht.jpeg)"
        >
          <div
            class="flex h-full w-full flex-col justify-end bg-gradient-to-t from-black/90 to-zinc-100/0 p-4 duration-300 ease-in-out hover:from-green-500/30"
          >
            <span class="font-title">Hizbut Tarqiyyah Rufisque</span>
          </div>
        </div>
      </a>
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
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
    <div class="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
      <a href="/" class="bg-transparent">
        <div
          class="aspect-square overflow-hidden rounded-md bg-cover bg-center bg-no-repeat"
          style="background-image: url(../../images/ht.jpeg)"
        >
          <div
            class="flex h-full w-full flex-col justify-end bg-gradient-to-t from-black/90 to-zinc-100/0 p-4 duration-300 ease-in-out hover:from-green-500/30"
          >
            <span class="font-title">Hizbut Tarqiyyah Rufisque</span>
          </div>
        </div>
      </a>
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
    </div>
  </div>
</template>

<style scoped></style>

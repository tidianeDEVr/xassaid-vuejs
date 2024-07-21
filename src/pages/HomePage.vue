<script setup lang="ts">
import LoaderCard from "../components/Dumbs/LoaderCard.vue";
import CategoryCard from "../components/Audios/CategoryCard.vue";
import AudioService from "../services/AudioService";
import { AudioCategory } from "../utils/interfaces";
import { ref } from "vue";

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
  <div class="p-4 bg-gradient-to-b from-zinc-100/5 to-zinc-100/0">
    <div class="flex align-center justify-between">
      <h1 class="text-xl lg:text-2xl font-title font-bold">Mákk gnii</h1>
      <router-link
        to="/"
        class="text-body bg-transparent font-bold opacity-60 text-sm mt-1"
        >Tout afficher</router-link
      >
    </div>
    <div
      v-if="isLoading"
      class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2 gap-4"
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
      class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2 gap-4"
    >
      <CategoryCard v-for="category in categories" :category />
    </div>
  </div>
  <div class="p-4">
    <div class="flex align-center justify-between">
      <h1 class="text-xl lg:text-2xl font-title font-bold">Kourels yii</h1>
      <router-link
        to="/"
        class="text-body bg-transparent font-bold opacity-60 text-sm mt-1"
        >Tout afficher</router-link
      >
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2 gap-4">
      <a href="/" class="bg-transparent">
        <div
          class="aspect-square rounded-md bg-cover bg-no-repeat bg-center overflow-hidden"
          style="background-image: url(../../images/ht.jpeg)"
        >
          <div
            class="bg-gradient-to-t from-black/90 hover:from-green-500/30 duration-300 ease-in-out to-zinc-100/0 w-full h-full flex flex-col justify-end p-4"
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
    <div class="flex align-center justify-between">
      <h1 class="text-xl lg:text-2xl font-title font-bold">Rajass yii</h1>
      <router-link
        to="/"
        class="text-body bg-transparent font-bold opacity-60 text-sm mt-1"
        >Tout afficher</router-link
      >
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2 gap-4">
      <a href="/" class="bg-transparent">
        <div
          class="aspect-square rounded-md bg-cover bg-no-repeat bg-center overflow-hidden"
          style="background-image: url(../../images/ht.jpeg)"
        >
          <div
            class="bg-gradient-to-t from-black/90 hover:from-green-500/30 duration-300 ease-in-out to-zinc-100/0 w-full h-full flex flex-col justify-end p-4"
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

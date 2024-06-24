<script setup lang="ts">
import LoaderCard from "../components/Dumbs/LoaderCard.vue";
import CategoryCard from "../components/audios/CategoryCard.vue";
</script>

<template>
  <div class="p-4 bg-gradient-to-b from-zinc-100/5 to-zinc-100/0">
    <div class="flex align-center justify-between">
      <h1 class="text-xl lg:text-2xl font-title font-bold">Mákk gnii</h1>
      <a
        href="/"
        data-navigo
        class="text-body bg-transparent font-bold opacity-60 text-sm"
        >Tout afficher</a
      >
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2 gap-4">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  </div>
  <div class="p-4">
    <div class="flex align-center justify-between">
      <h1 class="text-xl lg:text-2xl font-title font-bold">Kourels yii</h1>
      <a
        href="/"
        data-navigo
        class="text-body bg-transparent font-bold opacity-60 text-sm"
        >Tout afficher</a
      >
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2 gap-4">
      <a href="/" data-navigo class="bg-transparent">
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
      <a
        href="/"
        data-navigo
        class="text-body bg-transparent font-bold opacity-60 text-sm"
        >Tout afficher</a
      >
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2 gap-4">
      <a href="/" data-navigo class="bg-transparent">
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

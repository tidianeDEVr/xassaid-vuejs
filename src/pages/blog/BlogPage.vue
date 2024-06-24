<script setup lang="ts">
let badges = ["Xam Xamlé", "Jaar Jaar", "Serign bii"];
import BlogCard from "../../components/Blog/BlogCard.vue";
</script>

<template>
  <div class="p-4 bg-gradient-to-b from-zinc-100/5 to-zinc-100/0">
    <h1 class="text-xl lg:text-2xl font-title font-bold">Blog</h1>
    <div class="flex mt-2 overflow-scroll no-scrollbar">
      <span
        class="bg-green-500/40 text-white text-xs font-medium mr-2 px-3 py-1 text-nowrap rounded-full"
        v-for="badge of badges"
        >{{ badge }}</span
      >
    </div>
  </div>
  <div class="px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2 gap-4">
    <BlogCard v-for=" of badges" />
    <BlogCard v-for=" of badges" />
    <BlogCard v-for=" of badges" />
    <BlogCard v-for=" of badges" />
  </div>
</template>

<style scoped></style>

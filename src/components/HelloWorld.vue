<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <div class="bg-red-500 hover:scale-110 duration-300 ease-in-out">
    <a
      href="divbrary"
      class="navigation-btn duration-500 ease-in-out rounded-md font-bold text-lg opacity-70 pl-4 py-2 w-full block"
    >
      <i class="ri-quill-pen-fill"></i>
      <span class="ml-3 font-title">Bibliothèque</span>
    </a>
  </div>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped></style>

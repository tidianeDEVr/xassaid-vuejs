<script setup lang="ts"></script>

<template>
  <div class="p-4 bg-gradient-to-b from-zinc-100/5 to-zinc-100/0">
    <h1 class="text-2xl text-center font-title mt-10">Page introuvable !</h1>
    <img src="/images/404.png" width="250px" class="mx-auto" />
    <p class="mt-3 text-center">
      Rendez-vous à la
      <router-link to="/" class="opacity-100 underline decoration-solid"
        >page d'accueil.</router-link
      >
    </p>
  </div>
</template>

<style scoped></style>

<script setup lang="ts"></script>

<template>
  <div class="bg-gradient-to-b from-zinc-100/5 to-zinc-100/0 p-4">
    <h1 class="mt-10 text-center font-title text-2xl">Page introuvable !</h1>
    <img src="/images/404.png" width="250px" class="mx-auto" />
    <p class="mt-3 text-center">
      Rendez-vous à la
      <router-link to="/" class="underline decoration-solid opacity-100"
        >page d'accueil.</router-link
      >
    </p>
  </div>
</template>

<style scoped></style>

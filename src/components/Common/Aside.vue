<script setup lang="ts"></script>
<template>
  <div class="bg-zinc-900 border border-gray-200/20 rounded-md p-4">
    <router-link
      to="/"
      class="hover:scale-105 duration-300 ease-in-out flex items-center justify-center bg-transparent gap-3"
    >
      <img
        src="../../assets/images/logo-xassaid.png"
        alt="Logo Xassaid"
        class="w-14"
      />
      <h2 class="text-4xl mt-2 opacity-80 font-bold font-title italic">
        Xassaid
      </h2>
    </router-link>
    <ul class="flex flex-col gap-2 mt-5">
      <li class="hover:scale-110 duration-300 ease-in-out w-full">
        <router-link
          activeClass="bg-green-500/40"
          to="/"
          class="navigation-btn duration-500 ease-in-out rounded-md font-bold text-lg opacity-70 pl-4 py-2 w-full block"
        >
          <i class="ri-home-smile-2-fill"></i>
          <span class="ml-3 font-title">Accueil</span>
        </router-link>
      </li>
      <li class="hover:scale-110 duration-300 ease-in-out">
        <router-link
          activeClass="bg-green-500/40"
          to="/audios"
          class="navigation-btn duration-500 ease-in-out rounded-md font-bold text-lg opacity-70 pl-4 py-2 w-full block"
        >
          <i class="ri-rfid-fill"></i>
          <span class="ml-3 font-title">Audios</span>
        </router-link>
      </li>
      <li class="hover:scale-110 duration-300 ease-in-out">
        <router-link
          activeClass="bg-green-500/40"
          to="/durus"
          class="navigation-btn duration-500 ease-in-out rounded-md font-bold text-lg opacity-70 pl-4 py-2 w-full block"
        >
          <i class="ri-quill-pen-fill"></i>
          <span class="ml-3 font-title">Durus</span>
        </router-link>
      </li>

      <li class="hover:scale-110 duration-300 ease-in-out">
        <router-link
          activeClass="bg-green-500/40"
          to="/blog"
          class="navigation-btn duration-500 ease-in-out rounded-md font-bold text-lg opacity-70 pl-4 py-2 w-full block"
        >
          <i class="ri-function-fill"></i>
          <span class="ml-3 font-title">Blog</span>
        </router-link>
      </li>
      <li class="hover:scale-110 duration-300 ease-in-out">
        <router-link
          activeClass="bg-green-500/40"
          to="/contact"
          class="navigation-btn duration-500 ease-in-out rounded-md font-bold text-lg opacity-70 pl-4 py-2 w-full block"
        >
          <i class="ri-mail-fill"></i>
          <span class="ml-3 font-title">Contact</span>
        </router-link>
      </li>
    </ul>
  </div>
  <div class="bg-zinc-900 border border-gray-200/20 rounded-md p-4 flex-1">
    <div class="flex flex-col justify-between h-full">
      <div>
        <h3 class="font-body ml-3 text-base opacity-80 mt-3">Documentation</h3>
        <p class="mt-2 leading-8 p-3 text-justify">
          <router-link
            to="/"
            class="bg-transparent opacity-60 hover:opacity-100 duration-300 ease-in-out"
            >Sciences religieuses</router-link
          >
          •
          <router-link
            to="/"
            class="bg-transparent opacity-60 hover:opacity-100 duration-300 ease-in-out"
            >Les Khalifes</router-link
          >
          •
          <router-link
            to="/"
            class="bg-transparent opacity-60 hover:opacity-100 duration-300 ease-in-out"
            >Les Fondements</router-link
          >
          •
          <router-link
            to="/"
            class="bg-transparent opacity-60 hover:opacity-100 duration-300 ease-in-out"
            >La Grande Mosquée de Touba</router-link
          >
          •
          <router-link
            to="/"
            class="bg-transparent opacity-60 hover:opacity-100 duration-300 ease-in-out"
            >Le Statut Sacré de la Cité</router-link
          >
          •
          <router-link
            to="/"
            class="bg-transparent opacity-60 hover:opacity-100 duration-300 ease-in-out"
            >Sciences religieuses</router-link
          >
          •
          <router-link
            to="/"
            class="bg-transparent opacity-60 hover:opacity-100 duration-300 ease-in-out"
            >Les Khalifes</router-link
          >
          •
          <router-link
            to="/"
            class="bg-transparent opacity-60 hover:opacity-100 duration-300 ease-in-out"
            >Les Fondements</router-link
          >
          •
          <router-link
            to="/"
            class="bg-transparent opacity-60 hover:opacity-100 duration-300 ease-in-out"
            >La Grande Mosquée de Touba</router-link
          >
          •
          <router-link
            to="/"
            class="bg-transparent opacity-60 hover:opacity-100 duration-300 ease-in-out"
            >Le Statut Sacré de la Cité</router-link
          >
          •
        </p>
      </div>
      <p class="text-center">
        Réalisé par
        <a class="underline" href="https://linktr.ee/tidiane_" target="_blank"
          >Tidiane.</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped></style>

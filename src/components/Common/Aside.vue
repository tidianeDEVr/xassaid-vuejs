<script setup lang="ts"></script>
<template>
  <div class="rounded-md border border-gray-200/20 bg-zinc-900 p-4">
    <router-link
      to="/"
      class="flex items-center justify-center gap-3 bg-transparent duration-300 ease-in-out hover:scale-105"
    >
      <img
        src="../../assets/images/logo-xassaid.png"
        alt="Logo Xassaid"
        class="w-14"
      />
      <h2 class="mt-2 font-title text-4xl font-bold italic opacity-100">
        Xassaid
      </h2>
    </router-link>
    <ul class="mt-5 flex flex-col gap-2">
      <li class="w-full duration-300 ease-in-out hover:scale-110">
        <router-link
          exactActiveClass="bg-green-500/40"
          to="/"
          class="navigation-btn block w-full rounded-md py-2 pl-4 text-lg font-bold opacity-70 duration-500 ease-in-out"
        >
          <i class="ri-home-smile-2-fill"></i>
          <span class="ml-3 font-title">Accueil</span>
        </router-link>
      </li>
      <li class="duration-300 ease-in-out hover:scale-110">
        <router-link
          activeClass="bg-green-500/40"
          to="/audios"
          class="navigation-btn block w-full rounded-md py-2 pl-4 text-lg font-bold opacity-70 duration-500 ease-in-out"
        >
          <i class="ri-rfid-fill"></i>
          <span class="ml-3 font-title">Audios</span>
        </router-link>
      </li>
      <li class="duration-300 ease-in-out hover:scale-110">
        <router-link
          activeClass="bg-green-500/40"
          to="/durus"
          class="navigation-btn block w-full rounded-md py-2 pl-4 text-lg font-bold opacity-70 duration-500 ease-in-out"
        >
          <i class="ri-quill-pen-fill"></i>
          <span class="ml-3 font-title">Durus</span>
        </router-link>
      </li>

      <li class="duration-300 ease-in-out hover:scale-110">
        <a
          target="_blank"
          href="https://blog.xassaid.com/"
          class="navigation-btn block w-full rounded-md py-2 pl-4 text-lg font-bold opacity-70 duration-500 ease-in-out"
        >
          <i class="ri-function-fill"></i>
          <span class="ml-3 font-title">Blog</span>
        </a>
      </li>
      <li class="duration-300 ease-in-out hover:scale-110">
        <router-link
          activeClass="bg-green-500/40"
          to="/contact"
          class="navigation-btn block w-full rounded-md py-2 pl-4 text-lg font-bold opacity-70 duration-500 ease-in-out"
        >
          <i class="ri-mail-fill"></i>
          <span class="ml-3 font-title">Contact</span>
        </router-link>
      </li>
    </ul>
  </div>
  <div class="flex-1 rounded-md border border-gray-200/20 bg-zinc-900 p-4">
    <div class="flex h-full flex-col justify-between">
      <div>
        <h3 class="ml-3 mt-3 font-body text-base opacity-80">Documentation</h3>
        <p class="mt-2 p-3 text-justify leading-8">
          <router-link
            to="/"
            class="bg-transparent opacity-60 duration-300 ease-in-out hover:opacity-100"
            >Sciences religieuses</router-link
          >
          •
          <router-link
            to="/"
            class="bg-transparent opacity-60 duration-300 ease-in-out hover:opacity-100"
            >Les Khalifes</router-link
          >
          •
          <router-link
            to="/"
            class="bg-transparent opacity-60 duration-300 ease-in-out hover:opacity-100"
            >Les Fondements</router-link
          >
          •
          <router-link
            to="/"
            class="bg-transparent opacity-60 duration-300 ease-in-out hover:opacity-100"
            >La Grande Mosquée de Touba</router-link
          >
          •
          <router-link
            to="/"
            class="bg-transparent opacity-60 duration-300 ease-in-out hover:opacity-100"
            >Le Statut Sacré de la Cité</router-link
          >
          •
          <router-link
            to="/"
            class="bg-transparent opacity-60 duration-300 ease-in-out hover:opacity-100"
            >Sciences religieuses</router-link
          >
          •
          <router-link
            to="/"
            class="bg-transparent opacity-60 duration-300 ease-in-out hover:opacity-100"
            >Les Khalifes</router-link
          >
          •
          <router-link
            to="/"
            class="bg-transparent opacity-60 duration-300 ease-in-out hover:opacity-100"
            >Les Fondements</router-link
          >
          •
          <router-link
            to="/"
            class="bg-transparent opacity-60 duration-300 ease-in-out hover:opacity-100"
            >La Grande Mosquée de Touba</router-link
          >
          •
          <router-link
            to="/"
            class="bg-transparent opacity-60 duration-300 ease-in-out hover:opacity-100"
            >Le Statut Sacré de la Cité</router-link
          >
          •
        </p>
      </div>
      <p class="text-center" style="z-index: 999999">
        Réalisé par
        <a class="underline" href="https://linktr.ee/tidiane_" target="_blank"
          >Tidiane.</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped></style>

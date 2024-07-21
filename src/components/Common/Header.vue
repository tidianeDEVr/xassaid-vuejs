<script setup lang="ts">
import Notiflix from "notiflix";
import { ref } from "vue";
let isMobileMenuActive = ref(false);
function goBack() {
  window.history.back();
}
function goForward() {
  window.history.forward();
}
function warn() {
  Notiflix.Notify.warning("Cette fonctionnalité est bientôt disponible !");
}
function toggleMobileMenu() {
  isMobileMenuActive.value = !isMobileMenuActive.value;
}
</script>

<template>
  <div
    :class="[
      'absolute w-screen overlay z-50 bg-black/30 backdrop-blur-sm top-0 left-0 flex duration-300 ease-in-out',
      { hidden: !isMobileMenuActive },
    ]"
  >
    <div
      class="w-60 bg-black h-screen place-content-center"
      style="z-index: 99"
    >
      <ul
        class="h-fit w-fit mx-auto font-title font-bold text-4xl flex flex-col gap-7"
      >
        <li>
          <router-link
            to="/"
            exactActiveClass="border-green-500/40 border-b-4"
            @click="toggleMobileMenu"
            >Accueil</router-link
          >
        </li>
        <li>
          <router-link
            to="/audios"
            exactActiveClass="border-green-500/40 border-b-4"
            @click="toggleMobileMenu"
            >Audios</router-link
          >
        </li>
        <li>
          <router-link
            to="/durus"
            exactActiveClass="border-green-500/40 border-b-4"
            @click="toggleMobileMenu"
            >Durus</router-link
          >
        </li>
        <li>
          <a target="_blank" href="https://blog.xassaid.com/">Blog</a>
        </li>
        <li>
          <router-link
            to="/contact"
            exactActiveClass="border-green-500/40 border-b-4"
            @click="toggleMobileMenu"
            >Contact</router-link
          >
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <button @click="toggleMobileMenu" class="absolute top-5 right-5 text-6xl">
      <i class="ri-close-line"></i>
    </button>
  </div>
  <nav class="pt-4 px-4 flex align-center justify-between mb-4">
    <div class="flex justify-between xl:justify-normal w-full gap-5">
      <router-link
        to="/"
        class="flex xl:hidden items-center justify-center bg-transparent gap-3"
      >
        <img
          src="../../assets/images/logo-xassaid.png"
          alt="Logo Xassaid"
          class="w-10"
        />
        <h2 class="text-2xl mt-2 opacity-80 font-bold font-title italic">
          Xassaid
        </h2>
      </router-link>
      <div class="hidden xl:flex gap-2">
        <button
          class="bg-green-500/20 w-10 h-10 rounded-full hover:bg-green-500/40 duration-300 ease-in-out"
          id="history-forward-btn"
          @click="goBack"
        >
          <i class="ri-arrow-left-s-line text-2xl"></i>
        </button>
        <button
          class="bg-green-500/20 w-10 h-10 rounded-full hover:bg-green-500/40 duration-300 ease-in-out"
          id="history-next-btn"
          @click="goForward"
        >
          <i class="ri-arrow-right-s-line text-2xl"></i>
        </button>
      </div>
      <div class="font-title flex">
        <div class="h-full relative hidden md:block">
          <input
            type="text"
            placeholder="Veuillez saisir pour rechercher..."
            class="h-full px-4 bg-green-500/20 rounded-full w-80 focus:bg-green-500/40 outline-none duration-300 ease-in-out"
          />
          <button
            class="pr-4 absolute inset-y-0 right-0 duration-300 ease-in-out hover:scale-125"
          >
            <i class="ri-search-line"></i>
          </button>
        </div>
        <div class="flex align-center xl:hidden">
          <!-- Mobile Search Here -->
          <button
            class="text-xl ml-3 bg-green-500/20 px-3 aspect-square rounded-full"
            @click="toggleMobileMenu"
          >
            <i class="ri-menu-line"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="hidden xl:flex gap-3 font-title">
      <button
        class="bg-black hover:bg-green-500/40 duration-300 ease-in-out px-5 rounded-full"
        id="register-btn"
        @click="warn"
      >
        S'inscrire
      </button>
      <button
        class="whitespace-nowrap bg-white text-black hover:text-white hover:bg-green-500/40 duration-300 ease-in-out px-5 rounded-full"
        id="login-btn"
        @click="warn"
      >
        Se connecter
      </button>
    </div>

    <!-- Mobile Drawer -->
  </nav>
</template>

<style scoped></style>

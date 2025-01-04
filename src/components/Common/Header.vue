<script setup lang="ts">
import Notiflix from 'notiflix';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
let isMobileMenuActive = ref(false);
let isMobileSearchFocused = ref(false);
let searchTerm = ref('');
const router = useRouter();
function goBack() {
  window.history.back();
}
function goForward() {
  window.history.forward();
}
function toggleMobileMenu() {
  isMobileMenuActive.value = !isMobileMenuActive.value;
}
function toggleFocus() {
  isMobileSearchFocused.value = !isMobileSearchFocused.value;
  if (isMobileSearchFocused.value) {
    const input = document.getElementById('mobile-input');
    input?.focus();
  }
}
function processSearch() {
  if (searchTerm.value.length < 3)
    return Notiflix.Notify.warning(
      'Veuillez entrain au moins 3 lettres pour la recherche !',
    );

  router.push(`/results/${searchTerm.value.toLowerCase()}`);

  searchTerm.value = '';
}
</script>

<template>
  <!-- Mobile Menu Start -->
  <div
    :class="[
      'overlay absolute right-0 top-0 z-50 flex w-screen bg-black/30 backdrop-blur-sm duration-300 ease-in-out',
      { closed: !isMobileMenuActive },
    ]"
  >
    <div
      class="relative h-screen w-60 place-content-center bg-black"
      style="z-index: 99"
    >
      <ul
        class="mx-auto flex h-fit w-fit flex-col gap-7 font-title text-4xl font-bold"
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
          <a
            href="https://blog.xassaid.com/contact"
            target="_blank"
            exactActiveClass="border-green-500/40 border-b-4"
            @click="toggleMobileMenu"
            >Contact</a
          >
        </li>
        <li></li>
        <li></li>
        <li></li>
        <div class="absolute bottom-20">
          <p class="text-center text-sm font-light">
            Réalisé par
            <a
              class="underline"
              href="https://linktr.ee/tidiane_"
              target="_blank"
              >Tidiane.</a
            >
          </p>
        </div>
      </ul>
    </div>
    <button @click="toggleMobileMenu" class="absolute right-5 top-5 text-6xl">
      <i class="ri-close-line"></i>
    </button>
  </div>
  <!-- Mobile Menu End -->
  <nav class="align-center mb-4 flex justify-between px-4 pt-4">
    <div class="flex w-full justify-between gap-5 xl:justify-normal">
      <router-link
        to="/"
        class="logo flex items-center justify-center gap-3 bg-transparent xl:hidden"
        :class="{ 'opacity-0': isMobileSearchFocused }"
      >
        <img
          src="../../assets/images/logo-xassaid.png"
          alt="Logo Xassaid"
          class="w-10"
        />
        <h2 class="mt-2 font-title text-2xl font-bold italic opacity-80">
          Xassaid
        </h2>
      </router-link>
      <div class="hidden gap-2 xl:flex">
        <button
          class="h-10 w-10 rounded-full bg-green-500/20 duration-300 ease-in-out hover:bg-green-500/40"
          id="history-forward-btn"
          @click="goBack"
        >
          <i class="ri-arrow-left-s-line text-2xl"></i>
        </button>
        <button
          class="h-10 w-10 rounded-full bg-green-500/20 duration-300 ease-in-out hover:bg-green-500/40"
          id="history-next-btn"
          @click="goForward"
        >
          <i class="ri-arrow-right-s-line text-2xl"></i>
        </button>
      </div>
      <div class="flex font-title">
        <form
          class="relative hidden h-full md:block"
          v-on:submit.prevent="processSearch"
        >
          <input
            type="text"
            name="term"
            v-model="searchTerm"
            placeholder="Veuillez saisir pour rechercher..."
            class="h-full w-80 rounded-full bg-green-500/20 px-4 outline-none duration-300 ease-in-out focus:bg-green-500/40"
          />
          <button
            class="absolute inset-y-0 right-0 pr-4 duration-300 ease-in-out hover:scale-125"
            type="submit"
          >
            <i class="ri-search-line"></i>
          </button>
        </form>
        <div class="align-center flex xl:hidden">
          <!-- Mobile Search Here -->
          <div class="relative">
            <form
              v-on:submit.prevent="processSearch"
              class="search-mobile -z-1 absolute right-0 top-0"
            >
              <input
                placeholder="Veuillez saisir pour rechercher..."
                type="text"
                name=""
                v-model="searchTerm"
                id="mobile-input"
                :class="[
                  'h-[44px] rounded-full bg-green-500/20 outline-none duration-300 ease-in-out focus:bg-green-500/40',
                  { 'focused z-50': isMobileSearchFocused },
                ]"
                @blur="toggleFocus()"
              />
            </form>
            <button
              class="ml-3 aspect-square rounded-full bg-green-500/20 px-3 text-xl"
              @click="toggleFocus()"
              :class="{ hidden: isMobileSearchFocused }"
            >
              <i class="ri-search-line"></i>
            </button>
          </div>
          <button
            class="ml-3 aspect-square rounded-full bg-green-500/20 px-3 text-xl"
            @click="toggleMobileMenu"
          >
            <i class="ri-menu-line"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="hidden gap-3 font-title xl:flex">
      <router-link
        class="grid place-content-center rounded-full bg-black px-5 duration-300 ease-in-out hover:bg-green-500/40"
        id="register-btn"
        to="/register"
      >
        S'inscrire
      </router-link>
      <router-link
        class="grid place-content-center whitespace-nowrap rounded-full bg-white px-5 text-black duration-300 ease-in-out hover:bg-green-500/40 hover:text-white"
        id="login-btn"
        to="/login"
      >
        Se connecter
      </router-link>
    </div>

    <!-- Mobile Drawer -->
  </nav>
</template>

<style scoped>
.logo {
  transition: opacity 0.4s ease-in-out;
}
.closed {
  right: 100%;
}
.search-mobile input {
  width: 0;
  transition: width 0.4s ease-in-out;
}
.search-mobile input.focused {
  width: calc(100vw - 115px);
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>

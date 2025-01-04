<script setup lang="ts">
import Notiflix from 'notiflix';
import { ref } from 'vue';

const quotes = [
  'Je rends grâce à mon Seigneur, le Meilleur Educateur. Qui a parfait mon coeur à travers l’imitation du Prophète, le Modèle par Excellence. Je Lui témoigne ma reconnaissance en dehors de toute ingratitude. Lui qui m’assiste et qui m’a affranchi. Muwahibi',
  "Ne te plains pas tout le temps des épreuves qui t'accablent. Sois courageux et agis de telle sorte que les gens croient que tu ne manques de rien. Kun Katiman",
  'N’abusez pas de ma condition d’homme noir, pour ne pas profiter de moi, car je suis le serviteur éternel du prophète Mohamed (PSL) et chaque génération qui passe aura la certitude que je suis venu pour elle. Diawartu',
  'Sur l’Elu le Plus Pur (Al Muçtafâ), le Meilleur des humains, en l’occurrence Mouhammad, la Prière de CELUI Qui m’a accordé un Don qui perpétue ma fortune. Sur Toi la Prière de DIEU, ô Meilleur Elu ! , accompagnée de Son Salut, ô Toi qui es venu pour la Bonne Guidée du Tronc et des Branches ! (de l’Arbre du Monde) Muxadimaat',
  'Essaie toujours de te cacher toi qui est à la quête du savoir. Ainsi tu t’épargneras les épreuves et les peines. Aie de la détermination ainsi tu dépasseras ta génération. Kun Katiman',
  'Ne consomme pas l’illicite ni le douteux. Consomme plutôt le licite. Consomme du licite si tu veux obéir à Dieu et au Prophète, O pieux! Et quand tu le trouveras, ne le gaspille pas. Car quiconque gaspille le licite sera gaspillé. Munawwir-us- sudûr',
  'Ô la mère du Saint Esprit, Ô la mère de celui par qui les ténèbres sont dissipés. Ton fils ne s’est pas éteint sur la croix, il a été élevé auprès de son Seigneur. Fuzti',
];
const activeQuote = ref(0);

function nextQuote() {
  activeQuote.value = (activeQuote.value + 1) % quotes.length;
}
function previousQuote() {
  activeQuote.value = (activeQuote.value - 1 + quotes.length) % quotes.length;
}
</script>

<template class="p-0">
  <div
    style="background-image: url('/images/background-xassaid.svg')"
    class="grid h-screen place-content-center bg-left-top bg-no-repeat font-title"
  >
    <div
      class="grid min-h-[500px] grid-cols-2 gap-3 overflow-hidden lg:w-[900px]"
    >
      <div
        class="flex flex-col justify-between rounded-md border border-gray-200/30 bg-black/30 p-5 backdrop-blur-sm"
      >
        <router-link class="text-4xl font-bold italic" to="/">
          Xassaid<span class="text-green-500">.</span>
        </router-link>
        <div>
          <h3 class="mb-3 mt-8 text-2xl">Page de connexion</h3>
          <form action="">
            <div>
              <label for="email">E-mail</label><br />
              <input
                type="text"
                name="email"
                autocomplete="email"
                placeholder="cheikh.tidiane@xassaid.com"
                class="mt-1 h-[40px] w-full rounded-sm px-2 text-black outline-none"
              />
            </div>
            <div class="mt-4">
              <label for="password">Mot de passe</label><br />
              <input
                type="password"
                name="password"
                placeholder="••••••••••••••"
                autocomplete="current-password"
                class="mt-1 h-[40px] w-full rounded-sm px-2 text-black outline-none"
              />
            </div>
            <div class="flex justify-end">
              <router-link to="/register" class="my-4 font-body underline"
                >Vous n'avez pas de compte ?</router-link
              >
            </div>
            <button
              class="mt-4 w-full rounded-sm bg-green-500/80 py-2 text-lg"
              type="submit"
            >
              Soumettre
            </button>
            <div class="flex justify-center">
              <span class="my-2 text-2xl">ou</span>
            </div>
            <button
              class="align-center flex w-full justify-center gap-3 rounded-sm bg-white py-2 text-black"
              type="button"
              @click="Notiflix.Notify.warning('Bientôt disponible !')"
            >
              <img src="/images/google.png" alt="Google Logo" width="25" />
              <span class="text-lg">Continuez-vous avec Google</span>
            </button>
          </form>
        </div>
        <div></div>
      </div>
      <div
        class="relative flex flex-col justify-between overflow-hidden rounded-md bg-green-500 px-5 pt-5 font-body"
      >
        <i
          class="ri-double-quotes-r absolute right-10 top-2 scale-150 text-9xl text-white/20"
        ></i>
        <i
          class="ri-double-quotes-l absolute left-16 top-1/2 -translate-x-1/2 scale-150 transform text-9xl text-white/20"
        ></i>
        <div>
          <div class="mb-4 flex gap-2">
            <button
              @click="previousQuote()"
              class="grid aspect-square w-10 place-content-center rounded-full bg-white text-black hover:bg-black hover:text-white"
            >
              <i class="ri-arrow-left-line"></i>
            </button>
            <button
              @click="nextQuote()"
              class="grid aspect-square w-10 place-content-center rounded-full bg-white text-black hover:bg-black hover:text-white"
            >
              <i class="ri-arrow-right-line"></i>
            </button>
          </div>
          <transition name="quote" mode="out-in">
            <p :key="activeQuote">
              <i class="ri-double-quotes-l"></i> {{ quotes[activeQuote] }}
              <i class="ri-double-quotes-r"></i>
            </p>
          </transition>
          <h3 class="mt-4 text-2xl font-bold italic opacity-90">
            Cheikh Ahmadou Bamba Mbacké
          </h3>
        </div>
        <img
          src="/images/no-bg.png"
          alt="Cheikh Ahmadou Bamba"
          class="scale-150"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.quote-enter-active,
.quote-leave-active {
  transition: opacity 0.5s;
}
.quote-enter,
.quote-leave-to {
  opacity: 0;
}
</style>

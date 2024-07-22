<script setup lang="ts">
import { ref } from "vue";

const quotes = [
  "Je rends grâce à mon Seigneur, le Meilleur Educateur. Qui a parfait mon coeur à travers l’imitation du Prophète, le Modèle par Excellence. Je Lui témoigne ma reconnaissance en dehors de toute ingratitude. Lui qui m’assiste et qui m’a affranchi. Muwahibi",
  "Ne te plains pas tout le temps des épreuves qui t'accablent. Sois courageux et agis de telle sorte que les gens croient que tu ne manques de rien. Kun Katiman",
  "N’abusez pas de ma condition d’homme noir, pour ne pas profiter de moi, car je suis le serviteur éternel du prophète Mohamed (PSL) et chaque génération qui passe aura la certitude que je suis venu pour elle. Diawartu",
  "Sur l’Elu le Plus Pur (Al Muçtafâ), le Meilleur des humains, en l’occurrence Mouhammad, la Prière de CELUI Qui m’a accordé un Don qui perpétue ma fortune. Sur Toi la Prière de DIEU, ô Meilleur Elu ! , accompagnée de Son Salut, ô Toi qui es venu pour la Bonne Guidée du Tronc et des Branches ! (de l’Arbre du Monde) Muxadimaat",
  "Essaie toujours de te cacher toi qui est à la quête du savoir. Ainsi tu t’épargneras les épreuves et les peines. Aie de la détermination ainsi tu dépasseras ta génération. Kun Katiman",
  "Ne consomme pas l’illicite ni le douteux. Consomme plutôt le licite. Consomme du licite si tu veux obéir à Dieu et au Prophète, O pieux! Et quand tu le trouveras, ne le gaspille pas. Car quiconque gaspille le licite sera gaspillé. Munawwir-us- sudûr",
  "Ô la mère du Saint Esprit, Ô la mère de celui par qui les ténèbres sont dissipés. Ton fils ne s’est pas éteint sur la croix, il a été élevé auprès de son Seigneur. Fuzti",
];
const activeQuote = ref(0);

// function nextQuote() {
//   if (activeQuote.value == quotes.length) return (activeQuote.value = 0);
//   activeQuote.value += 1;
// }
// function previousQuote() {
//   if (activeQuote.value == 0) return;
//   activeQuote.value -= 1;
// }
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
    class="h-screen bg-no-repeat bg-left-top grid place-content-center font-title"
  >
    <div
      class="grid grid-cols-2 gap-3 lg:w-[900px] min-h-[500px] overflow-hidden"
    >
      <div
        class="p-5 flex flex-col justify-between bg-black/30 backdrop-blur-sm rounded-md"
      >
        <h1 class="text-4xl font-bold italic">
          Xassaid<span class="text-green-500">.</span>
        </h1>
        <div>
          <h3 class="mt-5 mb-3 text-2xl">Page de connexion</h3>
          <div>
            <label for="email">E-mail</label><br />
            <input
              type="text"
              name="email"
              placeholder="cheikh.tidiane@xassaid.com"
              class="w-full rounded-sm px-2 mt-1 outline-none text-black h-[40px]"
            />
          </div>
          <div class="mt-4">
            <label for="password">Mot de passe</label><br />
            <input
              type="password"
              name="password"
              placeholder="***************"
              class="w-full rounded-sm px-2 mt-1 outline-none text-black h-[40px]"
            />
          </div>
          <div class="flex justify-end">
            <router-link to="/register" class="my-4 underline font-body"
              >Mot de passe oublié ?</router-link
            >
          </div>
          <button class="bg-green-500/80 text-lg py-3 mt-4 w-full rounded-sm">
            Soumettre
          </button>
          <div class="flex justify-center">
            <span class="my-2 text-2xl">ou</span>
          </div>
          <button class="bg-white text-lg text-black py-3 w-full rounded-sm">
            Login with Google
          </button>
        </div>
        <div></div>
      </div>
      <div
        class="bg-green-500 px-5 pt-5 font-body relative rounded-md flex flex-col justify-between overflow-hidden"
      >
        <i
          class="ri-double-quotes-r absolute top-5 right-10 text-9xl scale-150 text-white/20"
        ></i>
        <div>
          <div class="flex gap-2 mb-4">
            <button
              @click="previousQuote()"
              class="bg-white text-black w-10 aspect-square grid place-content-center rounded-full"
            >
              <i class="ri-arrow-left-line"></i>
            </button>
            <button
              @click="nextQuote()"
              class="bg-white text-black w-10 aspect-square grid place-content-center rounded-full"
            >
              <i class="ri-arrow-right-line"></i>
            </button>
          </div>
          <transition name="quote" mode="out-in">
            <p :key="activeQuote">{{ quotes[activeQuote] }}</p>
          </transition>
          <h3 class="font-bold text-2xl mt-4 opacity-90">
            "Cheikh Ahmadou Bamba Mbacké"
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

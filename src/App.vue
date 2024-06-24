<script setup lang="ts">
import Aside from "./components/Common/Aside.vue";
import Header from "./components/Common/Header.vue";
import Controls from "./components/Common/Controls.vue";
import Notiflix from "notiflix";

Notiflix.Notify.init({
  width: "300px",
  position: "right-bottom",
  closeButton: false,
});
</script>

<template>
  <div class="grid grid-cols-12 gap-3">
    <div class="hidden col-span-2 xl:flex flex-col gap-3 lg:h-screen-minus-20">
      <Aside />
    </div>
    <div class="col-span-12 xl:col-span-10 h-screen-minus-20">
      <div
        class="bg-zinc-900 border border-gray-200/20 h-full rounded-md overflow-scroll"
      >
        <Header />
        <router-view></router-view>
        <Controls />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

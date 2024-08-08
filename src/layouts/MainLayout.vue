<script setup lang="ts">
import Aside from '../components/Common/Aside.vue';
import Header from '../components/Common/Header.vue';
import AudioControls from '../components/Common/AudioControls.vue';
</script>

<template>
  <div class="grid grid-cols-12 gap-3 p-2">
    <div class="lg:h-screen-minus-20 col-span-2 hidden flex-col gap-3 xl:flex">
      <Aside />
    </div>
    <div class="h-screen-minus-20 col-span-12 xl:col-span-10">
      <div
        class="h-full overflow-scroll rounded-md border border-gray-200/20 bg-zinc-900"
      >
        <Header />
        <router-view></router-view>
        <!-- <Controls /> -->
        <AudioControls />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

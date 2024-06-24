<script setup lang="ts">
defineProps<{ index: number }>();
</script>
<template>
  <div
    class="ease-in-out duration-300 group px-4 py-2 border border-gray-200/20 bg-black flex align-center justify-between rounded-lg"
  >
    <div class="flex w-full">
      <div class="w-11 xl:w-14">
        <div class="xl:group-hover:hidden">
          <span class="text-3xl lg:text-4xl font-title italic"
            >{{ index + 1 }}.</span
          >
        </div>
        <router-link
          to="/durus/sindidi"
          class="hidden xl:group-hover:flex bg-green-500/50 w-10 h-10 items-center justify-center rounded-full hover:bg-green-500 duration-300 ease-in-out hover:scale-110 mt-1 text-xl"
          id="play-pause-btn"
        >
          <i class="ri-book-3-line"></i>
        </router-link>
      </div>
      <p style="line-height: 0px">
        <span class="text-xl font-title">Jazboul Quloob</span><br />
        <span class="text-sm text-gray-500 font-body"
          >Cheikh Ahmadou Bamba Mbacké</span
        >
      </p>
      <div class="xl:hidden flex-grow flex justify-end">
        <router-link
          to="/durus/sindidi"
          class="flex bg-green-500/25 w-12 h-12 items-center justify-center rounded-full text-2xl ml-1"
          id="play-pause-btn"
        >
          <i class="ri-book-3-line"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

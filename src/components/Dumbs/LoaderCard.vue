<script setup lang="ts">
import LoadingSpinner from './LoadingSpinner.vue';
</script>
<template>
  <div
    role="status"
    class="flex aspect-square animate-pulse items-center justify-center rounded-lg border border-gray-200/20 bg-gray-300 dark:bg-green-500/30"
  >
    <LoadingSpinner />
  </div>
</template>

<style scoped></style>

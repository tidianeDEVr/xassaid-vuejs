<script lang="ts" setup>
defineProps<{ badge: string }>();
</script>
<template>
  <router-link
    class="mr-2 cursor-pointer text-nowrap rounded-full bg-green-500/40 px-3 py-1 text-xs font-medium capitalize text-white"
    :to="'/audios/' + badge"
    >{{ badge.split('-').join(' ') }}</router-link
  >
</template>

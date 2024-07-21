<script setup lang="ts">
import Notiflix from "notiflix";

Notiflix.Notify.init({
  width: "300px",
  position: "right-bottom",
  closeButton: false,
});
</script>

<template>
  <router-view></router-view>
</template>

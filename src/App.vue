<script setup lang="ts">
import Notiflix from 'notiflix';
import PWAPopup from './components/Common/PWAPopup.vue';

Notiflix.Report.init({
  backgroundColor: '#18181B',
  failure: {
    titleColor: '#ffffff',
    messageColor: '#ffffff',
  },
});
</script>

<template>
  <main>
    <PWAPopup />
    <router-view></router-view>
  </main>
</template>

<style scoped>
main {
  max-width: 1700px;
  margin: 0 auto;
}
</style>

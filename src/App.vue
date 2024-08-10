<script setup lang="ts">
import Notiflix from 'notiflix';
import PWAPopup from './components/Common/PWAPopup.vue';

Notiflix.Notify.init({
  width: '300px',
  position: 'right-bottom',
  closeButton: false,
});

Notiflix.Report.init({
  backgroundColor: '#18181B',
  failure: {
    titleColor: '#ffffff',
    messageColor: '#ffffff',
  },
});
</script>

<template>
  <PWAPopup />
  <router-view></router-view>
</template>

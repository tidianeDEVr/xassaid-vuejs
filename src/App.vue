<script setup lang="ts">
import Notiflix from 'notiflix';

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
  <router-view></router-view>
</template>

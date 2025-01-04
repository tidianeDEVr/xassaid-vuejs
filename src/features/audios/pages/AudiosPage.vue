<script setup lang="ts">
import AudioTile from '../components/AudioTile.vue';
import AudioService from '../../../services/AudioService';
import EmptyContent from '../../../components/Dumbs/EmptyContent.vue';
import { Audio } from '../../../utils/interfaces';
import { onMounted, onUnmounted, ref } from 'vue';
import { TYPES } from '../../../utils/constants';
import AudioBadge from '../components/AudioBadge.vue';
import LoadingSpinner from '../../../components/Dumbs/LoadingSpinner.vue';

let badges = TYPES;
let audios = ref<Audio[]>([]);
let currentPage = ref(1);
let isEnd = ref(false);
let isInitialized = false;
let isLoading = ref(true);

initialize();

function initialize() {
  AudioService.getAudiopage(currentPage.value)
    .then((res) => {
      if (res && res.audios) audios.value = res.audios;
    })
    .finally(() => {
      isInitialized = true;
      isLoading.value = false;
    });
}

function loadMore() {
  currentPage.value += 1;
  AudioService.getAudiopage(currentPage.value)
    .then((res) => {
      if (res.audios && res.audios.length == 0) isEnd.value = true;
      audios.value = audios.value.concat(res.audios);
    })
    .finally(() => {
      isInitialized = true;
    });
}

const target = ref<HTMLElement | null>(null);

const callback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && isInitialized) {
      loadMore();
    }
  });
};

const observer = new IntersectionObserver(callback, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
});

onMounted(() => {
  if (target.value) observer.observe(target.value);
});

onUnmounted(() => {
  if (target.value) observer.unobserve(target.value);
});
</script>

<template>
  <div class="bg-gradient-to-b from-zinc-100/5 to-zinc-100/0 p-4">
    <h1 class="font-title text-xl font-bold lg:text-3xl">Audios</h1>
    <div class="no-scrollbar mt-2 flex overflow-scroll">
      <AudioBadge :badge v-for="badge in badges" />
    </div>

    <div v-if="!isLoading">
      <div
        class="mt-4 grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4"
        v-if="audios.length > 0"
      >
        <AudioTile v-for="(audio, index) of audios" :index :audio />
      </div>
      <div v-else>
        <EmptyContent />
      </div>
    </div>

    <!-- Load More -->
    <div
      v-if="!isEnd"
      class="align-center mt-8 flex justify-center p-4"
      ref="target"
    >
      <LoadingSpinner />
    </div>
    <div class="pt-5 text-center font-title text-2xl" v-else>
      Fin de liste !
    </div>
  </div>
</template>

<style scoped></style>

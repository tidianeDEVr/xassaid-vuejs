<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { TYPES } from '../../../utils/constants';
import { Audio, AudioCategory } from '../../../utils/interfaces';
import AudioService from '../../../services/AudioService';
import AudioBadge from '../components/AudioBadge.vue';
import AudioTile from '../components/AudioTile.vue';
import EmptyContent from '../../../components/Dumbs/EmptyContent.vue';
import LoadingSpinner from '../../../components/Dumbs/LoadingSpinner.vue';

const route = useRoute();
let badges = TYPES;
let slug = route.params.slug as string;
let category = ref<AudioCategory>();
let audios = ref<Audio[]>([]);
let isLoading = ref(true);

function initialize() {
  AudioService.getAudiosByCategory(slug)
    .then((res) => {
      if (res && res.category) category.value = res.category;
      if (res && res.audios) audios.value = res.audios;
    })
    .finally(() => {
      isLoading.value = false;
    });
}
initialize();
</script>

<template>
  <div class="bg-gradient-to-b from-zinc-100/5 to-zinc-100/0 p-4">
    <h1 class="font-title text-xl font-bold lg:text-2xl">
      {{ category?.title.split('-').join(' ') }}
    </h1>
    <div class="no-scrollbar mt-2 flex overflow-scroll">
      <AudioBadge :badge v-for="badge in badges" />
    </div>

    <div v-if="isLoading" class="align-center mt-8 flex justify-center p-4">
      <LoadingSpinner />
    </div>
    <div v-else>
      <div
        class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4"
        v-if="audios.length > 0"
      >
        <AudioTile v-for="(audio, index) of audios" :index :audio />
      </div>
      <div v-else>
        <EmptyContent />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

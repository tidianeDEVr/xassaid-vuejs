<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import { AudioCategory } from '../../utils/interfaces';
import { TYPES } from '../../utils/constants';
import AudioService from '../../services/AudioService';
import CategoryCard from '../../components/Audios/CategoryCard.vue';
import EmptyContent from '../../components/Dumbs/EmptyContent.vue';
import AudioBadge from '../../components/Audios/AudioBadge.vue';

const route = useRoute();
let badges = TYPES;
let slug = route.params.category as string;
let categories = ref<AudioCategory[]>([]);

watch(() => route.params.category, initialize);

function initialize() {
  slug = route.params.category as string;
  AudioService.getAudiosByType(slug).then((res) => {
    if (res && res.categories) categories.value = res.categories;
  });
}

initialize();
</script>
<template>
  <div class="bg-gradient-to-b from-zinc-100/5 to-zinc-100/0 p-4">
    <h1 class="font-title text-2xl font-bold capitalize lg:text-3xl">
      {{ slug.split('-').join(' ') }}
    </h1>
    <div class="no-scrollbar mt-2 flex overflow-scroll">
      <AudioBadge :badge v-for="badge in badges" />
    </div>

    <div
      class="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6"
      v-if="categories.length > 0"
    >
      <CategoryCard v-for="category of categories" :category />
    </div>
    <div v-else>
      <EmptyContent />
    </div>
  </div>
</template>

<script scoped></script>

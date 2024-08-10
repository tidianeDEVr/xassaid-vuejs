<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import { AudioCategory } from '../../utils/interfaces';
import { TYPES } from '../../utils/constants';
import AudioService from '../../services/AudioService';
import CategoryCard from '../../components/Audios/CategoryCard.vue';
import EmptyContent from '../../components/Dumbs/EmptyContent.vue';

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
      {{ slug }}
    </h1>
    <div class="no-scrollbar mt-2 flex overflow-scroll">
      <router-link
        class="mr-2 cursor-pointer text-nowrap rounded-full bg-green-500/40 px-3 py-1 text-xs font-medium capitalize text-white"
        :to="'/audios/' + badge"
        v-for="badge of badges"
        >{{ badge }}</router-link
      >
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

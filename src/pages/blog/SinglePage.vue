<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
let slug = route.params.slug;
</script>
<template>
  <div class="p-4 bg-gradient-to-b from-zinc-100/5 to-zinc-100/0">
    <h1 class="text-xl lg:text-2xl font-title font-bold">{{ slug }}</h1>
    <p class="mt-2 font-body">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio dolor
      aliquid minima id ratione eligendi voluptatibus corrupti modi animi
      quisquam consequuntur fuga tenetur maiores quibusdam, dolore magni iste,
      laboriosam voluptas. Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Optio dolor aliquid minima id ratione eligendi voluptatibus corrupti
      modi animi quisquam consequuntur fuga tenetur maiores quibusdam, dolore
      magni iste, laboriosam voluptas. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Optio dolor aliquid minima id ratione eligendi
      voluptatibus corrupti modi animi quisquam consequuntur fuga tenetur
      maiores quibusdam, dolore magni iste, laboriosam voluptas. Lorem ipsum
      dolor, sit amet consectetur adipisicing elit. Optio dolor aliquid minima
      id ratione eligendi voluptatibus corrupti modi animi quisquam consequuntur
      fuga tenetur maiores quibusdam, dolore magni iste, laboriosam voluptas.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio dolor
      aliquid minima id ratione eligendi voluptatibus corrupti modi animi
      quisquam consequuntur fuga tenetur maiores quibusdam, dolore magni iste,
      laboriosam voluptas. Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Optio dolor aliquid minima id ratione eligendi voluptatibus corrupti
      modi animi quisquam consequuntur fuga tenetur maiores quibusdam, dolore
      magni iste, laboriosam voluptas. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Optio dolor aliquid minima id ratione eligendi
      voluptatibus corrupti modi animi quisquam consequuntur fuga tenetur
      maiores quibusdam, dolore magni iste, laboriosam voluptas. Lorem ipsum
      dolor, sit amet consectetur adipisicing elit. Optio dolor aliquid minima
      id ratione eligendi voluptatibus corrupti modi animi quisquam consequuntur
      fuga tenetur maiores quibusdam, dolore magni iste, laboriosam voluptas.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio dolor
      aliquid minima id ratione eligendi voluptatibus corrupti modi animi
      quisquam consequuntur fuga tenetur maiores quibusdam, dolore magni iste,
      laboriosam voluptas.
    </p>
  </div>
</template>

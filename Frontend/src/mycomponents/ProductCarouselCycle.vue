<script setup lang="ts">
import { ref } from "vue";

// 技工装置画像（最大3枚。最低限でも1枚表示）
const items = ref([
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
  },
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Hide Controls -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card color="gray darken-4" theme="dark">
    <v-card-title>技工装置画像</v-card-title>
    <v-carousel height="360" :show-arrows="true">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
  </v-card>
</template>

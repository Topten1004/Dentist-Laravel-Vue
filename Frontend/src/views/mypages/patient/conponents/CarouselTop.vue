<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  {
    src: "https://smile24.org/src/assets/images/top/d1.jpg",
  },
  {
    src: "https://smile24.org/src/assets/images/top/d2.jpg",
  },
  {
    src: "https://smile24.org/src/assets/images/top/d3.jpg",
  },
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Carousel Top Paitient-->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card rounded="0">
    
    <v-carousel
      height="auto"
      cycle
      hide-delimiter-background
      show-arrows="hover"
      delimiter-icon="mdi-minus"
    >
    
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
      >
      <!-- ローディング用
        <v-progress-circular
        indeterminate
        color="red"
      >
      </v-progress-circular> -->

      </v-carousel-item>
      
    </v-carousel>
  
  </v-card>
</template>

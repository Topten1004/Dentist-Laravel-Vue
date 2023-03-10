<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Care Image  aspectRatio 1/1 -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card color="gray darken-4" theme="dark" elevation="4">
    <v-card-title>今回の治療における患者さんの口腔内画像</v-card-title>
      <v-img
          class="bg-white"
          :aspect-ratio="1"
          src="https://smile24.org/src/assets/images/care/care360xy.jpg"
          cover
        ></v-img>
        <!-- 画像がない場合
          <v-img
          class="bg-white"
          :aspect-ratio="1"
          src="@/assets/images/products/nophoto.jpg"
          cover
        ></v-img>
       -->
  </v-card>

</template>


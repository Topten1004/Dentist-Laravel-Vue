<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Product Image  aspectRatio 1/1 -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card color="gray darken-4" theme="dark" elevation="4">
    <v-card-title>今回の治療の為に製作した技工装置画像</v-card-title>
      <!-- この表示はサイズに問題あり。
        <img src="@/assets/images/products/product1_360xy.jpg"
        class="bg-white"
        :aspect-ratio="1"
        cover /> 
      -->
      <v-img
          class="bg-white"
          :aspect-ratio="1"
          src="https://smile24.org/src/assets/images/products/product1_360xy.jpg"
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


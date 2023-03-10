<template>
  <v-card>
    <v-card-text>
      <h3 class="text-h6 title font-weight-medium">Browser Stats</h3>
      <div
        class="d-flex align-center pb-1 mt-5"
        v-for="(item, i) in bdata"
        :key="i"
      >
        <div>
          <img :src="`/assets/images/browser/${item.images}`" alt="logo" />
        </div>
        <div class="mx-2">{{ item.name }}</div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <v-chip class="ma-2" small label :color="item.color">{{
            item.visit
          }}</v-chip>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const bdata = ref([
  {
    images: "chrome-logo.png",
    name: "Google Chrome",
    visit: "25%",
    color: "primary",
  },
  {
    images: "firefox-logo.png",
    name: "Mozila Firefox",
    visit: "25%",
    color: "secondary",
  },
  {
    images: "safari-logo.png",
    name: "Apple Safari",
    visit: "25%",
    color: "warning",
  },
  {
    images: "internet-logo.png",
    name: "Internet Explorer",
    visit: "25%",
    color: "error",
  },
  {
    images: "opera-logo.png",
    name: "Opera mini",
    visit: "25%",
    color: "info",
  },
  {
    images: "internet-logo.png",
    name: "Microsoft edge",
    visit: "25%",
    color: "success",
  },
  {
    images: "firefox-logo.png",
    name: "Mozila Firefox",
    visit: "25%",
    color: "secondary",
  },
]);
</script>

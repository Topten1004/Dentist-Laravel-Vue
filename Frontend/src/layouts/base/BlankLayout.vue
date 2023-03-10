<template>
  <v-app :theme="customizer.darktheme ? 'dark' : 'light'">
    <RouterView />
  </v-app>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import { useCustomizerStore } from "@/stores2/customizer";
const customizer = useCustomizerStore();
</script>

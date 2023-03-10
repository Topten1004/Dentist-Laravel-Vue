<script setup lang="ts">

import TitleImageHygienist from "@/assets/images/bg/title7.jpg"

const props = defineProps({
  titleheader: String,
  title: String,
  subtitle: String,
  btnname: String,
  url: String,
});
  </script>

<template>
  <div>
    <v-toolbar
      dark
      prominent
      :image="TitleImageHygienist"
      height="120"
    >
      <v-toolbar-title>
        {{ titleheader }}
        <h2 class="pa-1 t_white">{{ title }}</h2>
        <h5 class="font-weight-light ml-4 mb-0 no-ellipsis">{{ subtitle }}</h5>
      </v-toolbar-title>
        <v-btn
          color="red"
          rounded
          variant="flat"
          :to="url">
          {{ btnname }}
        </v-btn>
      </v-toolbar>
  </div>
</template>

<style>
  .v-toolbar-title, .v-app-bar-nav-icon { color: #FFFFFF;}
  .t_white {color: #FFFFFF;}
</style>
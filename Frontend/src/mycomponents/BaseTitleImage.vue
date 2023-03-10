<script setup lang="ts">
  const props = defineProps({
    title: String,
    btnname: String,
    url: String,
  });
  </script>

<template>
  <div>
    <v-toolbar
      dark
      prominent
      image="https://smile24.org/src/assets/images/bg/titlebg3.jpg"
      height="120"
    >
      <v-toolbar-title>
        笑顔創造職人
        <h2 class="pa-1 t_white">{{ title }}</h2>
      </v-toolbar-title>

      <v-btn size="large"
        color="white"
        rounded
        variant="outlined"
        to={{ url }}
      >{{ btnname }}@@@</v-btn>

    </v-toolbar>
  </div>
</template>

<style>
  .v-toolbar-title, .v-app-bar-nav-icon { color: #FFFFFF;}
  .t_white {color: #FFFFFF;}
</style>
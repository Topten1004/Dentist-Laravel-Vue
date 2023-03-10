<script setup lang="ts">
const props = defineProps({
  heading: String,
});
</script>

<template>
  <v-card elevation="2">
    <v-toolbar color="secondary darken-2"
      image="https://smile24.org/src/assets/images/bg/titlebg5.jpg"
      class="rounded-md rounded-b-0">
      <v-toolbar-title class="font-weight-medium">
        {{ heading }}
      </v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
    </v-toolbar>
    <v-divider></v-divider>
    <div class="">
      <slot />
    </div>
  </v-card>
</template>
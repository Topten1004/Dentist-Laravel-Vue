<script setup lang="ts">
const props = defineProps({
  heading: String,
});
</script>

<template>
  <v-card>
    <v-toolbar color="secondary darken-2"
      image="https://smile24.org/src/assets/images/bg/titlebg8.jpg">
      <v-toolbar-title class="font-weight-medium">
        {{ heading }}
      </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <v-divider></v-divider>
    <div class="pa-4">
      <slot />
    </div>
  </v-card>
</template>
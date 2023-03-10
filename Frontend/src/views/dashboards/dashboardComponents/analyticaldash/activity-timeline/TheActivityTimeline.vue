<template>
  <v-card>
    <v-tabs v-model="tab" fixed-tabs color="primary">
      <v-tab value="one">Activity</v-tab>
      <v-tab value="two">Profile</v-tab>
      <v-tab value="three">Settings</v-tab>
    </v-tabs>
    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <TimelineView />
        </v-window-item>

        <v-window-item value="two"> Two </v-window-item>

        <v-window-item value="three"> Three </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TimelineView from "./TimelineView.vue";
const tab = ref(null);
</script>

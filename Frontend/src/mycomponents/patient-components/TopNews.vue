<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Media -->
  <!-- ----------------------------------------------------------------------------- -->

  <v-card elevation="2">
    
    <div class="bg-error pa-4">
        <h2 class="">患者マイページ</h2>
        <h4 class="font-weight-light">Check Your Dental History !</h4>
    </div>

    <v-card-subtitle class="text-h5 pt-4"> 患者さんへのお知らせ </v-card-subtitle>

    <v-card-text>
      <div class="text-18">
      患者さんへのお知らせ　patient-components/TopNews.vue 
      お知らせお知らせお知らせお知らせお知らせお知らせお知らせお知らせ
      </div>
      <div class="text-18">
      患者さんへのお知らせ　patient-components/TopNews.vue 
      お知らせお知らせお知らせお知らせお知らせお知らせお知らせお知らせ
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" to="/patient/egaocoin"> 笑顔コイン </v-btn>
      <v-btn color="orange" to="/patient/tsuraicoin"> つら〜いコインについて </v-btn>
    </v-card-actions>
  </v-card>
</template>

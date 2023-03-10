<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Media -->
  <!-- ----------------------------------------------------------------------------- -->

  <v-card>
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
      <v-card-title>マイページ（歯科技工士）</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4"> ここにお知らせ </v-card-subtitle>

    <v-card-text>
      <div>Whitehaven Beach</div>

      <div>お知らせお知らせお知らせお知らせお知らせお知らせお知らせお知らせ</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" to="/mypages/artisan/egaocoin"> 笑顔コイン </v-btn>
      <v-btn color="orange" to="/mypages/artisan/tsuraicoin"> つら〜いコイン登録 </v-btn>
    </v-card-actions>
  </v-card>
</template>

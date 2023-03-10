<script setup lang="ts">
const props = defineProps({
  heading: String,
});
</script>

<template>
  <v-card elevation="2">
    <v-toolbar color="secondary darken-2"
      image="https://smile24.org/src/assets/images/bg/titlebg8.jpg">
      <v-toolbar-title class="font-weight-medium v-toolbar_overflow">
        {{ heading }}
      </v-toolbar-title>

      <!-- <v-spacer></v-spacer> -->
    </v-toolbar>
    <v-divider></v-divider>
    <div class="py-4">
      <slot />
    </div>
  </v-card>
</template>

<!-- ellipsis を無効化できないか？　又は、タイトルバーの横幅１/２ 固定を変更できないか？
<style>
div.v-toolbar-title__placeholder { text-overflow: unset;}
</style> 
-->
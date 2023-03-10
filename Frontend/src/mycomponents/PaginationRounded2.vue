<script setup lang="ts">
import { ref } from "vue";
const page = ref(1);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Rounded -->
  <!-- ----------------------------------------------------------------------------- -->
   <div class="text-center my-6">
    <v-pagination
      v-model="page"
      :length="4"
      rounded="circle"
      color="info"
    ></v-pagination>
  </div>
</template>


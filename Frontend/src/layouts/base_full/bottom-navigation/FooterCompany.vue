<script setup lang="ts">
import { ref } from "vue";

const links = ref([
{ title: 'Top',  url: '/'},
{ title: '患者',  url: '/patient'},
{ title: '歯科医師',  url: '/dentist'},
{ title: '歯科技工士',  url: '/artisan'},
{ title: '歯科衛生士',  url: '/hygienist'},
{ title: '歯科医療機関',  url: '/clinic'},
{ title: '歯科技工所',  url: '/labo'},
{ title: '学会・団体',  url: '/society'},
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Company -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-footer class="bg-blue-grey-darken-4 py-8">
        <v-row justify="center" no-gutters>
          <v-btn
            v-for="link in links"
            :key="link.title"
            :to="link.url"
            color="white"
            variant="text"
            class="mx-2"
            rounded="xl"
          >
            {{ link.title }}
          </v-btn>
          <v-col class="text-center text-white mt-4" cols="12">
            {{ new Date().getFullYear() }}.  © CS24 Co,.Ltd. All Rights Reserved.
          </v-col>
        </v-row>
      </v-footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Stats from "./Stats.vue";
import CallToAction from "./CallToAction.vue";
import Feature1 from "./Feature1.vue";
import Feature2 from "./Feature2.vue";
import Faq from "./Faq.vue";
import Partners from "./Partners.vue";
import TopImageEgao from "./TopImageEgao.vue";
const page = ref({ title: "笑顔コイン　Top" });
</script>

<template>
  <TopImageEgao />
  <Partners />
  <Stats />
    <v-divider></v-divider>
  <Feature2 />
  <Feature1 />
    <v-divider></v-divider>
  <Faq class="mb-14" />
  <CallToAction class="mb-14" />

<!-- YouTube TEST 
<yt-video videoId="jAH3MEsh3aU" :width="640" :height="480" />
-->

</template>
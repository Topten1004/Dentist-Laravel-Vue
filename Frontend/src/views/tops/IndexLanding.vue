<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Stats from "./Stats.vue";
import CallToAction from "./CallToAction.vue";
import Feature1 from "./Feature1.vue";
import Feature2 from "./Feature2.vue";
import Faq from "./Faq.vue";
import Partners from "./Partners.vue";
import Pricing from "./Pricing.vue";
import Pricing2 from "./Pricing2.vue";
import TopImageComment from "./TopImageComment.vue";
import YtVideo from "./YtVideo.vue";
import TopImageEgao2 from "./TopImageEgao2.vue";
const page = ref({ title: "Landing Top" });
</script>

<template>

  <TopImageComment />
  <Partners />
  <Stats />
    <v-divider></v-divider>
  <Feature2 />
  <TopImageEgao2 />
  <Feature1 />
    <v-spacer></v-spacer>
  <Pricing />
    <v-divider></v-divider>
  <Pricing2 class="mb-14" />
    <v-divider></v-divider>
  <Faq class="mb-14" />
  <CallToAction class="mb-14" />

<!-- YouTube TEST 
<yt-video videoId="jAH3MEsh3aU" :width="640" :height="480" />
-->


</template>
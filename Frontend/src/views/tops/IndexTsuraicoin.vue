<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Stats from "./Stats.vue";
import CallToAction from "./CallToAction.vue";
import Feature1 from "./Feature1.vue";
import Feature2 from "./Feature2.vue";
import Faq from "./Faq.vue";
import Partners from "./Partners.vue";
import TopImageTsuraicoin from "./TopImageTsuraicoin.vue";
import DiscriptionTsuraiCoin from "@/views/mypages/common/DiscriptionTsuraiCoin.vue"

const page = ref({ title: "つら〜いコイン　Top" });
</script>

<template>
  <TopImageTsuraicoin></TopImageTsuraicoin>
  <Partners />
  <Stats />
    <v-divider></v-divider>
  <Feature2 />
  <Feature1 />
    <v-divider></v-divider>
  <Faq class="mb-14" />
  <CallToAction class="mb-14" />

</template>
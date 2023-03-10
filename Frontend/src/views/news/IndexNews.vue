<script setup lang="ts">
import { ref } from "vue";

import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCardNews from "./BaseCardNews.vue";
import TheRevenueOpenCards from "@/mycomponents/TheRevenueOpenCards.vue";
import SideBannerCard from "@/mycomponents/SideBannerCard.vue";

const page = ref({ title: "News Index Page" });
const breadcrumbs = ref([
  {
    text: "Home",
    disabled: false,
    to: "/",
  },
  {
    text: "News Index Page",
    disabled: false,
    to: "/news",
  },
]);
</script>

<template>
  <v-container>
  <div class="hidden-md-and-down">
    <BaseBreadcrumb
      :title="page.title"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
  </div>

  <v-row>

    <v-col cols="12" sm="12" lg="12" class="mt-3 hidden-md-and-down">
      <TheRevenueOpenCards />
    </v-col>

    <v-col cols="12" lg="8" class="d-flex align-items-stretch mb-4">
      <BaseCardNews heading="1. お知らせ">
        <div>
          あああああ　お知らせ<br><br><br><br>
        あああああ
        </div>
      </BaseCardNews>
    </v-col>
    <v-col cols="12" lg="4" class="mb-4">
        <SideBannerCard />
    </v-col>

  </v-row>
  </v-container>
</template>

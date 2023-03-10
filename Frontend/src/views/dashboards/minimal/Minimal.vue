<script setup lang="ts">
import { ref } from "vue";

import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BlogCard from "@/views/dashboards/dashboardComponents/minimaldash/blog-card/BlogCard.vue";
import WeeklyStats from "@/views/dashboards/dashboardComponents/minimaldash/weekly-stats/WeeklyStats.vue";
import MedicalProBranding from "@/views/dashboards/dashboardComponents/minimaldash/medicalpro-branding/MedicalProBranding.vue";
import TheEarningCard from "../dashboardComponents/minimaldash/earning-card/TheEarningCard.vue";
import TheBrowserStats from "../dashboardComponents/minimaldash/browser-stats/TheBrowserStats.vue";
import TheTotalRevenue from "../dashboardComponents/minimaldash/total-revenue/TheTotalRevenue.vue";
import TheSalesPrediction from "../dashboardComponents/minimaldash/sales-prediction/TheSalesPrediction.vue";
import TheSalesDifference from "../dashboardComponents/minimaldash/sales-difference/TheSalesDifference.vue";
import MapCustom from "../dashboardComponents/classic/map/MapCustom.vue";

const page = ref({ title: "Minimal" });
const breadcrumbs = ref([
  {
    text: "Dashboard",
    disabled: false,
    href: "#",
  },
  {
    text: "Minimal",
    disabled: true,
    href: "#",
  },
]);
</script>

<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" lg="12">
      <TheEarningCard />
    </v-col>
    <v-col cols="12" lg="8">
      <MapCustom />
    </v-col>
    <v-col cols="12" lg="4">
      <TheBrowserStats />
    </v-col>
    <v-col cols="12" lg="8">
      <TheTotalRevenue />
    </v-col>
    <v-col cols="12" lg="4">
      <TheSalesPrediction />
      <div class="mb-7"></div>
      <TheSalesDifference />
    </v-col>
    <v-col cols="12" lg="4">
      <BlogCard />
    </v-col>
    <v-col cols="12" lg="4">
      <WeeklyStats />
    </v-col>
    <v-col cols="12" lg="4">
      <MedicalProBranding />
    </v-col>
  </v-row>
</template>

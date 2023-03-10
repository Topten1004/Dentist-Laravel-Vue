<script setup lang="ts">
import { ref } from "vue";

import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import TheSalesOverview from "@/views/dashboards/dashboardComponents/analyticaldash/sales-overview/TheSalesOverview.vue";
import TotalSales from "@/views/dashboards/dashboardComponents/analyticaldash/total-sales/TotalSales.vue";
import Blog from "../dashboardComponents/analyticaldash/blog/Blog.vue";
import Newsletter from "../dashboardComponents/analyticaldash/newsletter/Newsletter.vue";
import TheBandwidthUsage from "../dashboardComponents/analyticaldash/bandwidth-usage/TheBandwidthUsage.vue";
import TheDownloadCount from "../dashboardComponents/analyticaldash/download-count/TheDownloadCount.vue";
import TheWeatherCardVue from "../dashboardComponents/analyticaldash/weather-card/TheWeatherCard.vue";
import TheProfileCard from "../dashboardComponents/analyticaldash/profile-card/TheProfileCard.vue";
import TheMyContacts from "../dashboardComponents/analyticaldash/my-contacts/TheMyContacts.vue";
import TheActivityTimeline from "../dashboardComponents/analyticaldash/activity-timeline/TheActivityTimeline.vue";

const page = ref({ title: "Analytical" });
const breadcrumbs = ref([
  {
    text: "Dashboard",
    disabled: false,
    href: "#",
  },
  {
    text: "Analytical",
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
    <v-col cols="12" sm="12" lg="8"> <TheSalesOverview /> </v-col>
    <v-col cols="12" sm="12" lg="4"><TotalSales /></v-col>

    <v-col cols="12" sm="12" lg="4">
      <Blog />
    </v-col>
    <v-col cols="12" sm="12" lg="8">
      <Newsletter />
    </v-col>

    <v-col cols="12" sm="12" lg="4">
      <TheBandwidthUsage />
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <TheDownloadCount />
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <TheWeatherCardVue />
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <TheProfileCard />
      <div class="mt-7"></div>
      <TheMyContacts />
    </v-col>
    <v-col cols="12" sm="12" lg="8">
      <TheActivityTimeline />
    </v-col>
  </v-row>
</template>

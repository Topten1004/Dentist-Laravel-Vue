<script setup lang="ts">
import { ref } from "vue";

import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import TheRevenueCards from "../dashboardComponents/classic/revenue-cards/TheRevenueCards.vue";
import TheBandwidthUsage from "../dashboardComponents/analyticaldash/bandwidth-usage/TheBandwidthUsage.vue";
import TheDownloadCount from "../dashboardComponents/analyticaldash/download-count/TheDownloadCount.vue";
import TotalVisitors from "@/views/dashboards/dashboardComponents/classic/visitors/TotalVisitors.vue";
import Blog from "../dashboardComponents/analyticaldash/blog/Blog.vue";
import Newsletter from "../dashboardComponents/analyticaldash/newsletter/Newsletter.vue";
import TheMonthTable from "../dashboardComponents/classic/month-table/TheMonthTable.vue";
import TheProfileCard from "../dashboardComponents/analyticaldash/profile-card/TheProfileCard.vue";
import TheRecentComments from "../dashboardComponents/classic/recent-comments/TheRecentComments.vue";
import TheTodoList from "../dashboardComponents/classic/todo-list/TheTodoList.vue";
import MapCustom from "../dashboardComponents/classic/map/MapCustom.vue";

const page = ref({ title: "Classic" });
const breadcrumbs = ref([
  {
    text: "Dashboard",
    disabled: false,
    href: "#",
  },
  {
    text: "Classic",
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
    <v-col cols="12" sm="12" lg="12" class="mt-3"> <TheRevenueCards /> </v-col>
    <v-col cols="12" sm="12" lg="4">
      <TheBandwidthUsage />
      <div class="mt-7"></div>
      <TheDownloadCount />
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <TotalVisitors />
    </v-col>
    <v-col cols="12" sm="12" lg="4"><MapCustom /></v-col>
    <v-col cols="12" sm="12" lg="4">
      <Blog />
    </v-col>
    <v-col cols="12" sm="12" lg="8"><Newsletter /></v-col>
    <v-col cols="12" sm="12" lg="8">
      <TheMonthTable />
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <TheProfileCard />
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <TheRecentComments />
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <TheTodoList />
    </v-col>
  </v-row>
</template>

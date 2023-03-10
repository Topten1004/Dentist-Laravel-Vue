<script setup lang="ts">
import { ref } from "vue";

import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import TheMonthTable from "../dashboardComponents/classic/month-table/TheMonthTable.vue";
import TheProfileCard from "../dashboardComponents/analyticaldash/profile-card/TheProfileCard.vue";
import Newsletter from "../dashboardComponents/demographicaldash/newsletter/Newsletter.vue";
import TheSalesOverview from "../dashboardComponents/demographicaldash/sales-overview/TheSalesOverview.vue";
import ThePieCards from "../dashboardComponents/demographicaldash/pie-cards/ThePieCards.vue";
import TheBandwidthUsage from "../dashboardComponents/analyticaldash/bandwidth-usage/TheBandwidthUsage.vue";
import TheDownloadCount from "../dashboardComponents/analyticaldash/download-count/TheDownloadCount.vue";
import TheMyContacts from "../dashboardComponents/demographicaldash/my-contacts/TheMyContacts.vue";
import Feeds from "../dashboardComponents/demographicaldash/feeds/Feeds.vue";
import TheRecentComments from "../dashboardComponents/classic/recent-comments/TheRecentComments.vue";
import TheTodoList from "../dashboardComponents/classic/todo-list/TheTodoList.vue";
import MapCustom from "../dashboardComponents/classic/map/MapCustom.vue";

const page = ref({ title: "Demographical" });
const breadcrumbs = ref([
  {
    text: "Dashboard",
    disabled: false,
    href: "#",
  },
  {
    text: "Demographical",
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
    <v-col col="12" sm="12" lg="12"><ThePieCards /></v-col>
    <v-col cols="12" sm="12" lg="4">
      <TheSalesOverview />
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <Newsletter />
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <MapCustom />
    </v-col>
    <v-col cols="12" sm="12" lg="8">
      <TheMonthTable />
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <TheProfileCard />
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <TheBandwidthUsage />
      <div class="mt-7"></div>
      <TheDownloadCount />
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <TheMyContacts />
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <Feeds />
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <TheRecentComments />
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <TheTodoList />
    </v-col>
  </v-row>
</template>

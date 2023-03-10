<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";

import CongratulationCard from "@/views/dashboards/dashboardComponents/modern/congratulation-card/CongratulationCard.vue";
import Purchases from "@/views/dashboards/dashboardComponents/modern/purchases/Purchases.vue";
import TotalEarnings from "@/views/dashboards/dashboardComponents/modern/total-earnings/TotalEarnings.vue";
import RevenueUpdates from "@/views/dashboards/dashboardComponents/modern/revenue-updates/RevenueUpdates.vue";
import MonthlyEarnings from "@/views/dashboards/dashboardComponents/modern/monthly-earnings/MonthlyEarnings.vue";
import Customers from "@/views/dashboards/dashboardComponents/modern/customers/Customers.vue";
import TotalSales from "@/views/dashboards/dashboardComponents/modern/total-sales/TotalSales.vue";
import ProductPerformance from "@/views/dashboards/dashboardComponents/modern/product-performance/ProductPerformance.vue";
import BlogCard from "@/views/dashboards/dashboardComponents/modern/blog-card/BlogCard.vue";
import WeeklyStats from "@/views/dashboards/dashboardComponents/modern/weekly-stats/WeeklyStats.vue";
import MedicalProBranding from "@/views/dashboards/dashboardComponents/ecommerce/medicalpro-branding/MedicalProBranding.vue";
import TheProfileCard from "../dashboardComponents/analyticaldash/profile-card/TheProfileCard.vue";
import TheMyContacts from "../dashboardComponents/analyticaldash/my-contacts/TheMyContacts.vue";
import TheActivityTimeline from "../dashboardComponents/analyticaldash/activity-timeline/TheActivityTimeline.vue";

const page = ref({ title: "Modern" });
const breadcrumbs = ref([
  {
    text: "Dashboard",
    disabled: false,
    href: "#",
  },
  {
    text: "Modern",
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
    <v-col cols="12" sm="12" lg="5">
      <CongratulationCard />
    </v-col>
    <v-col cols="12" sm="12" lg="7">
      <v-row>
        <v-col lg="5">
          <Purchases />
        </v-col>
        <v-col lg="7">
          <TotalEarnings />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="12" lg="8">
      <RevenueUpdates />
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <MonthlyEarnings />
      <Customers />
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <TotalSales />
    </v-col>
    <v-col cols="12" sm="12" lg="8">
      <ProductPerformance />
    </v-col>

    <v-col cols="12" sm="12" lg="4">
      <TheProfileCard />
      <div class="mt-7"></div>
      <TheMyContacts />
    </v-col>
    <v-col cols="12" sm="12" lg="8">
      <TheActivityTimeline />
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

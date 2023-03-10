<template>
  <v-card>
    <v-card-text class="pa-5">
      <div class="d-md-flex align-center">
        <div>
          <h2 class="text-h6 title font-weight-medium">Total Revenue</h2>
          <h5 class="subtitle">Checkout Earnings</h5>
        </div>
      </div>
      <apexchart
        class="mt-6"
        type="bar"
        height="270px"
        :options="RevenueChart.chartOptions"
        :series="RevenueChart.series"
      ></apexchart>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { RevenueChart } from "./TotalRevenueData";
</script>

<template>
  <v-card>
    <v-card-text class="pa-5">
      <h3 class="title">Sales Difference</h3>
      <v-row class="mt-3">
        <v-col cols="6">
          <span class="display-3 title">$4316</span>
          <h6 class="subtitle-2 mt-2">10% Increased</h6>
          <h5 class="subtitle-1">(150-165 Sales)</h5>
        </v-col>
        <v-col cols="6" class="d-flex">
          <div class="ml-auto mb-9" style="height: 80px">
            <apexchart
              type="donut"
              width="130"
              :options="differenceChart.chartOptions"
              :series="differenceChart.series"
            ></apexchart>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { differenceChart } from "./SalesDifferenceData";
</script>

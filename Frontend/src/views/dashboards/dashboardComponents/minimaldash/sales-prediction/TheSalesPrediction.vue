<template>
  <v-card>
    <v-card-text class="pa-5">
      <h3 class="title">Sales Prediction</h3>
      <v-row class="mt-3">
        <v-col cols="6">
          <span class="display-3 title">$3528</span>
          <h6 class="subtitle-2 font-weight-regular mt-2">10% Increased</h6>
          <h5 class="subtitle-1 text-no-wrap">(150-165 Sales)</h5>
        </v-col>
        <v-col cols="6">
          <div class="ml-auto" style="height: 70px; width: 150px">
            <apexchart
              height="200px"
              width="150px"
              :options="predictionChart.chartOptions"
              :series="predictionChart.series"
            ></apexchart>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { predictionChart } from "./SalesPredictionData";
</script>

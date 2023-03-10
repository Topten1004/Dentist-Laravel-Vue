<template>
  <v-row>
    <v-col cols="12" lg="4">
      <v-card class="overflow-visible">
        <div class="pa-5">
          <h4 class="title">Product A Sales</h4>
          <div class="d-flex align-center mt-2">
            <div class="border-right pr-4 py-2">
              <h6
                class="font-weight-light body-2 blue-grey--text text--lighten-2 font-weight-regular"
              >
                Monthly
              </h6>
              <span class="font-weight-medium">80.40%</span>
            </div>
            <div class="px-3 py-2">
              <h6
                class="font-weight-light blue-grey--text text--lighten-2 font-weight-regular body-2"
              >
                Daily
              </h6>
              <span class="font-weight-medium">20.40%</span>
            </div>
          </div>
        </div>

        <apexchart
          type="area"
          height="50px"
          :options="SalesChartA.chartOptions"
          :series="SalesChartA.series"
        ></apexchart>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4">
      <v-card class="overflow-visible">
        <div class="pa-5">
          <h4 class="title">Product B Sales</h4>
          <div class="d-flex align-center mt-2">
            <div class="border-right pr-4 py-2">
              <h6
                class="font-weight-light body-2 blue-grey--text text--lighten-2 font-weight-regular"
              >
                Monthly
              </h6>
              <span class="font-weight-medium">80.40%</span>
            </div>
            <div class="px-3 py-2">
              <h6
                class="font-weight-light blue-grey--text text--lighten-2 font-weight-regular body-2"
              >
                Daily
              </h6>
              <span class="font-weight-medium">20.40%</span>
            </div>
          </div>
        </div>

        <apexchart
          type="area"
          height="50px"
          :options="SalesChartB.chartOptions"
          :series="SalesChartB.series"
        ></apexchart>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4">
      <v-card class="overflow-visible">
        <div class="pa-5">
          <h4 class="title">Product C Sales</h4>
          <div class="d-flex align-center mt-2">
            <div class="border-right pr-4 py-2">
              <h6
                class="font-weight-light body-2 blue-grey--text text--lighten-2 font-weight-regular"
              >
                Monthly
              </h6>
              <span class="font-weight-medium">80.40%</span>
            </div>
            <div class="px-3 py-2">
              <h6
                class="font-weight-light blue-grey--text text--lighten-2 font-weight-regular body-2"
              >
                Daily
              </h6>
              <span class="font-weight-medium">20.40%</span>
            </div>
          </div>
        </div>

        <apexchart
          type="area"
          height="50px"
          :options="SalesChartC.chartOptions"
          :series="SalesChartC.series"
        ></apexchart>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { SalesChartA, SalesChartB, SalesChartC } from "./SalesCardsData";
</script>

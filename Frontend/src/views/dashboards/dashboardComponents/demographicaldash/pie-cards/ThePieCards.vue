<template>
  <v-row>
    <!-- First Card -->
    <v-col cols="12" sm="6" lg="3">
      <v-card>
        <v-card-text>
          <v-row class="d-flex align-center">
            <v-col cols="6">
              <h2 class="title">324</h2>
              <h5
                class="subtitle-2 text-no-wrap blue-grey--text text--lighten-2 font-weight-regular"
              >
                New Clients
              </h5>
            </v-col>
            <v-col cols="6" class="pa-0">
              <div class="d-flex justify-end pt-3">
                <apexchart
                  type="donut"
                  width="80"
                  :options="searchChart.chartOptions"
                  :series="searchChart.series"
                ></apexchart>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- Second Card -->
    <v-col cols="12" sm="6" lg="3">
      <v-card>
        <v-card-text>
          <v-row class="d-flex align-center">
            <v-col cols="6">
              <h2 class="title">2376</h2>
              <h5
                class="subtitle-2 text-no-wrap blue-grey--text text--lighten-2 font-weight-regular"
              >
                Total Visits
              </h5>
            </v-col>
            <v-col cols="6" class="pa-0">
              <div class="d-flex justify-end pt-3">
                <apexchart
                  type="donut"
                  width="80"
                  :options="referralChart.chartOptions"
                  :series="referralChart.series"
                ></apexchart>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- Third Card -->
    <v-col cols="12" sm="6" lg="3">
      <v-card>
        <v-card-text>
          <v-row class="d-flex align-center">
            <v-col cols="6">
              <h2 class="title">1795</h2>
              <h5
                class="subtitle-2 text-no-wrap blue-grey--text text--lighten-2 font-weight-regular"
              >
                New Leads
              </h5>
            </v-col>
            <v-col cols="6" class="pa-0">
              <div class="d-flex justify-end pt-3">
                <apexchart
                  type="donut"
                  width="80"
                  :options="socialChart.chartOptions"
                  :series="socialChart.series"
                ></apexchart>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- Fourth Card -->
    <v-col cols="12" sm="6" lg="3">
      <v-card>
        <v-card-text>
          <v-row class="d-flex align-center">
            <v-col cols="6">
              <h2 class="title">36870</h2>
              <h5
                class="subtitle-2 text-no-wrap blue-grey--text text--lighten-2 font-weight-regular"
              >
                Page Views
              </h5>
            </v-col>
            <v-col cols="6" class="pa-0">
              <div class="d-flex justify-end pt-3">
                <apexchart
                  type="donut"
                  width="80"
                  :options="directChart.chartOptions"
                  :series="directChart.series"
                ></apexchart>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import {
  directChart,
  socialChart,
  referralChart,
  searchChart,
} from "./PieCardsData";
</script>

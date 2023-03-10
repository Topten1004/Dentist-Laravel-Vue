<template>
  <v-row>
    <v-col cols="12" sm="12" lg="3">
      <v-card class="text-center">
        <v-card-text class="pa-5">
          <h3 class="font-weight-regular">Unique Visit</h3>
          <div class="mt-3">
            <div style="width: 90px; margin: 0 auto">
              <apexchart
                type="bar"
                height="65px"
                :options="SparkA.chartOptions"
                :series="SparkA.series"
              ></apexchart>
            </div>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <div class="pa-2 text-center">
          <h4 class="mb-0 title">
            <i class="ti-angle-up success--text"></i> 12456
          </h4>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" lg="3">
      <v-card class="text-center">
        <v-card-text class="pa-5">
          <h3 class="font-weight-regular">Total Visit</h3>
          <div class="mt-3">
            <div style="width: 90px; margin: 0 auto">
              <apexchart
                type="bar"
                height="65px"
                :options="SparkB.chartOptions"
                :series="SparkB.series"
              ></apexchart>
            </div>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <div class="pa-2 text-center">
          <h4 class="mb-0 title">
            <i class="ti-angle-up success--text"></i> 456
          </h4>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" lg="3">
      <v-card class="text-center">
        <v-card-text class="pa-5">
          <h3 class="font-weight-regular">Bounce rate</h3>
          <div class="mt-3">
            <div style="width: 90px; margin: 0 auto">
              <apexchart
                type="bar"
                height="65px"
                :options="SparkC.chartOptions"
                :series="SparkC.series"
              ></apexchart>
            </div>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <div class="pa-2 text-center">
          <h4 class="mb-0 title">
            <i class="ti-angle-up success--text"></i> 12456
          </h4>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" lg="3">
      <v-card class="text-center">
        <v-card-text class="pa-5">
          <h3 class="font-weight-regular">Page Views</h3>
          <div class="mt-3">
            <div style="width: 90px; margin: 0 auto">
              <apexchart
                type="bar"
                height="65px"
                :options="SparkD.chartOptions"
                :series="SparkD.series"
              ></apexchart>
            </div>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <div class="pa-2 text-center">
          <h4 class="mb-0 title">
            <i class="ti-angle-up success--text"></i> 456
          </h4>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { SparkA, SparkB, SparkC, SparkD } from "./EarningCardData";
</script>

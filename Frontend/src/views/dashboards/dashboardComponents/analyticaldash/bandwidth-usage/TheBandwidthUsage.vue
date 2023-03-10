<script setup lang="ts">
import { ref, onMounted } from "vue";
import { BandwidthChart } from "./BandWidthData";

const elementVisible = ref(false);

onMounted(() => {
  setTimeout(() => (elementVisible.value = true), 10);
});
</script>
<template>
  <v-card>
    <v-card-text class="bg-primary">
      <div class="d-flex align-center">
        <v-icon size="30">mdi-chart-donut</v-icon>
        <div class="mx-4">
          <h3 class="font-weight-regular">Bandwidth usage</h3>
          <h5 class="font-weight-regular">March 2021</h5>
        </div>
      </div>
      <v-row class="mt-1">
        <v-col cols="5" class="d-flex align-center">
          <h2 class="font-weight-light white--text text-nowrap">50 GB</h2>
        </v-col>
        <v-col cols="7">
          <div class="float-right" v-show="elementVisible">
            <apexchart
              type="line"
              height="70px"
              width="150px"
              :options="BandwidthChart.chartOptions"
              :series="BandwidthChart.series"
            ></apexchart>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

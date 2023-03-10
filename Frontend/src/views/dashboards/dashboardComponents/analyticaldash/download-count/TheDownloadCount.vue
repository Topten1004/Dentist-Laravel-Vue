<script setup lang="ts">
import { ref, onMounted } from "vue";
import { DownloadChart } from "./DownloadData";

const elementVisible = ref(false);

onMounted(() => {
  setTimeout(() => (elementVisible.value = true), 10);
});
</script>
<template>
  <v-card>
    <v-card-text class="bg-secondary">
      <div class="d-flex align-center">
        <v-icon size="30">mdi-chart-donut</v-icon>
        <div class="mx-4">
          <h3 class="font-weight-regular">Download Count</h3>
          <h5 class="font-weight-regular">March 2021</h5>
        </div>
      </div>
      <v-row class="mt-2">
        <v-col cols="4" class="d-flex align-center">
          <h2 class="font-weight-light white--text text-nowrap">35487</h2>
        </v-col>
        <v-col cols="8">
          <div v-show="elementVisible" class="ml-auto">
            <apexchart
              type="bar"
              height="70px"
              :options="DownloadChart.chartOptions"
              :series="DownloadChart.series"
            ></apexchart>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

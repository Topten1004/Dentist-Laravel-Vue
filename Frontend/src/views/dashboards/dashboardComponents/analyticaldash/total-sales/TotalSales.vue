<script setup lang="ts">
import { ref } from "vue";
import { TotalSales } from "./TotalSalesData";

const select = ref("March");
const items = ref(["March", "April", "May", "June"]);
</script>

<template>
  <!-- ------------------------------------ -->
  <!-- html -->
  <!-- ------------------------------------ -->
  <v-card>
    <v-card-text>
      <div class="mb-5">
        <h2 class="title text-h6 font-weight-medium">Our Visitors</h2>
        <h5 class="subtitle">Different Devices Used to Visit</h5>
      </div>

      <div class="mt-5 pt-5 position-relative">
        <apexchart
          type="donut"
          height="265px"
          :options="TotalSales.chartOptions"
          :series="TotalSales.series"
        ></apexchart>
      </div>
      <div class="d-flex align-center justify-space-between mt-9">
        <div class="d-flex align-center px-2">
          <span class="text-overline">
            <i class="mdi mdi-brightness-1 text-secondary mx-1"></i>
          </span>
          <span class="text-grey-darken-1 font-weight-medium mr-1">Tablet</span>
        </div>
        <div class="d-flex align-center px-2">
          <span class="text-overline">
            <i class="mdi mdi-brightness-1 text-primary mx-1"></i>
          </span>
          <span class="text-grey-darken-1 font-weight-medium mr-1">Mobile</span>
        </div>
        <div class="d-flex align-center px-2">
          <span class="text-overline">
            <i class="mdi mdi-brightness-1 mx-1"></i>
          </span>
          <span class="text-grey-darken-1 font-weight-medium mr-1"
            >Desktop
          </span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.total-sales-icon {
  position: absolute;
  left: 46%;
  top: 45%;
}
</style>

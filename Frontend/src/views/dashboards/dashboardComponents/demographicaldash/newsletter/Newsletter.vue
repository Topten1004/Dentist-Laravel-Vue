<script setup lang="ts">
import { ref, onMounted } from "vue";
import { NewsletterChart } from "./NewsletterData";

const select = ref("March");
const items = ref(["March", "April", "May", "June"]);

const elementVisible = ref(false);

onMounted(() => {
  setTimeout(() => (elementVisible.value = true), 10);
});
</script>

<template>
  <v-card>
    <v-card-text>
      <div class="d-sm-flex align-start">
        <div>
          <h2 class="title text-h6 font-weight-medium">Newsletter Campaign</h2>
          <h5 class="subtitle">Overview of Newsletter Campaign</h5>
        </div>
      </div>
      <div v-show="elementVisible" class="mt-6">
        <apexchart
          height="250px"
          :options="NewsletterChart.chartOptions"
          :series="NewsletterChart.series"
        ></apexchart>
      </div>
    </v-card-text>
  </v-card>
</template>

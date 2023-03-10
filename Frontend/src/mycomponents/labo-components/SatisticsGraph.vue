<script setup lang="ts">
import { ref, onMounted } from "vue";
import { SatisticsGraphChart } from "./SatisticsGraphData";

const select = ref("March");
const items = ref(["March", "April", "May", "June"]);

const elementVisible = ref(false);

onMounted(() => {
  setTimeout(() => (elementVisible.value = true), 10);
});
</script>

<template>
  <v-card elevation="2">
    <v-card-text class="pa-0">
      <div class="bg-primary pa-5">
        <h2 class="">統計データ</h2>
        <h5 class="font-weight-light">医療従事者の日々の努力をチャート化しました。</h5>
      </div>
      <div class="d-sm-flex align-start pa-5">
        <div>
          <h2 class="title text-h6 font-weight-medium">コイン獲得統計</h2>
          <v-divider></v-divider>
          <h5 class="subtitle">所属技工所の笑顔コイン＆つら〜いコイン獲得状況</h5>
        </div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <div class="ml-auto">
            <div class="d-flex align-center">
              <div class="d-flex align-center px-2">
                <span class="text-secondary">
                  <span class="text-overline">
                    <i class="mdi mdi-brightness-1 mx-1"></i>
                  </span>
                  <span class="font-weight-regular">名刺発行枚数</span>
                </span>
              </div>
              <div class="d-flex align-center px-2">
                <span class="text-blue-darken-3">
                  <span class="text-overline">
                    <i class="mdi mdi-brightness-1 mx-1"></i>
                  </span>
                  <span class="font-weight-regular">笑顔コイン</span>
                </span>
              </div>
              
              <div class="d-flex align-center px-2">
                <span class="text-error">
                  <span class="text-overline">
                    <i class="mdi mdi-brightness-1 mx-1"></i>
                  </span>
                  <span class="font-weight-regular">つら〜いコイン</span>
                </span>
              </div>
              <!-- 
              <div class="d-flex align-center px-2">
                <span class="text-orange">
                  <span class="text-overline">
                    <i class="mdi mdi-brightness-1 mx-1"></i>
                  </span>
                  <span class="font-weight-regular">スタッフのつら〜いコイン合計</span>
                </span>
              </div>
              -->
            </div>
          </div>
        </div>
      </div>
      <div v-show="elementVisible" class="mt-6">
        <apexchart
          height="380px"
          :options="SatisticsGraphChart.chartOptions"
          :series="SatisticsGraphChart.series"
        ></apexchart>
      </div>
      <div class="d-flex justify-center mb-8">
        <div class="d-flex align-center text-secondary px-2">
          <span class="text-overline">
            <i class="mdi mdi-brightness-1 mx-1"></i>
          </span>
          <span class="font-weight-regular">笑顔コイン</span>
        </div>
        <div class="d-flex align-center px-2 text-error">
          <span class="text-overline">
            <i class="mdi mdi-brightness-1 mx-1"></i>
          </span>
          <span class="font-weight-regular">つら〜いコイン</span>
        </div>

        <div class="d-flex align-center text-blue-darken-3 px-2">
          <span class="text-overline">
            <i class="mdi mdi-brightness-1 mx-1"></i>
          </span>
          <span class="font-weight-regular">貴方の笑顔コイン</span>
        </div>
        <div class="d-flex align-center text-orange px-2">
          <span class="text-overline">
            <i class="mdi mdi-brightness-1 mx-1"></i>
          </span>
          <span class="font-weight-regular">貴方のつら〜いコイン</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

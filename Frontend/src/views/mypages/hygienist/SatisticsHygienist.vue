<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImageHygienist from "@/mycomponents/BaseTitleImageHygienist.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import TheRevenueCardsHygienist from "@/mycomponents/hygienist-components/TheRevenueCardsHygienist.vue";
import EngineerPerformanceList from "../common/EngineerPerformanceList.vue";
import SatisticsGraph from "@/mycomponents/hygienist-components/SatisticsGraph.vue";
import { useDisplay } from "vuetify";

const page = ref({ title: "統計データ" });
const contents = reactive(
  {
    titleheader: "歯科衛生士",
    subtitle: "Check Your Data !",
    url: "/mypages/hygienist",
    btnname: "マイページ→",
  },
);
const display = useDisplay();
</script>

<template>
  <!-- PC用表示 -->
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageHygienist
      :titleheader="contents.titleheader"
      :title="page.title"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageHygienist>

  <v-row>
    <v-col cols="12" sm="12" lg="12" class="mt-3"
    v-if="display.smAndUp.value">
      <TheRevenueCardsHygienist />
    </v-col>
    <v-col cols="12" sm="12" lg="12">
      <SatisticsGraph />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="elevation">
      <EngineerPerformanceList />
    </v-col>
  </v-row>
</v-container>


<!-- Mobile用表示 -->
<div v-if="display.smAndDown.value">
  <BaseTitleImageHygienist
    :titleheader="contents.titleheader"
    :title="page.title"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname">
  </BaseTitleImageHygienist>

  <v-container>
    <v-row>
      <v-col cols="12" sm="12" lg="12" class="mt-3"
      v-if="display.smAndUp.value"
      >
        <TheRevenueCardsHygienist />
      </v-col>
      <v-col cols="12" sm="12" lg="12">
        <SatisticsGraph />
      </v-col>
      <v-col cols="12" sm="12" lg="12">
        <EngineerPerformanceList />
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import TheRevenueCardsLabo1 from "@/mycomponents/labo-components/TheRevenueCardsLabo1.vue";
import TheRevenueCardsLabo2 from "@/mycomponents/labo-components/TheRevenueCardsLabo2.vue";
import EngineerPerformanceList from "../common/EngineerPerformanceList.vue";
import SatisticsGraph from "@/mycomponents/labo-components/SatisticsGraph.vue";
import { useDisplay } from "vuetify";

const page = ref({ title: "統計データ（::歯科技工所名）" });
const contents = reactive(
  {
    titleheader: "歯科技技工所",
    subtitle: "Check Your Labo Prolile !",
    url: "/",
    btnname: "+笑顔コイン",
  },
);
const breadcrumbs = ref([
  {
    text: "マイページ",
    disabled: false,
    to: "/mypages/labo",
  },
  {
    text: "統計データ（::歯科技工所名）",
    disabled: true,
  },
]);
const display = useDisplay();
</script>

<template>
  <!-- PC用表示 -->
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageLabo
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageLabo>

  <v-row>
    <v-col cols="12" sm="12" lg="12" class="mt-3"
      v-if="display.smAndUp.value">
      <TheRevenueCardsLabo1 />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3"
      v-if="display.smAndUp.value">
      <TheRevenueCardsLabo2 />
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
  <BaseTitleImageLabo
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageLabo>

  <v-container>
  <v-row>
    <v-col cols="12" sm="12" lg="12" class="mt-3"
      v-if="display.smAndUp.value">
      <TheRevenueCardsLabo1 />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3"
      v-if="display.smAndUp.value">
      <TheRevenueCardsLabo2 />
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

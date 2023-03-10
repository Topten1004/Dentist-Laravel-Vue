<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImageClinic from "@/mycomponents/BaseTitleImageClinic.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import TheRevenueCardsClinic1 from "@/mycomponents/clinic-components/TheRevenueCardsClinic1.vue";
import TheRevenueCardsClinic2 from "@/mycomponents/clinic-components/TheRevenueCardsClinic2.vue";
import EngineerPerformanceList from "../common/EngineerPerformanceList.vue";
import SatisticsGraph from "@/mycomponents/clinic-components/SatisticsGraph.vue";
import { useDisplay } from "vuetify";

const page = ref({ title: "統計データ" });
const contents = reactive(
  {
    titleheader: "歯科医療機関",
    subtitle: "Check Your Data !",
    url: "/mypages/clinic/egaocoin",
    btnname: "笑顔コイン",
  },
);

const display = useDisplay();
</script>

<template>
  <!-- PC用表示 -->
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageClinic
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageClinic>

  <v-row>
    <v-col cols="12" sm="12" lg="12" class="mt-3"
      v-if="display.smAndUp.value">
      <TheRevenueCardsClinic1 />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3"
      v-if="display.smAndUp.value">
      <TheRevenueCardsClinic2 />
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
  <BaseTitleImageClinic
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageClinic>

  <v-container>
    <v-row>
      <v-col cols="12" sm="12" lg="12" class="mt-3"
        v-if="display.smAndUp.value">
        <TheRevenueCardsClinic1 />
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-3"
        v-if="display.smAndUp.value">
        <TheRevenueCardsClinic2 />
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

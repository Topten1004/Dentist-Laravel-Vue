<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageTop from "@/mycomponents/BaseTitleImageTop.vue";
import TheRevenueCardsArtisan from "@/mycomponents/artisan-components/TheRevenueCardsArtisan.vue";
import EngineerPerformanceList from "../common/EngineerPerformanceList.vue";
import SatisticsGraph from "@/mycomponents/artisan-components/SatisticsGraph.vue";

const page = ref({ title: "統計データ" });
const contents = reactive(
  {
    titleheader: "歯科技工士",
    subtitle: "Check Statistical Data !",
    url: "/egaocoin",
    btnname: "笑顔コイン",
  },
);
const breadcrumbs = ref([
  {
    text: "マイページ",
    disabled: false,
    to: "/mypages/artisan",
  },
  {
    text: "登録フォーム",
    disabled: false,
    to: "/mypages/artisan/registdetail",
  },
  {
    text: "統計データ（::歯科技工士名）",
    disabled: true,
  },
]);
const display = useDisplay();
</script>

<template>
  <!-- PC用表示 -->
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageTop
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageTop>

  <v-row>
    <v-col cols="12" sm="12" lg="12" class="mt-3"
      v-if="display.smAndUp.value">
      <TheRevenueCardsArtisan />
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
    <BaseTitleImageTop
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageTop>

    <v-container>
      <v-row>
        <v-col cols="12" sm="12" lg="12" class="mt-3"
        v-if="display.smAndUp.value"
        >
          <TheRevenueCardsArtisan />
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

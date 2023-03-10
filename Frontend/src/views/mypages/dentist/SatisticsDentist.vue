<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageDentist from "@/mycomponents/BaseTitleImageDentist.vue";
import TheRevenueCardsDentist from "@/mycomponents/dentist-components/TheRevenueCardsDentist.vue";
import EngineerPerformanceList from "@/views/mypages/common/EngineerPerformanceList.vue";
import SatisticsGraph from "@/mycomponents/dentist-components/SatisticsGraph.vue";

const display = useDisplay();
const page = ref({ title: "統計データ" });
const contents = reactive(
  {
    titleheader: "歯科医師",
    subtitle: "Check Your Dtata !",
    url: "/mypages/dentist",
    btnname: "マイページ→",
  },
);

</script>

<template>
  <!-- PC用表示 -->
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageDentist
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageDentist>

  <v-row>
    <v-col cols="12" sm="12" lg="12" class="mt-3"
    v-if="display.smAndUp.value">
      <TheRevenueCardsDentist />
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
  <BaseTitleImageDentist
    :title="page.title"
    :titleheader="contents.titleheader"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname">
  </BaseTitleImageDentist>

  <v-container>
    <v-row>
      <v-col cols="12" sm="12" lg="12" class="mt-3"
      v-if="display.smAndUp.value">
        <TheRevenueCardsDentist />
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

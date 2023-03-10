<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageDentist from "@/mycomponents/BaseTitleImageDentist.vue";
import TheRevenueCardsDentist from "@/mycomponents/dentist-components/TheRevenueCardsDentist.vue";
import TheProfileEngineerCard from "@/mycomponents/TheProfileEngineerCard.vue";
import TopNewsDentist from "@/mycomponents/dentist-components/TopNewsDentist.vue"
import SideBannerCard from "@/mycomponents/SideBannerCard.vue";
import EngineerList from "@/mycomponents/dentist-components/EngineerList.vue"
import SatisticsGraph from "@/mycomponents/dentist-components/SatisticsGraph.vue";

const page = ref({ title: "マイページ（個人）" });
const contents = reactive(
  {
    titleheader: "歯科医師",
    subtitle: "Check Your works !",
    url: "/mypages/dentist/egaocoin",
    btnname: "笑顔コイン",
  },
);
const display = useDisplay();
</script>

<template>
  <!--      -->
  <!-- PC用 -->
  <!--      -->
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
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <TheRevenueCardsDentist />
    </v-col>
    <v-col cols="12" sm="12" lg="9">
      <TopNewsDentist elevation="1" class="mb-4" />
      <SatisticsGraph />
    </v-col>
    <v-col cols="12" sm="12" lg="3">
      <TheProfileEngineerCard class="mb-4"/>
      <SideBannerCard />
    </v-col>
    <v-col cols="12" sm="12" lg="12">
      <EngineerList />
    </v-col>
  </v-row>
</v-container>

<!--          -->
<!-- Mobile用 -->
<!--          -->
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
    <v-col cols="12" sm="12" lg="9">
      <TheProfileEngineerCard class="mb-4"/>
      <TopNewsDentist elevation="1" class="mb-4" />
      <SatisticsGraph />
    </v-col>
    <v-col cols="12" sm="12" lg="12">
      <EngineerList />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <TheRevenueCardsDentist />
    </v-col>
    <v-col cols="12" sm="12" lg="3">
      <SideBannerCard />
    </v-col>
  </v-row>
</v-container>
</div>

</template>

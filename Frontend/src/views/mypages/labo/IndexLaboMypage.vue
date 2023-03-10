<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";
import TheRevenueCardsLabo1 from "@/mycomponents/labo-components/TheRevenueCardsLabo1.vue";
import TheRevenueCardsLabo2 from "@/mycomponents/labo-components/TheRevenueCardsLabo2.vue";
import TheProfileEngineerCard from "@/mycomponents/TheProfileEngineerCard.vue";
import TopNewsLabo from "@/mycomponents/labo-components/TopNewsLabo.vue"
import BaseBreadcrumb2 from "@/mycomponents/BaseBreadcrumb2.vue";
import SideBannerCard from "@/mycomponents/SideBannerCard.vue";
import EngineerList from "@/mycomponents/artisan-components/EngineerList.vue"
import SatisticsGraph from "@/mycomponents/labo-components/SatisticsGraph.vue";
import PaymentAlert from "../common/PaymentAlert.vue";

const page = ref({ title: "マイページ（歯科技工所 管理者専用）" });
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
    text: "Top",
    disabled: false,
    to: "/",
  },
  {
    text: "マイページ（歯科技工所　管理者専用）",
    disabled: false,
    to: "/mypages/labo",
  },
]);
const display = useDisplay();
</script>

<template>
  <!-- PC用 -->
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
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <TheRevenueCardsLabo1 />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <TheRevenueCardsLabo2 />
    </v-col>
    <v-col cols="12" sm="12" lg="9">
      <TopNewsLabo elevation="1" class="mb-4" />
      <SatisticsGraph />
    </v-col>
    <v-col cols="12" sm="12" lg="3">
      <PaymentAlert />
      <TheProfileEngineerCard class="mb-4"/>
      <SideBannerCard />
    </v-col>
    <v-col cols="12" sm="12" lg="12">
      <EngineerList />
    </v-col>
  </v-row>
</v-container>

  <!-- Mobile用 -->
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
    <v-col cols="12" sm="12" lg="9">
      <TopNewsLabo elevation="1" class="mb-4" />
      <SatisticsGraph />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <TheRevenueCardsLabo1 />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <TheRevenueCardsLabo2 />
    </v-col>
    <v-col cols="12" sm="12" lg="3">
      <PaymentAlert />
      <TheProfileEngineerCard class="mb-4"/>
      <SideBannerCard />
    </v-col>
    <v-col cols="12" sm="12" lg="12">
      <EngineerList />
    </v-col>
  </v-row>
</v-container>
</div>

</template>


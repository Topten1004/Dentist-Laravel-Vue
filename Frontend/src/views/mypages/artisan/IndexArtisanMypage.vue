<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageTop from "@/mycomponents/BaseTitleImageTop.vue";
import TheRevenueCardsArtisan from "@/mycomponents/artisan-components/TheRevenueCardsArtisan.vue";
import TheProfileEngineerCard from "@/mycomponents/TheProfileEngineerCard.vue";
import TopNewsArtisan from "@/mycomponents/artisan-components/TopNewsArtisan.vue"
import BaseBreadcrumb2 from "@/mycomponents/BaseBreadcrumb2.vue";
import SideBannerCard from "@/mycomponents/SideBannerCard.vue";
import EngineerList from "@/mycomponents/artisan-components/EngineerList.vue"
import SatisticsGraph from "@/mycomponents/artisan-components/SatisticsGraph.vue";

const page = ref({ title: "マイページ" });
const contents = reactive(
  {
    titleheader: "歯科技工士",
    subtitle: "Check Your Co-workers !",
    url: "/mypages/artisan/profile",
    btnname: "MyProfile",
  },
);
const breadcrumbs = ref([
  {
    text: "マイページ",
    disabled: false,
    to: "/mypages/artisan",
  },
  {
    text: "Top（歯科技工士）",
    disabled: true,
  },
]);
const display = useDisplay();
</script>

<template>
<!--          -->
<!--   PC用   -->
<!--          -->
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
    <v-col cols="12" sm="12" lg="12" class="mt-4">
      <TheRevenueCardsArtisan />
    </v-col>
    <v-col cols="12" sm="12" lg="9">
      <TopNewsArtisan elevation="1" class="mb-4" />
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

      <BaseTitleImageTop
        :title="page.title"
        :titleheader="contents.titleheader"
        :subtitle="contents.subtitle"
        :url="contents.url"
        :btnname="contents.btnname">
      </BaseTitleImageTop>

    <v-container>
      <v-row>
        <v-col cols="12" sm="12" lg="9">
          <TopNewsArtisan elevation="1" class="mb-4" />
          <SatisticsGraph />
        </v-col>
        <v-col cols="12" sm="12" lg="3">
          <TheProfileEngineerCard class="mb-4"/>
          <SideBannerCard />
        </v-col>
        <v-col cols="12" sm="12" lg="12" class="mt-3">
            <TheRevenueCardsArtisan />
        </v-col>
        <v-col cols="12" sm="12" lg="12">
          <EngineerList />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

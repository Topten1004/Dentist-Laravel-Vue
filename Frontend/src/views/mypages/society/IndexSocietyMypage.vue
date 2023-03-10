<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageSociety from "@/mycomponents/BaseTitleImageSociety.vue";
import TheRevenueCardsSociety from "@/mycomponents/society-components/TheRevenueCardsSociety.vue";
import TheProfileEngineerCard from "@/mycomponents/TheProfileEngineerCard.vue";
import TopNewsSociety from "@/mycomponents/society-components/TopNewsSociety.vue"
import SideBannerCard from "@/mycomponents/SideBannerCard.vue";
import EngineerList from "@/mycomponents/society-components/EngineerList.vue"
import LoginAlart2 from "../common/LoginAlart2.vue";

const page = ref({ title: "マイページ" });
const contents = reactive(
  {
    titleheader: "学会 団体 管理者",
    subtitle: "Check Your Members !",
    url: "/mypages/society/",
    btnname: "マイページ",
  },
);
const display = useDisplay();
</script>

<template>

  <!--      -->
  <!-- PC用 -->
  <!--      -->
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageSociety
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageSociety>

  <v-row>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <TheRevenueCardsSociety />
    </v-col>
    <v-col cols="12" sm="12" lg="8">
      <TopNewsSociety elevation="1" class="mb-4" />
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <LoginAlart2 />
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
    <BaseTitleImageSociety
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageSociety>

  <v-container>
    <v-row>
      <v-col cols="12" sm="12" class="mt-3">
        <TheRevenueCardsSociety />
      </v-col>
      <v-col cols="12" sm="12">
        <TopNewsSociety elevation="1" class="mb-4" />
      </v-col>
      <v-col cols="12" sm="12">
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

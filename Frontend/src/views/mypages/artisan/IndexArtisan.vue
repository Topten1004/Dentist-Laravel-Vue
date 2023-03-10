<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import TheRevenueOpenCards from "@/mycomponents/TheRevenueOpenCards.vue";
import NewsAlertClosable from "@/mycomponents/NewsAlertClosable.vue";
import InviteCard from "@/views/mypages/common/InviteCard.vue";
import SideBannerCard from "@/mycomponents/SideBannerCard.vue";
import BaseTitleImageTop from "@/mycomponents/BaseTitleImageTop.vue";

const display = useDisplay();
const page = ref({ title: "Index Page" });
const contents = reactive(
  {
    titleheader: "歯科技工士",
    subtitle: "Check Your works !",
    url: "/login",
    btnname: "ログイン",
  },
);
const breadcrumbs = ref([
  {
    text: "Home",
    disabled: false,
    to: "/",
  },
  {
    text: "歯科技工士 Index Page",
    disabled: false,
    to: "/artisan",
  },
]);
</script>

<template>
<!-- PC用表示 -->
<v-container v-if="display.mdAndUp.value">
  <div class="mb-4">
    <BaseTitleImageTop
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageTop>
  </div>

  <v-row>
    <v-col cols="12" sm="12" lg="9">
      <NewsAlertClosable class="mb-8"/>
    </v-col>
    <v-col cols="12" sm="12" lg="3">
      <InviteCard class="mb-4" elevation="2" />
      <SideBannerCard />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <TheRevenueOpenCards />
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

  <v-container class="ma-0" fluid>
  <v-row>
    <v-col cols="12" sm="12" lg="9">
      <NewsAlertClosable class=""/>
    </v-col>
    <v-col cols="12" sm="12" lg="3">
      <InviteCard class="mb-4" elevation="2" />
      <SideBannerCard />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
        <TheRevenueOpenCards />
    </v-col>
  </v-row>
  </v-container>
</div>
</template>

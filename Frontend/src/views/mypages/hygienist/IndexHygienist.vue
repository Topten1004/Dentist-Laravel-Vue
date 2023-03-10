<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageHygienist from "@/mycomponents/BaseTitleImageHygienist.vue";
import TheRevenueOpenCards from "@/mycomponents/TheRevenueOpenCards.vue";
import NewsAlertClosable from "@/mycomponents/NewsAlertClosable.vue";
import InviteCard from "@/views/mypages/common/InviteCard.vue";
import SideBannerCard from "@/mycomponents/SideBannerCard.vue";

const page = ref({ title: "IndexPage (未ログイン)" });
const contents = reactive(
  {
    titleheader: "歯科衛生士",
    subtitle: "Check Your Hygienist !",
    url: "/mypages/hygienist/egaocoin",
    btnname: "笑顔コイン",
  },
);
const display = useDisplay();
</script>

<template>
<!--          -->
<!--  PC用    -->
<!--          -->
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
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <TheRevenueOpenCards />
    </v-col>
    <v-col cols="12" sm="12" lg="9">
      <NewsAlertClosable class="mb-8"/>
    </v-col>
    <v-col cols="12" sm="12" lg="3">
      <InviteCard class="mb-4" elevation="2" />
      <SideBannerCard />
    </v-col>
  </v-row>
  </v-container>

<!--          -->
<!-- Mobile用 -->
<!--          -->
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
      <v-col cols="12" sm="12" lg="12" class="">
        <TheRevenueOpenCards />
      </v-col>
      <v-col cols="12" sm="12" lg="9">
        <NewsAlertClosable class="mb-4"/>
      </v-col>
      <v-col cols="12" sm="12" lg="3">
        <InviteCard class="mb-4" elevation="2" />
        <SideBannerCard />
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImageSociety from "@/mycomponents/BaseTitleImageSociety.vue";
import TheRevenueCardsSociety from "@/mycomponents/society-components/TheRevenueCardsSociety.vue";
import DiscriptionEgaoCoin from "@/views/mypages/common/DiscriptionEgaoCoin.vue"
import NewsAlertClosable from "@/mycomponents/NewsAlertClosable.vue";
import SideBannerCard from "@/mycomponents/SideBannerCard.vue";
import LoginAlart from "../common/LoginAlart.vue";

import { useDisplay } from "vuetify";
const display = useDisplay();
const page = ref({ title: "IndexPage(未ログイン)" });
const contents = reactive(
  {
    titleheader: "学会 団体",
    subtitle: "Check Your Members !",
    url: "/login",
    btnname: "ログイン",
  },
);
</script>

<template>
<v-container>
  <BaseTitleImageSociety
    :title="page.title"
    :titleheader="contents.titleheader"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname"
    class="mb-4">
  </BaseTitleImageSociety>

  <v-row>
    <v-col cols="12" sm="12" lg="12" class="mt-3"
    v-if="display.smAndUp.value">
      <TheRevenueCardsSociety />
    </v-col>
    <v-col cols="12" sm="12" lg="8">
        <NewsAlertClosable />
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <LoginAlart />
      <SideBannerCard />
    </v-col>
    <v-col cols="12" sm="12" lg="12">
      <DiscriptionEgaoCoin usertype="society" />
    </v-col>
  </v-row>
</v-container>
</template>

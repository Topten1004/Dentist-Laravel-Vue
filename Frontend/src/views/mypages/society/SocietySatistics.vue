<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImageSociety from "@/mycomponents/BaseTitleImageSociety.vue";

import TheRevenueCards from "@/mycomponents/TheRevenueCards.vue";

import NewsAlertClosable from "@/mycomponents/NewsAlertClosable.vue";

import { useDisplay } from "vuetify";

const page = ref({ title: "統計データ" });
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
    <v-col cols="12" sm="12" lg="12" class="mt-3" >
      <TheRevenueCards />
    </v-col>
    <v-col cols="12" sm="12" lg="9">
        <NewsAlertClosable />
    </v-col>
  </v-row>
</v-container>
</template>

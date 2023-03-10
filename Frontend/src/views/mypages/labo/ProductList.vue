<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";
import GridProductsList from "@/mycomponents/GridProductsList.vue";
import BaseBreadcrumb2 from "@/mycomponents/BaseBreadcrumb2.vue";

const display = useDisplay();
const page = ref({ title: "技工装置 一覧" });
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
    text: "Home",
    disabled: false,
    to: "/mypages/labo",
  },
  {
    text: "製品 一覧",
    disabled: true,
    exact: true,
    to: "/mypages/labo/productlist",
  },
]);
</script>

<template>
  <!-- PC用表示 -->
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageLabo
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageLabo>

  <v-row>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <GridProductsList />
    </v-col>
  </v-row>
</v-container>

<!-- Mobile用表示 -->
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
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <GridProductsList />
    </v-col>
  </v-row>
</v-container>
</div>
</template>

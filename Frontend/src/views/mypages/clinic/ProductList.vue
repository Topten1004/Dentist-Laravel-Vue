<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImageClinic from "@/mycomponents/BaseTitleImageClinic.vue";
import GridProductsList from "@/mycomponents/GridProductsList.vue";
import BaseBreadcrumb2 from "@/mycomponents/BaseBreadcrumb2.vue";
import { useDisplay } from "vuetify";

const display = useDisplay();
const page = ref({ title: "技工装置 一覧" });
const contents = reactive(
  {
    titleheader: "歯科医療機関",
    subtitle: "Check Your Products !",
    url: "/mypages/clinic/egaocoin",
    btnname: "笑顔コイン",
  },
);

</script>

<template>
  <!-- PC用表示 -->
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageClinic
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageClinic>

  <v-row>
    <v-col cols="12" sm="12" lg="12">
      <GridProductsList />
    </v-col>
  </v-row>
</v-container>

<!-- Mobile用表示 -->
<div v-if="display.smAndDown.value">
  <BaseTitleImageClinic
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
  </BaseTitleImageClinic>

<v-container>
  <v-row>
    <v-col cols="12" sm="12" lg="12">
      <GridProductsList />
    </v-col>
  </v-row>
</v-container>
</div>
</template>

<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageHygienist from "@/mycomponents/BaseTitleImageHygienist.vue";
import GridProductsList from "@/mycomponents/GridProductsList.vue";
import BaseBreadcrumb2 from "@/mycomponents/BaseBreadcrumb2.vue";

const display = useDisplay();
const page = ref({ title: "4.3 製品 一覧" });
const contents = reactive(
  {
    titleheader: "歯科衛生士",
    subtitle: "Check Your Products !",
    url: "/mypages/hygienist/egaocoin",
    btnname: "笑顔コイン",
  },
);
const breadcrumbs = ref([
  {
    text: "Home",
    disabled: false,
    to: "#",
  },
  {
    text: "製品 一覧",
    disabled: true,
    exact: true,
  },
]);
</script>

<template>
  <!-- PC用表示 -->
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
      <GridProductsList />
    </v-col>
  </v-row>
</v-container>

<!-- Mobile用表示 -->
<div v-if="display.smAndDown.value">
  <BaseTitleImageHygienist
    :titleheader="contents.titleheader"
    :title="page.title"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname"
    class="mb-4">
  </BaseTitleImageHygienist>

  <v-container>
    <v-row>
      <v-col cols="12" sm="12" lg="12" class="mt-3">
        <GridProductsList />
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

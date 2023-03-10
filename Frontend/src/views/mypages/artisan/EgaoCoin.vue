<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import DiscriptionEgaoCoin from "@/views/mypages/common/DiscriptionEgaoCoin.vue"
import TheRevenueCardsArtisan from "@/mycomponents/artisan-components/TheRevenueCardsArtisan.vue";
import BaseTitleImageTop from "@/mycomponents/BaseTitleImageTop.vue";

const page = ref({ title: "笑顔コインについて" });
const contents = reactive(
  {
    titleheader: "歯科技工士",
    subtitle: "Check Your Smiles !",
    url: "/mypages/artisan/",
    btnname: "マイページ",
  },
);
const breadcrumbs = ref([
  {
    text: "マイページ",
    disabled: false,
    to: "/mypages/artisan",
  },
  {
    text: "笑顔コインについて",
    disabled: false,
    to: "/mypages/artisan/egaocoin",
  },
  {
    text: "笑顔コイン",
    disabled: true,
  },
]);
const display = useDisplay();
</script>

<template>
<!--          -->
<!--  PC用    -->
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
    <v-col cols="12" sm="12" lg="12" >
      <DiscriptionEgaoCoin usertype="artisan" />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3"
    v-show="display.smAndUp.value"
    >
    <TheRevenueCardsArtisan />
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

  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" lg="12">
        <DiscriptionEgaoCoin usertype="artisan" />
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-3"
        v-show="display.smAndUp.value">
        <TheRevenueCardsArtisan />
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

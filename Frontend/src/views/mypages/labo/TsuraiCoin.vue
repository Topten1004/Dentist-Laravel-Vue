<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";
import DiscriptionTsuraiCoin from "@/views/mypages/common/DiscriptionTsuraiCoin.vue"
import TsuraiCoinRegister from "../common/form/TsuraiCoinRegister.vue";
import TsuraiCoinHistory from "@/views/mypages/common/table/TsuraiCoinHistory.vue"
import { useDisplay } from "vuetify";

const page = ref({ title: "つら〜いコインについて" });
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
    text: "マイページ",
    disabled: false,
    to: "/mypages/artisan",
  },
  {
    text: "つら〜いコイン",
    disabled: false,
    to: "/mypages/labo/tsuraicoin",
  },
  {
    text: "つら〜いコイン",
    disabled: true,
  },
]);
const display = useDisplay();
</script>

<template>
  <!-- PC用 -->
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageLabo
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageLabo>

    <v-row>
      <v-col cols="12" sm="12" lg="12">
        <DiscriptionTsuraiCoin usertype="labo" />
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-6" >
        <TsuraiCoinRegister id="regist" />
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-6" >
          <TsuraiCoinHistory />
      </v-col>
    </v-row>
  </v-container>
  
  <!-- Mobile用 -->
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
      <v-col cols="12" sm="12" lg="12">
        <DiscriptionTsuraiCoin usertype="labo" />
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-4">
        <TsuraiCoinRegister/>
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-4">
          <TsuraiCoinHistory />
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>
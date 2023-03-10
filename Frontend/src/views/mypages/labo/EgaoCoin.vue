<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import DiscriptionEgaoCoin from "@/views/mypages/common/DiscriptionEgaoCoin.vue"
import TheRevenueCardsLabo1 from "@/mycomponents/labo-components/TheRevenueCardsLabo1.vue";
import TheRevenueCardsLabo2 from "@/mycomponents/labo-components/TheRevenueCardsLabo2.vue";
import BaseCard2 from "../common/BaseCard2.vue";
import { useDisplay } from "vuetify";

// アクセスしているユーザータイプ
const users = reactive( {usertype: 'labo'});

const page = ref({ title: "笑顔コインとは" });
const contents = reactive(
  {
    titleheader: "歯科技技工所",
    subtitle: "About Egaocoins !",
    url: "/",
    btnname: "+笑顔コイン",
  },
);

const display = useDisplay();
</script>

<template>
<!--          -->
<!--  PC用    -->
<!--          -->
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
    <v-col cols="12" sm="12" lg="12" >
      <DiscriptionEgaoCoin usertype="labo" />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3"
    v-show="display.smAndUp.value"
    >
    <TheRevenueCardsLabo1 />
    <TheRevenueCardsLabo2 class="mt-4"/>
    </v-col>

  </v-row>
</v-container>

<!--          -->
<!-- Mobile用 -->
<!--          -->
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
      <DiscriptionEgaoCoin usertype="labo" />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3"
    v-show="display.smAndUp.value">
    <TheRevenueCardsLabo1 />
    <TheRevenueCardsLabo2 class="mt-4"/>
    </v-col>
  </v-row>
</v-container>
</div>
</template>

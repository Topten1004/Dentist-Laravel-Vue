<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImageClinic from "@/mycomponents/BaseTitleImageClinic.vue";
import DiscriptionEgaoCoin from "@/views/mypages/common/DiscriptionEgaoCoin.vue"
import TheRevenueCardsClinic1 from "@/mycomponents/clinic-components/TheRevenueCardsClinic1.vue";
import TheRevenueCardsClinic2 from "@/mycomponents/clinic-components/TheRevenueCardsClinic2.vue";
import { useDisplay } from "vuetify";

// アクセスしているユーザータイプ
const users = reactive( {usertype: 'clinic'});

const page = ref({ title: "笑顔コインとは" });
const contents = reactive(
  {
    titleheader: "歯科医療機関",
    subtitle: "Check Your Egaocoins !",
    url: "/mypages/clinic/tsuraicoin",
    btnname: "つら〜いコイン",
  },
);

const display = useDisplay();
</script>

<template>
<!--          -->
<!--  PC用    -->
<!--          -->
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
    <v-col cols="12" sm="12" lg="12" >
      <DiscriptionEgaoCoin usertype="clinic" />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3"
      v-show="display.smAndUp.value">
      <TheRevenueCardsClinic1 />
      <TheRevenueCardsClinic2 class="mt-4" />
    </v-col>
  </v-row>
</v-container>

<!--          -->
<!-- Mobile用 -->
<!--          -->
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
      <DiscriptionEgaoCoin usertype="clinic" />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3"
      v-show="display.smAndUp.value">
    <TheRevenueCardsClinic1 />
    <TheRevenueCardsClinic2 class="mt-4" />
    </v-col>
  </v-row>
</v-container>
</div>
</template>

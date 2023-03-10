<script setup lang="ts">
import { ref, reactive } from "vue";
import CarouselTop from "../patient/conponents/CarouselTop.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import GridMedicalList from "@/mycomponents/GridMedicalList.vue";
import BaseTitleImagePatient from "@/mycomponents/BaseTitleImagePatient.vue";
import DiscriptionEgaoCoin from "@/views/mypages/common/DiscriptionEgaoCoin.vue"

import { useDisplay } from "vuetify";

const display = useDisplay();

const page = ref({ title: "IndexPage" });
const contents = reactive(
  {
    titleheader: "患者さん",
    subtitle: "Check Your Products !..",
    url: "/egaocoin",
    btnname: "+笑顔コイン",
  },
);
</script>

<template>
<!--  -->
<!-- PC用表示 -->
<!--  -->
<v-container v-if="display.mdAndUp.value">
  <v-row>
    <v-col cols="12" sm="12" md="12" lg="12">
        <BaseTitleImagePatient
          :title="page.title"
          :titleheader="contents.titleheader"
          :subtitle="contents.subtitle"
          :url="contents.url"
          :btnname="contents.btnname"
          class="mb-4">
        </BaseTitleImagePatient>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" sm="12" lg="12">
      <CarouselTop></CarouselTop>
    </v-col>
    <v-col cols="12" sm="12" lg="12">
      <DiscriptionEgaoCoin usertype="patient" />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <BaseCard2 heading="歯科医療機関　検索フォーム">
        <GridMedicalList />
      </BaseCard2>
    </v-col>
  </v-row>
</v-container>

<!--  -->
<!-- Mobile用表示 -->
<!--  -->
<div v-if="display.smAndDown.value">
  <BaseTitleImagePatient
    :title="page.title"
    :titleheader="contents.titleheader"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname">
  </BaseTitleImagePatient>

  <v-container>
    <v-row>
      <v-col cols="12" sm="12" lg="12">
        <CarouselTop></CarouselTop>
      </v-col>
      <v-col cols="12" sm="12" lg="12">
        <DiscriptionEgaoCoin usertype="patient" />
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-3">
          <BaseCard2 heading="歯科医療機関 検索フォーム">
            <GridMedicalList />
          </BaseCard2>
      </v-col>
    </v-row>
  </v-container>
</div>

</template>

<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImagePatient from "@/mycomponents/BaseTitleImagePatient.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import DiscriptionEgaoCoin from "@/views/mypages/common/DiscriptionEgaoCoin.vue"
import TheRevenueCardsPatient from "@/mycomponents/patient-components/TheRevenueCardsPatient.vue";
import BaseCard2 from "../common/BaseCard2.vue";
import TheOpinionHistoryTable from "./conponents/TheOpinionHistoryTable.vue";
import { useDisplay } from "vuetify";

const page = ref({ title: "笑顔コインとは" });
const contents = reactive(
  {
    titleheader: "患者さん",
    subtitle: "About Egaocoin",
    url: "/patient/opinion",
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
  <BaseTitleImagePatient
    :title="page.title"
    :titleheader="contents.titleheader"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname"
    class="mb-4">
  </BaseTitleImagePatient>

  <v-row>
    <v-col cols="12" sm="12" lg="12" >
      <DiscriptionEgaoCoin usertype="patient" />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3"
    v-show="display.smAndUp.value"
    >
    <TheRevenueCardsPatient />
    </v-col>

    <!-- 回答履歴は、患者のみ表示 -->
    <v-col cols="12" lg="12" class="d-flex align-items-stretch">
      <BaseCard2 heading="回答履歴">
        <TheOpinionHistoryTable />
      </BaseCard2>
    </v-col>
  </v-row>
</v-container>

<!--          -->
<!-- Mobile用 -->
<!--          -->
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
        <DiscriptionEgaoCoin usertype="patient" />
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-3"
      v-show="display.smAndUp.value"
      >
      <TheRevenueCardsPatient />
      </v-col>

      <!-- 回答履歴は、患者のみ表示 -->
      <v-col cols="12" lg="12" class="d-flex align-items-stretch">
        <BaseCard2 heading="回答履歴">
          <TheOpinionHistoryTable />
        </BaseCard2>
      </v-col>

    </v-row>
  </v-container>
</div>
</template>

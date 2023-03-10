<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImagePatient from "@/mycomponents/BaseTitleImagePatient.vue";
import DiscriptionTsuraiCoin from "@/views/mypages/common/DiscriptionTsuraiCoin.vue"
import TsuraiCoinRegister from "../common/form/TsuraiCoinRegister.vue";
import TsuraiCoinHistory from "@/views/mypages/common/table/TsuraiCoinHistory.vue"
import { useDisplay } from "vuetify";

const page = ref({ title: "つら〜いコインについて" });
const contents = reactive(
  {
    titleheader: "患者さん",
    subtitle: "Check Your Products !..",
    url: "/patient/egaocoin",
    btnname: "+笑顔コイン",
  },
);
const display = useDisplay();
</script>

<template>
  <!-- PC用 -->
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
      <v-col cols="12" sm="12" lg="12">
        <DiscriptionTsuraiCoin usertype="patient" />
      </v-col>
      <!-- <v-col cols="12" sm="12" lg="12" class="mt-6" >
        <TsuraiCoinRegister id="regist" usertype="patient" />
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-6" >
          <TsuraiCoinHistory usertype="patient" />
      </v-col> -->
    </v-row>
  </v-container>
  
  <!--  -->
  <!-- Mobile用 -->
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
        <DiscriptionTsuraiCoin usertype="patient" />
      </v-col>
      <!-- <v-col cols="12" sm="12" lg="12" class="mt-4">
        <TsuraiCoinRegister usertype="patient" />
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-4">
          <TsuraiCoinHistory usertype="patient" />
      </v-col> -->
    </v-row>
  </v-container>
  </div>
</template>
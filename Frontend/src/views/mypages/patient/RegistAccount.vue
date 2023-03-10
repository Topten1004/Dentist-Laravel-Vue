<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImagePatient from "@/mycomponents/BaseTitleImagePatient.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import RegisterPatientAccount from "@/views/mypages/common/form/RegisterPatientAccount.vue";

const display = useDisplay();
const page = ref({ title: "患者情報 登録・更新" });
const contents = reactive(
  {
    titleheader: "患者さん",
    subtitle: "Check Your Productor !",
    url: "/patient/opinion",
    btnname: "+笑顔コイン",
  },
);

</script>


<template>
  <!--          -->
  <!-- PC表示    -->
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
      <v-col cols="12" lg="12" class="">
        <BaseCard2 heading="患者 アカウント登録・更新">
          <RegisterPatientAccount />
        </BaseCard2>
      </v-col>
    </v-row>
  </v-container>

  <!--          -->
  <!-- スマホ表示 -->
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
        <v-col cols="12" lg="12" class="">
          <BaseCard2 heading="患者 アカウント登録・更新">
            <RegisterPatientAccount />
          </BaseCard2>
        </v-col>
      </v-row>
    </v-container>
  </div>
  
  </template>
  



<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImagePatient from "@/mycomponents/BaseTitleImagePatient.vue";
import BaseCard2 from "../common/BaseCard2.vue";
import TheProfileCardPatient from "@/mycomponents/patient-components/TheProfileCardPatient.vue";
import TheOpinionHistoryTable from "./conponents/TheOpinionHistoryTable.vue";
import TopNews from "@/mycomponents/patient-components/TopNews.vue";
import DiscriptionEgaoCoin from "@/views/mypages/common/DiscriptionEgaoCoin.vue"
import { useDisplay } from "vuetify";

// アクセスしているユーザータイプ
const users = reactive( {usertype: 'patient'});

const display = useDisplay();
const page = ref({ title: "患者専用マイページ ({{ user name }} さん）" });
const contents = reactive(
  {
    titleheader: "患者さん", //　←【注意】ここにuser_nameを入れたいです！
    subtitle: "About Egaocoin",
    url: "/patient/opinion",
    btnname: "+笑顔コイン",
  },
);
</script>

<template>
<!--  -->
<!-- PC用表示 -->
<!--  -->
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
    <v-col cols="12" sm="12" lg="4">
      <TheProfileCardPatient />
    </v-col>
    <v-col cols="12" sm="12" lg="8">
      <TopNews />
    </v-col>
    <v-col cols="12">
      <DiscriptionEgaoCoin usertype="patient"/>
    </v-col>
      <!-- 回答履歴は、患者のみ表示 -->
    <v-col cols="12" lg="12" class="d-flex align-items-stretch">
        <BaseCard2 heading="回答履歴">
          <TheOpinionHistoryTable />
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
      <v-col cols="12" sm="12" lg="4">
        <TheProfileCardPatient />
      </v-col>
      <v-col cols="12" sm="12" lg="8">
        <TopNews />
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

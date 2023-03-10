<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImagePatient from "@/mycomponents/BaseTitleImagePatient.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";
import CardRegisterAccount from "../common/form/CardRegisterAccount.vue";
import CardCareer from "../common/form/CardCareer.vue";
import { useDisplay } from "vuetify";

const display = useDisplay();
const page = ref({ title: "患者情報 登録" });
const contents = reactive(
  {
    titleheader: "患者さん",
    subtitle: "Check Your Products !..",
    url: "/patient/egaocoin",
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
      <v-col cols="12" lg="6" class="d-flex align-items-stretch">
        <BaseCard heading="アカウント情報登録">
          <CardRegisterAccount></CardRegisterAccount>
        </BaseCard>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="12" lg="6" class="d-flex align-items-stretch">
        <BaseCard heading="詳細・経歴情報登録">
          <CardCareer></CardCareer>
        </BaseCard>
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
        <v-col cols="12" lg="6" class="d-flex align-items-stretch">
          <BaseCard heading="アカウント情報登録">
            <CardRegisterAccount></CardRegisterAccount>
          </BaseCard>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="12" lg="6" class="d-flex align-items-stretch">
          <BaseCard heading="詳細・経歴情報登録">
            <CardCareer></CardCareer>
          </BaseCard>
        </v-col>
      </v-row>
    </v-container>
</div>
</template>



<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard from "@/components/BaseCard.vue";
import CardRegisterAccount from "../common/form/CardRegisterAccount.vue";
import CardCareer from "../common/form/CardCareer.vue";

const page = ref({ title: "歯科医師情報 登録フォーム" });
const breadcrumbs = ref([
  {
    text: "歯科医師Top",
    disabled: false,
    to: "#",
  },
  {
    text: "登録フォーム",
    disabled: true,
  },
]);
</script>


<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
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
</template>



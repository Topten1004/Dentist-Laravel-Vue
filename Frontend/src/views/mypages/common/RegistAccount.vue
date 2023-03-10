<!-- 
  設定フォーム１　名前とパスワード関連の登録管理。
 -->

<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard2 from "./BaseCard2.vue";
import CardRegisterAccount from "./form/CardRegisterAccount.vue";
import { useDisplay } from "vuetify";

const display = useDisplay();

const page = ref({ title: "設定1_ 登録フォーム" });
const breadcrumbs = ref([
  {
    text: "歯科技工士Top",
    disabled: false,
    to: '../',
  },
  {
    text: "登録フォーム",
    disabled: true,
  },
]);
</script>


<template>
<!-- PC用表示 -->
<v-container v-if="display.mdAndUp.value">
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
  
  <v-row>

    <v-col cols="12" lg="12" class="d-flex align-items-stretch mb-8">
      <BaseCard2 heading="1. アカウント情報登録">
        <CardRegisterAccount></CardRegisterAccount>
      </BaseCard2>
    </v-col>

  </v-row>
</v-container>


<!-- Mobile用表示 -->
<div v-if="display.smAndDown.value">
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
  
  <v-row>
    <v-col cols="12" lg="12" class="d-flex align-items-stretch mb-8">
      <BaseCard2 heading="1. アカウント情報登録">
        <CardRegisterAccount></CardRegisterAccount>
      </BaseCard2>
    </v-col>
  </v-row>
</div>

</template>



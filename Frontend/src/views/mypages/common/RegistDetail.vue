<!-- 
  設定フォーム3　名刺掲載事項関連の登録管理。
 -->
 
<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard2 from "./BaseCard2.vue";
import CardRegisterDetail from "./form/CardRegisterDetail.vue";
import { useDisplay } from "vuetify";

const display = useDisplay();

const page = ref({ title: "設定3_ 詳細登録" });
const breadcrumbs = ref([
  {
    text: "設定Top",
    disabled: false,
    to: "#",
  },
  {
    text: "詳細登録",
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

  <v-row justify="center">
    <v-col cols="12" lg="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard2 heading="3. 詳細・経歴情報登録">
        <CardRegisterDetail></CardRegisterDetail>
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

  <v-row justify="center">
    <v-col cols="12" lg="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard2 heading="3. 詳細・経歴情報登録">
        <CardRegisterDetail></CardRegisterDetail>
      </BaseCard2>
    </v-col>
  </v-row>
</div>

</template>



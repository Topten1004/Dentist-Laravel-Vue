<!-- 
  設定フォーム2　就業先関連の登録管理。
 -->

<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import CardRegisterAffiliation from "@/views/mypages/common/form/CardRegisterAffiliation.vue";

const display = useDisplay();
const page = ref({ title: "設定2_ 所属登録" });
const breadcrumbs = ref([
  {
    text: "設定Top",
    disabled: false,
    to: "/",
  },
  {
    text: "詳細登録",
    disabled: true,
  },
]);
</script>


<template>
  <v-container v-if="display.mdAndUp.value">
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>

  <v-row justify="center">
    <v-col cols="12" lg="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard2 heading="2. 所属登録">
        <CardRegisterAffiliation></CardRegisterAffiliation>
      </BaseCard2>
    </v-col>
  </v-row>
  </v-container>


<div v-if="display.smAndDown.value">
  <v-row justify="center">
    <v-col cols="12" lg="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard2 heading="2. 所属登録">
        <CardRegisterAffiliation></CardRegisterAffiliation>
      </BaseCard2>
    </v-col>
  </v-row>
</div>
</template>



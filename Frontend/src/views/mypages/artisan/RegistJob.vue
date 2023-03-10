<!-- 
  設定フォーム2　就業先関連の登録管理。
 -->
<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageTop from "@/mycomponents/BaseTitleImageTop.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import CardRegisterAffiliation from "@/views/mypages/common/form/CardRegisterAffiliation.vue";

const display = useDisplay();
const page = ref({ title: "所属登録" });
const contents = reactive(
  {
    titleheader: "設定２",
    subtitle: "Check Your Job !",
    url: "/mypages/artisan/regist/detail",
    btnname: "3.詳細登録へ",
  },
);
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
    <BaseTitleImageTop
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageTop>

  <v-row justify="center">
    <v-col cols="12" lg="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard2 heading="2. 所属登録">
        <CardRegisterAffiliation></CardRegisterAffiliation>
      </BaseCard2>
    </v-col>
  </v-row>
  </v-container>


<!--  　　　　-->
<!-- スマホ用 -->
<div v-if="display.smAndDown.value">
  <BaseTitleImageTop
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
  </BaseTitleImageTop>

  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="12" sm="12" class="d-flex align-items-stretch">
        <BaseCard2 heading="2. 所属登録">
          <CardRegisterAffiliation></CardRegisterAffiliation>
        </BaseCard2>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>



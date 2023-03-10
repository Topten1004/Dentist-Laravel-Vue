<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import CardCareerDetail2 from "@/views/mypages/common/form/CardCareerDetail2.vue";


const page = ref({ title: "歯科技工所情報 所属登録" });
const contents = reactive(
  {
    titleheader: "歯科技技工所",
    subtitle: "Check Your Labo Prolile !",
    url: "/",
    btnname: "+笑顔コイン",
  },
);
const breadcrumbs = ref([
  {
    text: "歯科技工所Top",
    disabled: false,
    to: "/mypages/labo",
  },
  {
    text: "詳細登録",
    disabled: true,
  },
]);
</script>


<template>
  <v-container>
    <BaseTitleImageLabo
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageLabo>

  <v-row justify="center">
    <v-col cols="12" lg="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard2 heading="3. 所属従業員登録">
        <CardCareerDetail2></CardCareerDetail2>
      </BaseCard2>
    </v-col>
  </v-row>
  </v-container>
</template>



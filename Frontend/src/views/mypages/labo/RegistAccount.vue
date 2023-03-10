<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import CardRegisterLabo from "@/views/mypages/common/form/CardRegisterLabo.vue";

const display = useDisplay();
const page = ref({ title: "歯科技工所情報 登録フォーム" });
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
    text: "登録フォーム",
    disabled: true,
  },
]);
</script>


<template>
  <!-- PC用表示 -->
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageLabo
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageLabo>
    <v-row>
      <v-col cols="12" lg="12" class="d-flex align-items-stretch mb-8">
        <BaseCard2 heading="1. 技工所アカウント情報 登録/更新">
          <CardRegisterLabo></CardRegisterLabo>
        </BaseCard2>
      </v-col>
    </v-row>
  </v-container>

  
  <!-- Mobile用表示 -->
  <div v-if="display.smAndDown.value">
    <BaseTitleImageLabo
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageLabo>

  <v-container>
      <v-row>
        <v-col cols="12" lg="12" class="d-flex align-items-stretch mb-8">
          <BaseCard2 heading="1. 技工所アカウント情報 登録/更新">
            <CardRegisterLabo></CardRegisterLabo>
          </BaseCard2>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

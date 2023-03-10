<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard2 from "../common/BaseCard2.vue";
import RegistLaboDetail from "@/views/mypages/common/form/RegistLaboDetail.vue";

const display = useDisplay();
const page = ref({ title: "歯科技工所情報 詳細登録" });
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
    to: "#",
  },
  {
    text: "詳細登録",
    disabled: true,
  },
]);
</script>


<template>
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageLabo
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageLabo>

  <v-row justify="center">
    <v-col cols="12" lg="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard2 heading="技工所情報 詳細登録">
        <RegistLaboDetail />
      </BaseCard2>
    </v-col>
  </v-row>
  </v-container>

<!-- Mobile用 -->
  <div v-if="display.smAndDown.value">
    <BaseTitleImageLabo
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageLabo>

  <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="12" sm="12" class="d-flex align-items-stretch">
          <BaseCard2 heading="技工所情報 詳細登録">
            <RegistLaboDetail />
          </BaseCard2>
        </v-col>
    </v-row>
  </v-container>
  </div>
  
</template>



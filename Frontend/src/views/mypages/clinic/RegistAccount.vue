<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageClinic from "@/mycomponents/BaseTitleImageClinic.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import CardRegisterLabo from "@/views/mypages/common/form/CardRegisterLabo.vue";

const display = useDisplay();
const page = ref({ title: "1.アカウント登録" });
const contents = reactive(
  {
    titleheader: "歯科医療機関",
    subtitle: "Check Your MyPage !..",
    url: "/mypages/clinic/regist/detail",
    btnname: "次へ",
  },
);

</script>


<template>
  <!--  -->
  <!-- PC用表示 -->
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageClinic
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageClinic>
    <v-row>
      <v-col cols="12" lg="12" class="d-flex align-items-stretch mb-8">
        <BaseCard2 heading="1. 技工所アカウント情報 登録/更新">
          <CardRegisterLabo></CardRegisterLabo>
        </BaseCard2>
      </v-col>
    </v-row>
  </v-container>

  <!--  -->
  <!-- Mobile用表示 -->
  <div v-if="display.smAndDown.value">
    <BaseTitleImageClinic
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageClinic>
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

<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImageSociety from "@/mycomponents/BaseTitleImageSociety.vue";
import BaseCard1 from "@/views/mypages/common/BaseCard1.vue";
import RegisterAccountSociety from "@/views/mypages/common/form/RegisterSocietyAccount.vue";

const page = ref({ title: "学会管理者情報 登録フォーム" });
const contents = reactive(
  {
    titleheader: "学会 団体 管理者",
    subtitle: "Check Your Members !",
    url: "/mypages/society/",
    btnname: "マイページ",
  },
);
</script>


<template>
  <v-container>
    <BaseTitleImageSociety
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageSociety>
  <v-row>
    <v-col cols="12" lg="12" class="">
      <BaseCard1 heading="学会・団体 アカウント登録">
        <RegisterAccountSociety />
      </BaseCard1>
    </v-col>
  </v-row>
</v-container>
</template>



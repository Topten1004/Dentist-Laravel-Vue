<!-- 
  設定フォーム3　名刺掲載事項関連の登録管理。
 -->
 
<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageTop from "@/mycomponents/BaseTitleImageTop.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import CardRegisterDetail from "@/views/mypages/common/form/CardRegisterDetail.vue";

const display = useDisplay();
const page = ref({ title: "詳細登録" });
const contents = reactive(
  {
    titleheader: "設定３",
    subtitle: "Check Your Society !",
    url: "/mypages/artisan/regist/societies",
    btnname: "4.学会登録へ",
  },
);
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
      <BaseCard2 heading="3. 詳細・経歴情報登録">
        <CardRegisterDetail></CardRegisterDetail>
      </BaseCard2>
    </v-col>
  </v-row>
  </v-container>


<!-- Mobile用表示 -->
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
        <BaseCard2 heading="3. 詳細・経歴情報登録">
          <CardRegisterDetail></CardRegisterDetail>
        </BaseCard2>
      </v-col>
    </v-row>
  </v-container>
</div>

</template>



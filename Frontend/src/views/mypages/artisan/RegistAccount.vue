<!-- 
  設定フォーム１　名前とパスワード関連の登録管理。
 -->

<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageTop from "@/mycomponents/BaseTitleImageTop.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import CardRegisterAccount from "@/views/mypages/common/form/CardRegisterAccount.vue";


const display = useDisplay();

const page = ref({ title: "アカウント登録" });
const contents = reactive(
  {
    titleheader: "設定１",
    subtitle: "Check Your Account !",
    url: "/mypages/artisan/regist/job",
    btnname: "2.所属登録へ",
  },
);
const breadcrumbs = ref([
  {
    text: "歯科技工士Top",
    disabled: false,
    to: '/mypages/artisan',
  },
  {
    text: "アカウント登録",
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
  <BaseTitleImageTop
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
  </BaseTitleImageTop>

  <v-container>
    <v-row>
      <v-col cols="12" lg="12" class="d-flex align-items-stretch mb-8">
        <BaseCard2 heading="1. アカウント情報登録" class="no-ellipsis">
          <CardRegisterAccount></CardRegisterAccount>
        </BaseCard2>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>



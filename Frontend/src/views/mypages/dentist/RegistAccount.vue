<!-- 
  設定フォーム１　名前とパスワード関連の登録管理。
 -->
<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageDentist from "@/mycomponents/BaseTitleImageDentist.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import CardRegisterAccount from "@/views/mypages/common/form/CardRegisterAccount.vue";


const display = useDisplay();

const page = ref({ title: "設定 1_ 登録フォーム" });
const contents = reactive(
  {
    titleheader: "歯科医師",
    subtitle: "Check Your Data !",
    url: "/mypages/dentist/regist/job",
    btnname: "2.所属登録→",
  },
);

</script>


<template>
<!-- PC用表示 -->
<v-container v-if="display.mdAndUp.value">
  <BaseTitleImageDentist
    :title="page.title"
    :titleheader="contents.titleheader"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname"
    class="mb-4">
  </BaseTitleImageDentist>
  
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
  <BaseTitleImageDentist
    :title="page.title"
    :titleheader="contents.titleheader"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname">
  </BaseTitleImageDentist>
  
  <v-container>
    <v-row>
      <v-col cols="12" lg="12" class="d-flex align-items-stretch mb-8">
        <BaseCard2 heading="1. アカウント情報登録">
          <CardRegisterAccount></CardRegisterAccount>
        </BaseCard2>
      </v-col>
    </v-row>
  </v-container>
</div>

</template>



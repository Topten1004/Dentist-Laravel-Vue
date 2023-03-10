<!-- 
  設定フォーム3　名刺掲載事項関連の登録管理。
 -->

<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageHygienist from "@/mycomponents/BaseTitleImageHygienist.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import CardRegisterDetail from "@/views/mypages/common/form/CardRegisterDetail.vue";

const display = useDisplay();

const page = ref({ title: "設定3_ 詳細登録" });
const contents = reactive(
  {
    titleheader: "歯科衛生士",
    subtitle: "Check Your Data !",
    url: "/mypages/hygienist/regist/societies",
    btnname: "4.学会登録→",
  },
);

</script>


<template>
<!-- PC用表示 -->
<v-container v-if="display.mdAndUp.value">
  <BaseTitleImageHygienist
    :titleheader="contents.titleheader"
    :title="page.title"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname"
    class="mb-4">
  </BaseTitleImageHygienist>

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
  <BaseTitleImageHygienist
    :titleheader="contents.titleheader"
    :title="page.title"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname">
  </BaseTitleImageHygienist>

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



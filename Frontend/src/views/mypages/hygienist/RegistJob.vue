<!-- 
  設定フォーム2　就業先関連の登録管理。
 -->
<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageHygienist from "@/mycomponents/BaseTitleImageHygienist.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import CardRegisterAffiliation from "@/views/mypages/common/form/CardRegisterAffiliation.vue";

const display = useDisplay();
const page = ref({ title: "設定2_ 所属登録" });
const contents = reactive(
  {
    titleheader: "歯科衛生士",
    subtitle: "Check Your Data !",
    url: "/mypages/hygienist/regist/detail",
    btnname: "3.詳細登録→",
  },
);

</script>


<template>
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
      <BaseCard2 heading="2. 所属登録">
        <CardRegisterAffiliation></CardRegisterAffiliation>
      </BaseCard2>
    </v-col>
  </v-row>
  </v-container>


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
        <BaseCard2 heading="2. 所属登録">
          <CardRegisterAffiliation></CardRegisterAffiliation>
        </BaseCard2>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>



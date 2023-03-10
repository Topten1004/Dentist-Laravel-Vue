<!-- 
  設定フォーム４　学会所属先関連の登録管理。
  登録と同時に　当システムに利用登録している学会管理者宛に
  会員であるかの照会メールを送付し、学会所属であれば「チェックマークを付与する。」
 -->
<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";
import { useDisplay } from "vuetify";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import CardRegisterSociety from "@/views/mypages/common/form/CardRegisterSociety.vue";


const page = ref({ title: "設定4_所属学会登録" });
const contents = reactive(
  {
    titleheader: "歯科技技工所",
    subtitle: "Check Your Labo Prolile !",
    url: "/",
    btnname: "+笑顔コイン",
  },
);
const display = useDisplay();
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
  <!-- PC用 -->
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
      <BaseCard2 heading="4. 所属学会・団体登録">
        <CardRegisterSociety />
      </BaseCard2>
    </v-col>
  </v-row>
  </v-container>

  <!-- モバイル用 -->
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
        <BaseCard2 heading="4.所属学会・団体登録">
          <CardRegisterSociety />
        </BaseCard2>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>



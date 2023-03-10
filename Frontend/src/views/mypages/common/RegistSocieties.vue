<!-- 
  設定フォーム４　学会所属先関連の登録管理。
  登録と同時に　当システムに利用登録している学会管理者宛に
  会員であるかの照会メールを送付し、学会所属であれば「チェックマークを付与する。」
 -->
<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import CardRegisterSociety from "@/views/mypages/common/form/CardRegisterSociety.vue";


const page = ref({ title: "設定4_ 所属学会登録" });
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
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
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
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
  <v-row justify="center">
    <v-col cols="12" lg="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard2 heading="4.所属学会・団体登録">
        <CardRegisterSociety />
      </BaseCard2>
    </v-col>
  </v-row>
  </div>
</template>



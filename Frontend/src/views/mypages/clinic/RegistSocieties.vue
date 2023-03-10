<!-- 
  設定フォーム４　学会所属先関連の登録管理。
  登録と同時に　当システムに利用登録している学会管理者宛に
  会員であるかの照会メールを送付し、学会所属であれば「チェックマークを付与する。」
 -->
<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageClinic from "@/mycomponents/BaseTitleImageClinic.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import CardRegisterSociety from "@/views/mypages/common/form/CardRegisterSociety.vue";

const page = ref({ title: "3.所属学会登録" });
const contents = reactive(
  {
    titleheader: "歯科医療機関",
    subtitle: "Check Your Details !..",
    url: "/mypages/clinic/regist/societies",
    btnname: "次へ",
  },
);
const display = useDisplay();

</script>


<template>
  <!-- PC用 -->
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageClinic
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageClinic>
  <v-row justify="center">
    <v-col cols="12" lg="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard2 heading="3. 所属学会・団体登録">
        <CardRegisterSociety />
      </BaseCard2>
    </v-col>
  </v-row>
  </v-container>

  <!-- モバイル用 -->
  <div v-if="display.smAndDown.value">
    <BaseTitleImageClinic
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageClinic>

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



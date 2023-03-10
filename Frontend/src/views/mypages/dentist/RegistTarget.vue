<!-- 
  従業員の目標設定　名刺を何枚発行するかを事前登録する
 -->
<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageDentist from "@/mycomponents/BaseTitleImageDentist.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import CardRegisterTarget from "@/views/mypages/common/form/CardRegisterTarget.vue";
import CardTargetOwners from "@/views/mypages/common/form/CardTargetOwners.vue";

const display = useDisplay();
const page = ref({ title: "名刺発行目標" });
const contents = reactive(
  {
    titleheader: "歯科医師",
    subtitle: "Check Your Target !",
    url: "/mypages/dentist",
    btnname: "マイページ→",
  },
);
</script>


<template>
 <!-- PC用 -->
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
    <v-col cols="12" class="d-flex align-items-stretch">
      <BaseCard2 heading="5.個人目標設定" elevation="2" class="mb-4">
        <CardRegisterTarget />
      </BaseCard2>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" class="d-flex align-items-stretch">
      <BaseCard2 heading="事業所目標値" elevation="2">
        <CardTargetOwners />
      </BaseCard2>
    </v-col>
  </v-row>
</v-container>

  <!-- Mobile用 -->
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
      <v-col cols="12" class="d-flex align-items-stretch">
        <BaseCard2 heading="5.個人目標設定" elevation="2" class="mb-4">
          <CardRegisterTarget />
        </BaseCard2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex align-items-stretch">
        <BaseCard2 heading="事業所目標値" elevation="2">
          <CardTargetOwners />
        </BaseCard2>
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>



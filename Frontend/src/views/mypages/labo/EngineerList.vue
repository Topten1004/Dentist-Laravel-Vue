<!-- 注意：                 -->
<!-- 従業員登録は、要検討です。以下はサンプルです。 -->
<!--                       -->
<script setup lang="ts">
import { ref,reactive,computed } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";
import EngineerData from "@/mycomponents/labo-components/EngineerData";
import EngineerListCard from "@/views/mypages/common/EngineerListCard.vue";

const page = ref({ title: "所属 歯科技工士技 一覧（{{::歯科技工所名}}）" });
const contents = reactive(
  {
    titleheader: "歯科技技工所",
    subtitle: "Check Your Staff List !",
    url: "/",
    btnname: "+笑顔コイン",
  },
);
const breadcrumbs = ref([
  {
    text: "マイページ",
    disabled: false,
    to: "/mypages/labo",
  },
  {
    text: "所属 歯科技工士技 一覧",
    disabled: false,
    to: "/mypages/labo/engineerlist",
  },
]);

const display = useDisplay();


</script>

<style>
.big {
	transform: scale(1.4);
}
</style>

<template>
<!--          -->
<!--  PC用    -->
<v-container v-if="display.mdAndUp.value">
    <BaseTitleImageLabo
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageLabo>

    <EngineerListCard />

</v-container>

<!-- Mobile用表示 -->
<div v-if="display.smAndDown.value">
    <BaseTitleImageLabo
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageLabo>

  <v-container>
    <v-row>
      <v-col cols="12">
        <EngineerListCard />
      </v-col>
    </v-row>
  </v-container>
</div>

</template>

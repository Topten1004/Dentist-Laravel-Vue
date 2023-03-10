<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import GridMedicalList from "@/mycomponents/GridMedicalList.vue";
import BaseTitleImageClinic from "@/mycomponents/BaseTitleImageClinic.vue";
import CardSearch from "@/views/mypages/common/form/CardSearch.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import SideBannerCard from "@/mycomponents/SideBannerCard.vue";

const display = useDisplay();
const page = ref({ title: "歯科医療機関検索" });
const contents = reactive(
  {
    titleheader: "歯科医療機関",
    subtitle: "Check Your Clinic & Labo !",
    url: "/",
    btnname: "Home",
  },
);

</script>

<template>
  <!--         -->
  <!-- PC用表示 -->
  <!--         -->
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageClinic
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageClinic>

  <v-row>
    <v-col cols="12" sm="12" lg="8" class="">
    <BaseCard2 heading="歯科医療機関・歯科技工所 検索">
    <!-- 1.検索フォームはどちらを採用すべきか？ -->
      <CardSearch />
    </BaseCard2>
    </v-col>
    <v-col cols="12" sm="12" lg="4" class="">
      <SideBannerCard />
    </v-col>

    <!-- 2.検索フォームはどちらを採用すべきか？ -->
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <BaseCard2 heading="歯科医療機関・歯科技工所 検索">
        <GridMedicalList />
      </BaseCard2>
    </v-col>

  </v-row>
</v-container>

<!--             -->
<!-- Mobile用表示 -->
<!--             -->
<div v-if="display.smAndDown.value">
  <BaseTitleImageClinic
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
  </BaseTitleImageClinic>

<v-container>
  <v-row>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <CardSearch />
      <!-- <GridMedicalList /> -->
    </v-col>
  </v-row>
</v-container>
</div>
</template>

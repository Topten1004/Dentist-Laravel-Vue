<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";
import LaboProfile from "@/mycomponents/LaboProfile.vue"
import SatisticsGraph from "@/mycomponents/labo-components/SatisticsGraph.vue";
import TheProfileLaboCard from "@/mycomponents/TheProfileLaboCard.vue";

const display = useDisplay();
const page = ref({ title: "歯科技工所 企業情報" });

  // アクセスしているユーザータイプ
const users = ref( {usertype: 'labo'});
const contents = reactive(
  {
    titleheader: "歯科技技工所",
    subtitle: "Check Your Labo Prolile !",
    url: "/",
    btnname: "+笑顔コイン",
  },
);
const breadcrumbs = ref([
  {
    text: "Home",
    disabled: false,
    to: "/",
  },
  {
    text: "Laboプロフィール",
    disabled: true,
  },
]);
</script>
  
<template>
  <!--          -->
  <!-- PC表示    -->
  <!--          -->
  <v-container v-if="display.mdAndUp.value">
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12">
          <BaseTitleImageLabo
              :title="page.title"
              :titleheader="contents.titleheader"
              :subtitle="contents.subtitle"
              :url="contents.url"
              :btnname="contents.btnname"
              class="mb-4">
          </BaseTitleImageLabo>
        <v-spacer></v-spacer>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="mb-6">
        <TheProfileLaboCard />
      </v-col>
      <v-col cols="12" class="mb-4">
        <SatisticsGraph />
      </v-col>
      <v-col cols="12" class="mb-4">
        <LaboProfile />
      </v-col>
    </v-row>
  </v-container>
  
  <!--          -->
  <!-- スマホ表示 -->
  <!--          -->
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
      <v-col cols="12" class="mb-6">
        <TheProfileLaboCard />
      </v-col>
      <v-col cols="12" class="mb-4">
        <SatisticsGraph />
      </v-col>
      <v-col cols="12" class="mb-4">
        <LaboProfile />
      </v-col>
    </v-row>
  </v-container>
</div>
  
</template>
  
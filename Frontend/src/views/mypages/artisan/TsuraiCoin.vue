<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageTop from "@/mycomponents/BaseTitleImageTop.vue";
import DiscriptionTsuraiCoin from "@/views/mypages/common/DiscriptionTsuraiCoin.vue"
import TsuraiCoinRegister from "../common/form/TsuraiCoinRegister.vue";
import TsuraiCoinHistory from "@/views/mypages/common/table/TsuraiCoinHistory.vue"
import CardImageTsurai from "@/assets/images/background/tsurai1.jpg"

const page = ref({ title: "つら〜いコイン" });
const contents = reactive(
  {
    titleheader: "歯科技工士さんの為の",
    subtitle: "Check Your Hard Works !",
    url: "/mypages/tsuraicoin#regist",
    btnname: "登録する！",
  },
);

const display = useDisplay();
</script>

<template>
  <!--          -->
  <!-- PC用     -->
  <!--          -->
  <v-container v-if="display.mdAndUp.value">

    <BaseTitleImageTop
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageTop>

    <v-row>
      <v-col cols="12" sm="12" lg="12">
        <DiscriptionTsuraiCoin usertype="artisan" />
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-4" >
        <!-- 【注意】ページ内リンク　id="regist"　できていない -->
        <TsuraiCoinRegister id="regist" />
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-6" >
          <TsuraiCoinHistory />
      </v-col>
    </v-row>
  </v-container>
  
  <!--          -->
  <!-- Mobile用 -->
  <!--          -->
  <div v-if="display.smAndDown.value">
    <BaseTitleImageTop
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageTop>
      <v-img
        :src="CardImageTsurai"
        max-height="260px"
        cover>
      </v-img>

  <v-container>
    <v-row>
      <v-col cols="12" sm="12" lg="12">
        <DiscriptionTsuraiCoin usertype="artisan" />
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-4" id="regist">
        <TsuraiCoinRegister/>
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-4">
          <TsuraiCoinHistory />
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>
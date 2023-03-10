<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImageClinic from "@/mycomponents/BaseTitleImageClinic.vue";
import DiscriptionTsuraiCoin from "@/views/mypages/common/DiscriptionTsuraiCoin.vue"
import TsuraiCoinRegister from "../common/form/TsuraiCoinRegister.vue";
import TsuraiCoinHistory from "@/views/mypages/common/table/TsuraiCoinHistory.vue"
import { useDisplay } from "vuetify";

const page = ref({ title: "つら〜いコイン" });
const contents = reactive(
  {
    titleheader: "歯科医療機関",
    subtitle: "Check Your Tsuraicoins !",
    url: "/mypages/clinic/tsuraicoin",
    btnname: "つら〜いコイン",
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

    <v-row>
      <v-col cols="12" sm="12" lg="12">
        <DiscriptionTsuraiCoin usertype="clinic" />
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-6" >
        <TsuraiCoinRegister id="regist" />
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-6" >
          <TsuraiCoinHistory />
      </v-col>
    </v-row>
  </v-container>
  
  <!-- Mobile用 -->
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
      <v-col cols="12" sm="12" lg="12">
        <DiscriptionTsuraiCoin usertype="clinic" />
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-4">
        <TsuraiCoinRegister/>
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-4">
          <TsuraiCoinHistory />
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>
<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImageHygienist from "@/mycomponents/BaseTitleImageHygienist.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import DiscriptionTsuraiCoin from "@/views/mypages/common/DiscriptionTsuraiCoin.vue"
import TsuraiCoinRegister from "../common/form/TsuraiCoinRegister.vue";
import TsuraiCoinHistory from "@/views/mypages/common/table/TsuraiCoinHistory.vue"
import { useDisplay } from "vuetify";

const page = ref({ title: "つら〜いコインについて" });
const contents = reactive(
  {
    titleheader: "歯科衛生士",
    subtitle: "Check Your Data !",
    url: "/mypages/hygienist",
    btnname: "マイページ→",
  },
);
const display = useDisplay();
</script>

<template>
  <!-- PC用 -->
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageHygienist
      :titleheader="contents.titleheader"
      :title="page.title"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageHygienist>

    <v-row>
      <v-col cols="12" sm="12" lg="12">
        <DiscriptionTsuraiCoin usertype="hygienist" />
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
    <BaseTitleImageHygienist
      :titleheader="contents.titleheader"
      :title="page.title"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageHygienist>

    <v-container>
      <v-row>
        <v-col cols="12" sm="12" lg="12">
          <DiscriptionTsuraiCoin usertype="hygienist" />
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
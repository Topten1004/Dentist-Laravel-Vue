<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageDentist from "@/mycomponents/BaseTitleImageDentist.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import DiscriptionTsuraiCoin from "@/views/mypages/common/DiscriptionTsuraiCoin.vue"
import TsuraiCoinRegister from "../common/form/TsuraiCoinRegister.vue";
import TsuraiCoinHistory from "@/views/mypages/common/table/TsuraiCoinHistory.vue"

const page = ref({ title: "つら〜いコインについて" });
const contents = reactive(
  {
    titleheader: "歯科医師",
    subtitle: "Check Your Hard Works !",
    url: "/mypages/tsuraicoin#regist",
    btnname: "登録する！",
  },
);

const display = useDisplay();
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
      <v-col cols="12" sm="12" lg="12">
        <DiscriptionTsuraiCoin usertype="dentist" />
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
    <BaseTitleImageDentist
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageDentist>

  <v-container>
    <v-row>
      <v-col cols="12" sm="12" lg="12">
        <DiscriptionTsuraiCoin usertype="dentist" />
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
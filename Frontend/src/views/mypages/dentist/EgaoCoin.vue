<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageDentist from "@/mycomponents/BaseTitleImageDentist.vue";
import DiscriptionEgaoCoin from "@/views/mypages/common/DiscriptionEgaoCoin.vue"
import TheRevenueCardsDentist from "@/mycomponents/dentist-components/TheRevenueCardsDentist.vue";

// アクセスしているユーザータイプ
const users = reactive( {usertype: 'Dentist'});

const page = ref({ title: "笑顔コインとは" });
const contents = reactive(
  {
    titleheader: "歯科医師",
    subtitle: "Check Your works !",
    url: "/login",
    btnname: "ログイン",
  },
);
const display = useDisplay();
</script>

<template>
<!--          -->
<!--  PC用    -->
<!--          -->
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
    <v-col cols="12" sm="12" lg="12" >
      <DiscriptionEgaoCoin usertype="dentist" />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3"
    v-show="display.smAndUp.value">
    <TheRevenueCardsDentist />
    </v-col>
  </v-row>
</v-container>

<!--          -->
<!-- Mobile用 -->
<!--          -->
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
      <DiscriptionEgaoCoin usertype="dentist" />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3"
    v-show="display.smAndUp.value">
    <TheRevenueCardsDentist />
    </v-col>
  </v-row>
</v-container>
</div>
</template>

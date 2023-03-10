<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageHygienist from "@/mycomponents/BaseTitleImageHygienist.vue";
import DiscriptionEgaoCoin from "@/views/mypages/common/DiscriptionEgaoCoin.vue"
import TheRevenueCardsHygienist from "@/mycomponents/hygienist-components/TheRevenueCardsHygienist.vue";


// アクセスしているユーザータイプ
const users = reactive( {usertype: 'hygienist'});

const page = ref({ title: "笑顔コインとは" });
const contents = reactive(
  {
    titleheader: "歯科衛生士",
    subtitle: "Check Your works !",
    url: "/mypages/hygienist/egaocoin",
    btnname: "笑顔コイン",
  },
);

const display = useDisplay();
</script>

<template>
<!--          -->
<!--  PC用    -->
<!--          -->
<v-container v-if="display.mdAndUp.value">
  <BaseTitleImageHygienist
    :title="page.title"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname"
    class="mb-4">
  </BaseTitleImageHygienist>

  <v-row>
    <v-col cols="12" sm="12" lg="12" >
      <DiscriptionEgaoCoin usertype="hygienist" />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <TheRevenueCardsHygienist />
    </v-col>
  </v-row>
</v-container>

<!--          -->
<!-- Mobile用 -->
<!--          -->
<div v-if="display.smAndDown.value">
  <BaseTitleImageHygienist
    :title="page.title"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname"
    class="mb-4">
  </BaseTitleImageHygienist>

  <v-container>
    <v-row>
      <v-col cols="12" sm="12" lg="12">
        <DiscriptionEgaoCoin usertype="hygienist" />
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-3">
        <TheRevenueCardsHygienist />
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

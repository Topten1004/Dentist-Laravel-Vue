<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";
import ContractCard from "@/mycomponents/ContractCard.vue"
import ContractPrintCard from "@/mycomponents/ContractPrintCard.vue"
import ContractNameCard from "@/mycomponents/ContractNameCard.vue";

const display = useDisplay();
const page = ref({ title: "ご契約状況" });
const contents = reactive(
  {
    titleheader: "歯科技技工所",
    subtitle: "Check Your Constracts !",
    url: "/",
    btnname: "+笑顔コイン",
  },
);

  // アクセスしているユーザータイプ
const users = ref( {usertype: 'labo'});

const breadcrumbs = ref([
  {
    text: "Home",
    disabled: false,
    to: "/",
  },
  {
    text: "ご契約状況",
    disabled: true,
  },
]);
</script>
  
<template>
  <!--          -->
  <!-- PC表示    -->
  <!--          -->
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageLabo
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageLabo>
    <v-row>
      <v-col cols="12" sm="12" lg="5" md="5" class="mb-8">
        <ContractCard />
        <ContractNameCard class="mt-4" />
      </v-col>
      <v-col cols="12" sm="12" lg="7" md="7" class="mb-8">
        <ContractPrintCard />
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
      <v-col cols="12" sm="12" class="mb-4">
        <ContractCard />
      </v-col>
      <v-col cols="12" sm="12" class="mb-4">
        <ContractNameCard />
      </v-col>
      <v-col cols="12" sm="12" class="mb-4">
        <ContractPrintCard />
      </v-col>
    </v-row>
  </v-container>
  </div>
  
</template>
  
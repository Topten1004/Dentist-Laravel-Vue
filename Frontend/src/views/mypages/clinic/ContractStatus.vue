<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageClinic from "@/mycomponents/BaseTitleImageClinic.vue";
import ContractCard from "@/mycomponents/ContractCard.vue"
import ContractPrintCard from "@/mycomponents/ContractPrintCard.vue"
import ContractNameCard from "@/mycomponents/ContractNameCard.vue";

const display = useDisplay();

  // アクセスしているユーザータイプ
const users = ref( {usertype: 'clinic'});

const page = ref({ title: "ご契約状況" });
const contents = reactive(
  {
    titleheader: "歯科医療機関",
    subtitle: "Check Your Contracts !",
    url: "/",
    btnname: "+お支払い",
  },
);
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
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12">
          <BaseTitleImageClinic
            :title="page.title"
            :titleheader="contents.titleheader"
            :subtitle="contents.subtitle"
            :url="contents.url"
            :btnname="contents.btnname"
            class="mb-4">
          </BaseTitleImageClinic>
        <v-spacer></v-spacer>
      </v-col>
    </v-row>
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
    <BaseTitleImageClinic
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageClinic>

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
  
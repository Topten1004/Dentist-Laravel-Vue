<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import TheProfileCard from "@/mycomponents/TheProfileCard.vue";
import ClinicProfileOpen from "@/mycomponents/ClinicProfileOpen.vue";
import SatisticsGraph from "@/mycomponents/artisan-components/SatisticsGraph.vue";
import BaseTitleImageClinic from "@/mycomponents/BaseTitleImageClinic.vue";
import TheRevenueCardsClinic1 from "@/mycomponents/clinic-components/TheRevenueCardsClinic1.vue";

const display = useDisplay();
const page = ref({ title: "公開情報" });

  // アクセスしているユーザータイプ
const users = ref( {usertype: 'clinic'});
const contents = reactive(
  {
    titleheader: "歯科医療機関",
    subtitle: "Check Your Clinic !",
    url: "/mypages/clinic/egaocoin",
    btnname: "笑顔コイン",
  },
);

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
          :btnname="contents.btnname">
        </BaseTitleImageClinic>
        <v-spacer></v-spacer>
      </v-col>
    </v-row>
      
    <v-row>
      <v-col cols="12" class="mb-4">
        <TheProfileCard class="rounded-0" elevation="2" />
      </v-col>
      <v-col cols="12" class="mb-4">
        <TheRevenueCardsClinic1 class="rounded-0" />
      </v-col>
      <v-col cols="12" class="mb-4">
        <!-- グラフデータがなければ非表示 -->
        <SatisticsGraph :usertype="users.usertype" class="rounded-0" elevation="2" />
      </v-col>
      <v-col cols="12" class="mb-4">
        <ClinicProfileOpen :usertype="users.usertype" class="rounded-0" elevation="2" />
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
      <v-col cols="12" class="mb-4">
        <TheProfileCard class="rounded-0" elevation="2" />
      </v-col>
      <v-col>
        <TheRevenueCardsClinic1 class="rounded-0" />
      </v-col>
      <v-col cols="12" class="mb-4">
        <SatisticsGraph :usertype="users.usertype" class="rounded-0" elevation="2" />
      </v-col>
      <v-col cols="12" class="mb-4 rounded-0">
        <ClinicProfileOpen :usertype="users.usertype" class="rounded-0" elevation="2" />
      </v-col>
    </v-row>
  </v-container>
  </div>
  
</template>
  
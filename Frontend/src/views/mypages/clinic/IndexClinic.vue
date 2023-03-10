<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageClinic from "@/mycomponents/BaseTitleImageClinic.vue";
import TheRevenueOpenCards from "@/mycomponents/TheRevenueOpenCards.vue";
import NewsAlertClosable from "@/mycomponents/NewsAlertClosable.vue";
import InviteCard from "@/views/mypages/common/InviteCard.vue";
import SideBannerCard from "@/mycomponents/SideBannerCard.vue";
import CardSearch from "@/views/mypages/common/form/CardSearch.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import DiscriptionTsuraiCoin from "@/views/mypages/common/DiscriptionTsuraiCoin.vue"
import DiscriptionEgaoCoin from "@/views/mypages/common/DiscriptionEgaoCoin.vue"
import CardImageTsurai from "@/assets/images/background/tsurai1.jpg"
import CardImageEgao from "@/assets/images/background/smile_y2.jpg"

const display = useDisplay();
const page = ref({ title: "IndexPage (未ログイン)" });
const contents = reactive(
  {
    titleheader: "歯科医療機関",
    subtitle: "Check Your Products !..",
    url: "/login",
    btnname: "ログイン",
  },
);

</script>

<template>
<!--          -->
<!-- PC表示    -->
<!--          -->
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
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <TheRevenueOpenCards />
    </v-col>
    <v-col cols="12" sm="12" lg="9">
      <NewsAlertClosable class="mb-6"/>

    <BaseCard2 heading="歯科医療機関・歯科技工所 検索">
        <CardSearch />
    </BaseCard2>

    </v-col>

    <v-col cols="12" sm="12" lg="3">
      <InviteCard class="mb-4" elevation="2" />
      <SideBannerCard />
    </v-col>

    <v-col cols="12">
      <DiscriptionEgaoCoin usertype="clinic" />
    </v-col>
    <v-col cols="12">
      <DiscriptionTsuraiCoin usertype="clinic" />
    </v-col>
  </v-row>
</v-container>

<!--          -->
<!-- スマホ表示    -->
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
      <!-- InviteCardは、未ログイン時のみ表示する -->
      <v-col cols="12" sm="12" lg="12">
        <InviteCard elevation="2" />
      </v-col>

      <v-col cols="12" sm="12" lg="9">
        <NewsAlertClosable class="mb-4"/>
        <BaseCard2 heading="歯科医療機関・歯科技工所 検索">
          <CardSearch />
        </BaseCard2>

      </v-col>
      <v-col cols="12" sm="12" lg="3">
        <SideBannerCard />
      </v-col>

      <v-col cols="12">
        <!-- <v-img
          :src="CardImageEgao"
          max-height="300px"
          cover>
        </v-img> -->
        <DiscriptionEgaoCoin usertype="clinic" />
      </v-col>
      <v-col cols="12">
        <!-- <v-img
          :src="CardImageTsurai"
          max-height="300px"
          cover>
        </v-img> -->
        <DiscriptionTsuraiCoin usertype="clinic" />
      </v-col>

      <v-col cols="12" sm="12" lg="12">
        <TheRevenueOpenCards />
      </v-col>

    </v-row>
  </v-container>
</div>

</template>

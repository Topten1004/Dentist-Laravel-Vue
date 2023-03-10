<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageDentist from "@/mycomponents/BaseTitleImageDentist.vue";
import TheRevenueOpenCards from "@/mycomponents/TheRevenueOpenCards.vue";
import NewsAlertClosable from "@/mycomponents/NewsAlertClosable.vue";
import InviteCard from "@/views/mypages/common/InviteCard.vue";
import SideBannerCard from "@/mycomponents/SideBannerCard.vue";
import DiscriptionTsuraiCoin from "@/views/mypages/common/DiscriptionTsuraiCoin.vue"
import DiscriptionEgaoCoin from "@/views/mypages/common/DiscriptionEgaoCoin.vue"

const display = useDisplay();
const page = ref({ title: "IndexPage (未ログイン)" });
const contents = reactive(
  {
    titleheader: "歯科医師",
    subtitle: "Check Your works !",
    url: "/login",
    btnname: "ログイン",
  },
);

</script>

<template>
<!-- PC用表示 -->
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
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <TheRevenueOpenCards />
    </v-col>
    <v-col cols="12" sm="12" lg="9">
      <NewsAlertClosable class="mb-8"/>
    </v-col>
    <v-col cols="12" sm="12" lg="3">
      <InviteCard class="mb-4" elevation="2" />
      <SideBannerCard />
    </v-col>
    <v-col cols="12">
      <DiscriptionEgaoCoin usertype="dentist" />
    </v-col>
    <v-col cols="12">
      <DiscriptionTsuraiCoin usertype="dentist" />
    </v-col>
  </v-row>
</v-container>


<!-- Mobile用表示 -->
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
        <InviteCard class="" elevation="2" />
      </v-col>
      <v-col cols="12" sm="12" lg="9">
        <NewsAlertClosable class=""/>
      </v-col>
      <v-col cols="12" sm="12" lg="3">
        <TheRevenueOpenCards />
        <SideBannerCard />
      </v-col>
      <v-col cols="12">
        <DiscriptionEgaoCoin usertype="dentist" />
      </v-col>
      <v-col cols="12">
        <DiscriptionTsuraiCoin usertype="dentist" />
      </v-col>
    </v-row>
  </v-container>
</div>
</template>


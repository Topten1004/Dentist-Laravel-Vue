<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";
import TheRevenueOpenCards from "@/mycomponents/TheRevenueOpenCards.vue";
import InviteCard from "@/views/mypages/common/InviteCard.vue";
import SideBannerCard from "@/mycomponents/SideBannerCard.vue";
import NewsAlertClosable from "@/mycomponents/NewsAlertClosable.vue";
import BaseCard from "@/components/BaseCard.vue";
import DiscriptionTsuraiCoin from "@/views/mypages/common/DiscriptionTsuraiCoin.vue"
import DiscriptionEgaoCoin from "@/views/mypages/common/DiscriptionEgaoCoin.vue"
const display = useDisplay();
const page = ref({ title: "歯科技工所 Index Page （未ログイン）" });
const contents = reactive(
  {
    titleheader: "歯科技技工所",
    subtitle: "Check Your Labo Prolile !",
    url: "/",
    btnname: "+笑顔コイン",
  },
);

</script>

<template>
<!-- PC用表示 -->
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
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <TheRevenueOpenCards />
    </v-col>

    <v-col cols="12" sm="12" lg="8">
      <BaseCard heading="運営事務局からのお知らせ" elevation="2">
        <NewsAlertClosable />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <InviteCard class="mb-4" elevation="2" />
      <SideBannerCard />
    </v-col>

    <v-col cols="12">
      <DiscriptionEgaoCoin usertype="labo" />
    </v-col>
    <v-col cols="12">
      <DiscriptionTsuraiCoin usertype="labo" />
    </v-col>

  </v-row>
</v-container>

<!-- Mobile用表示 -->
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
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <TheRevenueOpenCards />
    </v-col>
    <v-col cols="12" sm="12" lg="8">
      <BaseCard heading="運営事務局からのお知らせ" elevation="2">
        <NewsAlertClosable />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <InviteCard class="mb-4" elevation="2" />
      <SideBannerCard />
    </v-col>
    <v-col cols="12">
      <DiscriptionEgaoCoin usertype="labo" />
    </v-col>
    <v-col cols="12">
      <DiscriptionTsuraiCoin usertype="labo" />
    </v-col>
  </v-row>
</v-container>
</div>
</template>

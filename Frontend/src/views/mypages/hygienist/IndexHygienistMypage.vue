<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageHygienist from "@/mycomponents/BaseTitleImageHygienist.vue";
import TheRevenueCardsHygienist from "@/mycomponents/hygienist-components/TheRevenueCardsHygienist.vue";
import TheProfileEngineerCard from "@/mycomponents/TheProfileEngineerCard.vue";
import TopNewsHygienist from "@/mycomponents/hygienist-components/TopNewsHygienist.vue"
import BaseBreadcrumb2 from "@/mycomponents/BaseBreadcrumb2.vue";
import SideBannerCard from "@/mycomponents/SideBannerCard.vue";
import EngineerList from "@/mycomponents/hygienist-components/EngineerList.vue"
import SatisticsGraph from "@/mycomponents/hygienist-components/SatisticsGraph.vue";

const page = ref({ title: "マイページ" });
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

  <!--      -->
  <!-- PC用 -->
  <!--      -->
<v-container v-if="display.mdAndUp.value">
  <BaseTitleImageHygienist
    :title="page.title"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname"
    class="mb-4">
  </BaseTitleImageHygienist>

  <v-row>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <TheRevenueCardsHygienist />
    </v-col>
    <v-col cols="12" sm="12" lg="9">
      <TopNewsHygienist elevation="1" class="mb-4" />
      <SatisticsGraph />
    </v-col>
    <v-col cols="12" sm="12" lg="3">
      <TheProfileEngineerCard class="mb-4"/>
      <SideBannerCard />
    </v-col>
    <v-col cols="12" sm="12" lg="12">
      <EngineerList />
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
      :btnname="contents.btnname">
    </BaseTitleImageHygienist>

  <v-container>
    <v-row>
      <v-col cols="12" sm="12" lg="12" class="mt-3">
        <TheRevenueCardsHygienist />
      </v-col>
      <v-col cols="12" sm="12" lg="9">
        <TopNewsHygienist elevation="1" class="mb-4" />
        <SatisticsGraph />
      </v-col>
      <v-col cols="12" sm="12" lg="3">
        <TheProfileEngineerCard class="mb-4"/>
        <SideBannerCard />
      </v-col>
      <v-col cols="12" sm="12" lg="12">
        <EngineerList />
      </v-col>
    </v-row>
  </v-container>
</div>

</template>

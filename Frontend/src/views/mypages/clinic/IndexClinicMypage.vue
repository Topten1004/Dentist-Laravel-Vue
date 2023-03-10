<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageClinic from "@/mycomponents/BaseTitleImageClinic.vue";
import TheRevenueCardsClinic1 from "@/mycomponents/clinic-components/TheRevenueCardsClinic1.vue";
import TheRevenueCardsClinic2 from "@/mycomponents/clinic-components/TheRevenueCardsClinic2.vue";
import TheProfileEngineerCard from "@/mycomponents/TheProfileEngineerCard.vue";
import TopNewsClinic from "@/mycomponents/clinic-components/TopNewsClinic.vue"
import BaseBreadcrumb2 from "@/mycomponents/BaseBreadcrumb2.vue";
import SideBannerCard from "@/mycomponents/SideBannerCard.vue";
import EngineerList from "@/mycomponents/artisan-components/EngineerList.vue"
import SatisticsGraph from "@/mycomponents/clinic-components/SatisticsGraph.vue";
import PaymentAlert from "../common/PaymentAlert.vue";

const page = ref({ title: "マイページ（管理者専用）" });
const contents = reactive(
  {
    titleheader: "歯科医療機関",
    subtitle: "Check Your MyPage !..",
    url: "/mypages/clinic/regist/account",
    btnname: "＋登録",
  },
);

const display = useDisplay();
</script>

<template>
  <!--  -->
  <!-- PC用 -->
  <!--  -->
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
      <TheRevenueCardsClinic1 />
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <TheRevenueCardsClinic2 />
    </v-col>
    <v-col cols="12" sm="12" lg="9">
      <TopNewsClinic elevation="1" class="mb-4" />
      <SatisticsGraph />
    </v-col>
    <v-col cols="12" sm="12" lg="3">
      <PaymentAlert/>
      <TheProfileEngineerCard class="mb-4"/>
      <SideBannerCard />
    </v-col>
    <v-col cols="12" sm="12" lg="12">
      <EngineerList />
    </v-col>
  </v-row>
</v-container>

<!--  -->
<!-- Mobile用 -->
<!--  -->
  <div v-if="display.smAndDown.value">
    <BaseTitleImageClinic
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageClinic>

  <v-container>
    <v-row>
      <v-col cols="12" sm="12" lg="9">
        <TopNewsClinic elevation="1" class="mb-4" />
        <SatisticsGraph />
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-3">
        <TheRevenueCardsClinic1 />
      </v-col>
      <v-col cols="12" sm="12" lg="12" class="mt-3">
        <TheRevenueCardsClinic2 />
      </v-col>
      <v-col cols="12" sm="12" lg="3">
        <PaymentAlert/>
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


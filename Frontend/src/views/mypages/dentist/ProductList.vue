<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageDentist from "@/mycomponents/BaseTitleImageDentist.vue";
import GridProductsList from "@/mycomponents/GridProductsList.vue";
import BaseBreadcrumb2 from "@/mycomponents/BaseBreadcrumb2.vue";

const display = useDisplay();
const page = ref({ title: "4.3 製品 一覧" });
const contents = reactive(
  {
    titleheader: "歯科医師",
    subtitle: "Check Your Products !",
    url: "/mypages/dentist/egaocoin",
    btnname: "笑顔コイン",
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
      <GridProductsList />
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
      <v-col cols="12" sm="12" lg="12" class="mt-3">
        <GridProductsList />
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

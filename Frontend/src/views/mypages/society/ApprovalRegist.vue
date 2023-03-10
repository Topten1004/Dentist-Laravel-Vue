<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImageSociety from "@/mycomponents/BaseTitleImageSociety.vue";
import EngineerList from "@/mycomponents/society-components/EngineerList.vue";
import { useDisplay } from "vuetify";
const display = useDisplay();
const page = ref({ title: "学会・団体 会員承認登録" });
const contents = reactive(
  {
    titleheader: "学会 団体",
    subtitle: "Check Your Members !",
    url: "/mypages/society/",
    btnname: "マイページ",
  },
);

</script>


<template>
  <v-container>
  <BaseTitleImageSociety
    :title="page.title"
    :titleheader="contents.titleheader"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname"
    class="mb-4">
  </BaseTitleImageSociety>

  <v-row>
    <v-col cols="12" lg="12" class="">
        <EngineerList />
    </v-col>
  </v-row>
  </v-container>
</template>



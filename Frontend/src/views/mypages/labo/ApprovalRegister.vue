<script setup lang="ts">
import { ref,reactive, computed } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import ApprovalStaffsCard from "../common/ApprovalStaffsCard.vue";

const page = ref({ title: "承認完了画面" });
const contents = reactive(
  {
    titleheader: "歯科技技工所",
    subtitle: "Check Your Labo Prolile !",
    url: "/",
    btnname: "+笑顔コイン",
  },
);
const display = useDisplay();

</script>


<template>
  <v-container>

    <BaseTitleImageLabo
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageLabo>

    <v-row class="d-flex justify-center">
      <v-col cols="12" lg="6">

        <ApprovalStaffsCard />
      
      </v-col>
    </v-row>
  </v-container>
</template>
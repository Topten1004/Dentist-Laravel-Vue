<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageTop from "@/mycomponents/BaseTitleImageTop.vue";
import ContactGridEngineer from "@/mycomponents/ContactGridEngineer.vue";

const display = useDisplay();

const page = ref({ title: "所属一覧" });
const contents = reactive(
  {
    subtitle: "Check Your Coworkers !",
    url: "/mypages/artisan/profile",
    btnname: "MyProfile",
  },
);

</script>

<template>
<!-- PC用表示 -->
<v-container v-if="display.mdAndUp.value">
  <div>
    <BaseTitleImageTop
      :title="page.title"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageTop>
  </div>

  <v-row>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <ContactGridEngineer />
    </v-col>
  </v-row>

  </v-container>


<!-- Mobile用表示 -->

<div v-if="display.smAndDown.value">
  <div class="">
    <BaseTitleImageTop
      :title="page.title"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageTop>
  </div>

  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" lg="12" class="mt-3">
        <ContactGridEngineer />
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

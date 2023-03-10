<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageClinic from "@/mycomponents/BaseTitleImageClinic.vue";
import ContactGridEngineer from "@/mycomponents/ContactGridEngineer.vue";

const display = useDisplay();
const page = ref({ title: "スタッフ一覧・笑顔コイン付与" });
const contents = reactive(
  {
    titleheader: "歯科医療機関",
    subtitle: "Check Your Clinic Staff !",
    url: "/mypages/clinic/egaocoin",
    btnname: "+笑顔コイン",
  },
);
</script>

<template>
<!--  -->
<!-- PC用表示 -->
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
        <ContactGridEngineer />
      </v-col>
    </v-row>

  </v-container>

  <!--  -->
  <!-- Mobile用表示 -->
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
        <v-col cols="12" sm="12" lg="12" class="mt-3">
          <ContactGridEngineer />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

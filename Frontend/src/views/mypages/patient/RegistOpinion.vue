<script setup lang="ts">
import { ref,reactive } from "vue";
import { RouterLink } from "vue-router";
import BaseTitleImagePatient from "@/mycomponents/BaseTitleImagePatient.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import OpinionForm from "@/views/mypages/common/form/OpinionForm.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import { useDisplay } from "vuetify";

const display = useDisplay();

const page = ref({ title: "笑顔アンケート＆笑顔コイン付与" });
const contents = reactive(
  {
    titleheader: "患者さん",
    subtitle: "Check Your Products !..",
    url: "/patient/opinion",
    btnname: "+笑顔コイン",
  },
);
</script>


<template>
<!--  -->
<!-- PC用表示 -->
<!--  -->
<v-container v-if="display.mdAndUp.value">
  <BaseTitleImagePatient
    :title="page.title"
    :titleheader="contents.titleheader"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname"
    class="mb-4">
  </BaseTitleImagePatient>
  <v-row>
    <v-col cols="12" lg="12" class="d-flex align-items-stretch">
      <BaseCard2 heading="回答・笑顔コイン付与">
        <OpinionForm />
      </BaseCard2>
    </v-col>
  </v-row>
</v-container>

<!--  -->
<!-- Mobile用表示 -->
<!--  -->
<div v-if="display.smAndDown.value">
  <BaseTitleImagePatient
    :title="page.title"
    :titleheader="contents.titleheader"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname">
  </BaseTitleImagePatient>

  <v-container>
    <v-row>
      <v-col cols="12" lg="12" class="d-flex align-items-stretch no-ellipsis">
        <BaseCard2 heading="回答・笑顔コイン付与" class="no-ellipsis">
          <OpinionForm />
        </BaseCard2>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>



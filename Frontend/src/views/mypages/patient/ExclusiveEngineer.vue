<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImagePatient from "@/mycomponents/BaseTitleImagePatient.vue";
import GridExclusiveList from "@/mycomponents/GridExclusiveList.vue";

// アクセスしているユーザータイプ
const users = reactive( {usertype: 'patient'});

const display = useDisplay();
const page = ref({ title: "貴方の専任済 歯科医療技術者" });
const contents = reactive(
  {
    titleheader: "患者さん", //　←【注意】ここにuser_nameを入れたいです！
    subtitle: "Your Dental Technologists",
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
    <v-col cols="12" sm="12" lg="12">
      <GridExclusiveList />
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
      <GridExclusiveList />
    </v-row>
  </v-container>
</div>

</template>

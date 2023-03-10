<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageDentist from "@/mycomponents/BaseTitleImageDentist.vue";
import GridCareList from "@/mycomponents/GridCareList.vue";

const display = useDisplay();

// アクセスしているユーザータイプ
const users = ref( {usertype: 'dentist'});

const page = ref({ title: "治療記録 一覧" });
const contents = reactive(
  {
    titleheader: "歯科医師",
    subtitle: "患者さんの治療履歴一覧",
    url: "/",
    btnname: "+笑顔コイン",
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
      <v-alert
      icon="mdi-alert-outline"
      variant="tonal"
      type="success"
      class="my-2 mb-3 caption pa-3">
        治療記録一覧を参照するには、
        治療後に名刺を受け取った患者さんがシステムに利用登録をして、
        名刺に記載された情報と患者IDを紐付ける必要があります。
      </v-alert>
    </v-col>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <GridCareList />
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
      <GridCareList />
    </v-col>
  </v-row>
</v-container>
</div>
</template>


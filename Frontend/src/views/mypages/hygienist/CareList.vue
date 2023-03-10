<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageHygienist from "@/mycomponents/BaseTitleImageHygienist.vue";
import GridCareList from "@/mycomponents/GridCareList.vue";
import BaseBreadcrumb2 from "@/mycomponents/BaseBreadcrumb2.vue";

const display = useDisplay();

// アクセスしているユーザータイプ
const users = ref( {usertype: 'hygienist'});

const page = ref({ title: "治療記録　一覧" });
const contents = reactive(
  {
    subtitle: "患者さんの治療履歴一覧",
    url: "/",
    btnname: "+笑顔コイン",
  },
);

const breadcrumbs = ref([
  {
    text: "Home",
    disabled: false,
    to: "#",
  },
  {
    text: "治療履歴 一覧",
    disabled: true,
    exact: true,
  },
]);

</script>

<template>
  <!-- PC用表示 -->
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
  <BaseTitleImageHygienist
    :title="page.title"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname">
  </BaseTitleImageHygienist>

  <v-container>
    <v-row>
      <v-col cols="12" sm="12" lg="12" class="mt-3">
        <GridCareList />
      </v-col>
    </v-row>
  </v-container>
</div>
</template>


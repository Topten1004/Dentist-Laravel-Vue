<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import LabosListData from "@/views/admin/admin-components/LabosListData.vue";
import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";

const display = useDisplay();

const page = ref({ title: "総合管理者 Labos List" });
const contents = reactive(
  {
    subtitle: "Check Your Userss !..",
    url: "/egaocoin",
    btnname: "+笑顔コイン",
  },
);
</script>

<template>

<!-- PC用表示 -->
<v-container v-if="display.mdAndUp.value">
  <v-row>
    <v-col cols="12" sm="12" md="12" lg="12">
        <BaseTitleImageLabo
          :title="page.title"
          :subtitle="contents.subtitle"
          :url="contents.url"
          :btnname="contents.btnname">
        </BaseTitleImageLabo>
      <v-spacer></v-spacer>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <BaseCard2 heading="歯科技工所ユーザー 一覧">
        <LabosListData />
      </BaseCard2>
    </v-col>
  </v-row>
</v-container>

</template>

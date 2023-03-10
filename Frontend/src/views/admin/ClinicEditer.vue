<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import LabosListData from "@/views/admin/admin-components/LabosListData.vue";
import BaseTitleImageClinic from "@/mycomponents/BaseTitleImageClinic.vue";

const display = useDisplay();

const page = ref({ title: "総合管理者 Clinic Editer" });
const contents = reactive(
  {
    subtitle: "Clinic Editer !..",
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
        <BaseTitleImageClinic
          :title="page.title"
          :subtitle="contents.subtitle"
          :url="contents.url"
          :btnname="contents.btnname">
        </BaseTitleImageClinic>
      <v-spacer></v-spacer>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <BaseCard2 heading="歯科医療機関 情報更新">
        <LabosListData />
      </BaseCard2>
    </v-col>
  </v-row>
</v-container>

</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import UsersListData from "@/views/admin/admin-components/UsersListData.vue";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import GridMedicalList from "@/mycomponents/GridMedicalList.vue";
import BaseTitleImagePatient from "@/mycomponents/BaseTitleImagePatient.vue";
import { useDisplay } from "vuetify";

const display = useDisplay();

const page = ref({ title: "総合管理者 IndexPage" });
const contents = reactive(
  {
    subtitle: "Admin Top Page !",
  },
);
</script>

<template>

<!-- PC用表示 -->
<v-container v-if="display.mdAndUp.value">
  <v-row>
    <v-col cols="12" sm="12" md="12" lg="12">
        <BaseTitleImagePatient
          :title="page.title"
          :subtitle="contents.subtitle">
        </BaseTitleImagePatient>
      <v-spacer></v-spacer>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" sm="12" lg="12" class="">
      <BaseCard2 heading="ユーザー検索フォーム">
        <UsersListData />
        <!-- <GridMedicalList /> -->
      </BaseCard2>
    </v-col>
  </v-row>
</v-container>


<!-- Mobile用表示 -->
<div v-if="display.smAndDown.value">
<v-row>
  <v-col cols="12" sm="12" md="12" lg="12">
      <BaseTitleImagePatient
        :title="page.title"
        :subtitle="contents.subtitle">
      </BaseTitleImagePatient>
    <v-spacer></v-spacer>
  </v-col>
</v-row>

<v-row>
  <v-col cols="12" sm="12" lg="12" class="">
      <BaseCard2 heading="ユーザー検索フォーム">
        <GridMedicalList />
      </BaseCard2>
  </v-col>
</v-row>

</div>

</template>

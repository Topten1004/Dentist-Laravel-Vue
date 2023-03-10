<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import UsersListData from "@/views/admin/admin-components/UsersListData.vue";
import BaseTitleImageClinic from "@/mycomponents/BaseTitleImageClinic.vue";

const display = useDisplay();

const page = ref({ title: "総合管理者 ユーザー検索" });
const contents = reactive(
  {
    subtitle: "User Search !",
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
          :subtitle="contents.subtitle">
        </BaseTitleImageClinic>
      <v-spacer></v-spacer>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <BaseCard2 heading="歯科医療機関ユーザー 一覧">
        <UsersListData />
      </BaseCard2>
    </v-col>
  </v-row>
</v-container>

</template>

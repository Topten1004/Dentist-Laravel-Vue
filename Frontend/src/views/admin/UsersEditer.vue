<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
import CardRegisterDetail from "@/views/mypages/common/form/CardRegisterDetail.vue";
import UsersListData from "@/views/admin/admin-components/UsersListData.vue";
import BaseTitleImagePatient from "@/mycomponents/BaseTitleImagePatient.vue";

const display = useDisplay();

const page = ref({ title: "総合管理者 Users Editer" });
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
        <BaseTitleImagePatient
          :title="page.title"
          :subtitle="contents.subtitle"
          :url="contents.url"
          :btnname="contents.btnname">
        </BaseTitleImagePatient>
      <v-spacer></v-spacer>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" sm="12" lg="12" class="mt-3">
      <BaseCard2 heading="3. 詳細・経歴情報登録">
        <CardRegisterDetail></CardRegisterDetail>
      </BaseCard2>
    </v-col>
  </v-row>
</v-container>

</template>

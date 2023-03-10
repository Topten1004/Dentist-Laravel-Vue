<script setup lang="ts">
  import { ref,reactive } from "vue";
  import { useDisplay } from "vuetify";
  import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
  import BaseCard2 from "../common/BaseCard2.vue";
  import BaseCardMobile from "../common/BaseCardMobile.vue";
  import BaseTitleImageTop from "@/mycomponents/BaseTitleImageTop.vue";
  import TableAccessCodeList from "../common/table/TableAccessCodeList.vue";

  const page = ref({ title: "発行済 アクセスコード 一覧" });
  const contents = reactive(
  {
    subtitle: "Check Your AccessCode !",
    url: "/mypages/artisan/profile",
    btnname: "MyProfile",
  },
);
  const display = useDisplay();

  </script>

<template>
  <!-- PC表示 -->
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageTop
      :title="page.title"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageTop>
  <v-row>
    <v-col cols="12" lg="12" sm="12">
      <BaseCard2 heading="名刺発行済情報">
        <div class="ma-4">
          {{ "engineer.name" }}さんが登録した名刺アクセス情報の一覧です。
          ご登録いただきました技工装置や口腔内画像は、サーバーに保存しました。<br>
          名刺記載の情報（ ①製品番号　②アクセスコード ）が正しいかご確認ください。
        </div>
          <TableAccessCodeList></TableAccessCodeList>
      </BaseCard2>
    </v-col>
  </v-row>
  </v-container>

  <!-- スマホ表示 -->
  <div v-if="display.smAndDown.value" class="ma-0" fluid>
      <BaseTitleImageTop
        :title="page.title"
        :subtitle="contents.subtitle"
        :url="contents.url"
        :btnname="contents.btnname">
      </BaseTitleImageTop>

    <v-container>

      <BaseCardMobile heading="名刺記載情報..">
            <div class="ma-4">
              {{ "engineer.name" }}さんの製品登録済情報一覧<br>
              ①製品番号②アクセスコードを正しく名刺に記載してください。
            </div>
              <TableAccessCodeList></TableAccessCodeList>
      </BaseCardMobile>

    </v-container>
  </div>
</template>

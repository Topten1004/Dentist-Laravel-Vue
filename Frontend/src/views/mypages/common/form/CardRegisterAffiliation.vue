<script setup lang="ts">
import { ref } from "vue";
import WorkplaceList from "../WorkplaceList.vue";

const divisions = ref(["歯科技工士","歯科衛生士","歯科医師"]);
const rules = ref([
  (v: string | any[]) => v.length <= 25 || "Max 25 characters",
]);

</script>

<template>
  <div class="mx-4 mb-8">
    
    <!-- ここは　v-stepper で実装？。 -->
    <div>
      登録順　:  
      <v-btn
      class="ma-2"
      variant="outlined"
      color="success">
      １.氏名登録
      </v-btn> →  
      <v-btn
      class="ma-2"
      color="success"
      size="large">
      ２.職場連携登録
      </v-btn> →  
      <v-btn
      class="ma-2"
      color="success"
      variant="outlined">
      ３.名刺掲載情報登録
      </v-btn> →  
      <v-btn
      class="ma-2"
      color="success"
      variant="outlined">
      4.所属学会登録
      </v-btn>
    </div>

      <v-alert
      icon="mdi-alert-outline"
      outlined
      variant="tonal"
      type="error"
      class="mb-4 caption pa-3"
      >登録された医療機関はありません。アクセスコード等を正しく入力してください。
      </v-alert>

    <h6 class="text-subtitle-1 text-grey-darken-1">
      <!--ログインしている方の名前 {{engineer.name}} -->＊＊さんが現在従事している職場と連携登録する必要があります。<br> 
      当システムに事前登録済の歯科医療機関や歯科技工所の管理者から、「会員番号」と「アクセスコード」教えてもらって下記に登録し、
      管理者からの「承認」をお待ちください。
    </h6>

    <v-card-text class="pa-2">

      <v-row class="mt-1">
        <v-col cols="12" sm="6">
          <v-text-field label="就業先番号（歯科医療機関・歯科技工所の会員番号）" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field label="就業先登録コード（アクセスコード）" variant="outlined"></v-text-field>
        </v-col>
      </v-row>

      <v-row class="mt-1">
        <v-col cols="12">
          ※同じ業種で職場が変わった場合でも職歴として記録が残ります。
          現在就業している職場を１件のみ登録可能です。複数箇所で就業している場合は、
          就業先が当システムに登録していることを確認の上、新規アカウントを作成してご利用ください。
        </v-col>
      </v-row>
    </v-card-text>

    <v-alert
      icon="mdi-alert-outline"
      outlined
      variant="tonal"
      type="info"
      class="mb-4 caption pa-3"
      >無事送信されました。管理者により承認されましたら、設定の登録情報に記載されますのでしばらくお待ちください。
    </v-alert>
    <div class="py-5 border-top text-center">
      <v-btn color="primary" class="mr-6 text-capitalize" size="large">登録する</v-btn>
    </div>

<v-divider class="my-10"></v-divider>

<WorkplaceList />

  </div>
</template>

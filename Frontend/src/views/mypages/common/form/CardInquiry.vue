<script setup lang="ts">
import { ref } from "vue";
const value = ref("Message");
const division = ref(["会員情報関連", "操作関連", "名刺関連", "不具合関連", "その他"]);
const rules = ref([
  (v: string | any[]) => v.length <= 30 || "30文字以内で記入してください",
]);

</script>


<template>
  
    <v-alert
      icon="mdi-alert-outline"
      variant="tonal"
      type="info"
      class="caption pa-3">
      ここにアラート情報を記載します。
      </v-alert
    >
    <div class="pa-6">
    <h6 class="text-subtitle-1 text-grey-darken-1">
      各種問い合わせはこちらからお願いします。
    </h6>
    <v-form>
    <v-row class="mt-3">
      <v-col cols="12">
                
        <v-select
          :items="division"
          label="問合せ項目"
          class="mt-0 pt-0"
          variant="outlined"
        ></v-select>

        <v-text-field 
        label="お名前(ニックネーム不可)" 
        variant="outlined"
        required
        ></v-text-field>

        <v-text-field 
        label="メールアドレス" 
        variant="outlined"
        required
        ></v-text-field>

        <v-text-field 
        label="会員番号" 
        variant="outlined"
        ></v-text-field>

        <v-text-field 
        label="件名：タイトル" 
        variant="outlined"
        required
        ></v-text-field>

        <v-textarea
          variant="outlined"
          label="本文：できるだけ具体的にお願いします。"
          rows="4"
          :rules="rules"
          counter
        ></v-textarea>
      </v-col>
    </v-row>

    <div class="pa-5 border-top text-center">
      <v-btn color="primary" class="mr-2 text-capitalize">送信する</v-btn>
    </div>
  </v-form>
  </div>
  
</template>





<script setup lang="ts">
import { ref } from "vue";
import SelectionControlsChkSpecialties from "@/mycomponents/SelectionControlsChkSpecialties.vue";
import SelectionControlsChkSocieties from "../../../myComponents/societyComponents/SelectionControlsChkSocieties.vue";
import DialogsModelNameCard from "@/mycomponents/DialogsModelNameCard.vue";
const interest = ref(["Desiging", "Development", "Marketing"]);
const budget = ref(["Less then $5000", "$5000 - $10000"]);
const rules = ref([
  (v: string | any[]) => v.length <= 25 || "Max 25 characters",
]);
</script>

<template>
  <div>
    <v-alert
      icon="mdi-alert-outline"
      outlined
      variant="tonal"
      type="info"
      class="mb-4 caption pa-3"
      >ここにアラート情報等を記載する.</v-alert
    >
    <h6 class="text-subtitle-1 text-grey-darken-1">
      名刺掲載情報です。経歴・所属学会など正しく記入してください。
      <!-- <v-btn variant="outlined" color="error" rounded="pill" size="small">名刺サンプル</v-btn> -->
      <dialogs-model-name-card></dialogs-model-name-card>
    </h6>

    <v-card-text class="pa-3">

      <v-row class="mt-1">
        <v-col cols="12">
          <v-text-field label="役職/担当部署 : official_position" variant="outlined"></v-text-field>
          <span class="text-10">※経歴は上位4件までを名刺に記載し、それ以外の内容は歯科技工士検索結果で表示されます。</span>
          <v-textarea
            label="経歴（::改行可） : career"
            variant="outlined"
            rows="5"
           >
           </v-textarea>

           <selection-controls-chk-specialties></selection-controls-chk-specialties>
           <selection-controls-chk-societies></selection-controls-chk-societies>

           <v-text-field label="25文字程度のキャッチフレーズ :catchphrase" variant="outlined"></v-text-field>
           <v-textarea
            label="特徴・特技・その他 :feature"
            variant="outlined"
            rows="4"
            >
           </v-textarea>
        </v-col>
      </v-row>
    </v-card-text>
    
    <div class="pa-5 border-top text-right">
      <v-btn color="primary" class="mr-2 text-capitalize">登録する</v-btn>
      <v-btn color="secondary" dark>更新する</v-btn>
    </div>
  </div>
</template>



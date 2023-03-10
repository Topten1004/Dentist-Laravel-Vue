<script setup lang="ts">
import { ref } from "vue";
import SelectionControlsChkSpecialties from "@/mycomponents/SelectionControlsChkSpecialties.vue";
import SelectionControlsChkSocieties from "@/mycomponents/society-components/SelectionControlsChkSocieties.vue";
import DialogsModelNameCard from "@/mycomponents/DialogsModelNameCard.vue";
const types = ref([
  "歯科医師として利用する。",
  "歯科技工士として利用する。",
  "歯科衛生士として利用する。",
  ]);
const interest = ref(["Desiging", "Development", "Marketing"]);
const budget = ref(["Less then $5000", "$5000 - $10000"]);
const rules = ref([
  (v: string | any[]) => v.length <= 25 || "Max 25 characters",
]);
</script>

<template>
  <div class="mx-8 mb-8">
    <div>
      ここにStepperを記載　１　→ (２..)　→ ３
    </div>
    <v-alert
      icon="mdi-alert-outline"
      outlined
      variant="tonal"
      type="info"
      class="mb-4 caption pa-3"
      >ここにアラート情報等を記載する.0</v-alert
    >
    <h6 class="text-subtitle-1 text-grey-darken-1">
      名刺掲載情報です。経歴・所属学会など正しく記入してください。
      <dialogs-model-name-card />
    </h6>

    <v-card-text class="pa-3">

      <v-row class="mt-1">
        <v-col cols="12">
          <div>利用者タイプ：　変更不可。※FAQ参照</div>
          <v-text-field label="既に選択された利用者タイプを記載する。例：　歯科技工士として利用する。" variant="outlined" disabled></v-text-field>

          <div>所属情報：　歯科医療機関や歯科技工所の所属登録するには、医療機関及び技工所の管理者が所属承諾する必要があります。</div>
          <v-text-field label="所属　歯科技工所:" variant="outlined" disabled></v-text-field>
          <v-text-field label="お名前:name" variant="outlined"></v-text-field>
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

           <v-text-field label="25文字程度キャッチフレーズ :catchphrase" variant="outlined"></v-text-field>
           <v-textarea
            label="特徴・特技・その他 :feature"
            variant="outlined"
            rows="4"
            >
           </v-textarea>
        </v-col>
      </v-row>
    </v-card-text>
    
    <div class="py-5 border-top text-center">
      <v-btn color="primary" class="mr-6 text-capitalize" size="large">登録する</v-btn>
      <v-btn color="secondary" dark size="large">更新する</v-btn>
    </div>
  </div>
</template>



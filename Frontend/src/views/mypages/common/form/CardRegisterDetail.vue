<script setup lang="ts">
import { ref } from "vue";
import SelectionControlsChkSpecialties from "@/mycomponents/SelectionControlsChkSpecialties.vue";
import DialogsModelNameCard from "@/mycomponents/DialogsModelNameCard.vue";
import SelectionControlsRadioBgImage from "@/mycomponents/SelectionControlsRadioBgImage.vue";


const types = ref([
  "歯科医師として利用する。",
  "歯科技工士として利用する。",
  "歯科衛生士として利用する。",
  ]);

const rules = ref([
  (v: string | any[]) => v.length <= 25 || "Max 25 characters",
]);

</script>

<template>
  <div class="mx-8 mb-8">

    <!-- ここは　v-stepper で実装? 不要か要検討。 -->
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
      variant="outlined">
      ２.職場連携登録
      </v-btn> →  
      <v-btn
      class="ma-2"
      size="large"
      color="success">
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
      type="info"
      class="mb-4 caption pa-3"
      >ここにアラート情報等を記載する.。。</v-alert
    >
    <h6 class="text-subtitle-1 text-grey-darken-1">
      名刺掲載及び検索表示用の情報登録です。サンプルを参照の上、正しく記入してください。
      <dialogs-model-name-card />
    </h6>

    <v-card-text class="pa-3">
      <v-row class="mt-1">
        <v-col cols="12" lg="6" sm="12">
          <h3>▼お名前：　(disabled) </h3>
          <v-text-field
            label="登録済のお名前:name"
            variant="outlined"
            disabled>
          </v-text-field>
        </v-col>

        <v-col cols="12" lg="6" sm="12">
          <h3>▼利用者タイプ：※変更不可。(disabled)</h3>
          <v-text-field
            label="選択済利用者タイプを記載。例：　歯科技工士として利用する。"
            variant="outlined"
            disabled>
          </v-text-field>
        </v-col>

        <v-col cols="12" lg="4" sm="12">
          <v-text-field label="郵便番号(zip_code)" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" lg="8" sm="12">
          <v-text-field label="住所(adress)" variant="outlined"></v-text-field>
          <div><small>※この住所情報は、個人照合用等に用います。名刺には記載致しません。</small></div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <div class="mb-2">
            <h3>▼名刺掲載用画像アップロード</h3>
            （本人の顔写真推奨。イラストや他の写真を名刺に掲載希望の場合は、著作権等にご配慮ください。）
          </div>
            <v-file-input accept="image/*" label="File input"></v-file-input>
        </v-col>
      
        <v-col cols="12">
          <h3 class="mb-2">▼役職/担当部署情報(歯科技工所管理者による変更可) : </h3>
          <v-text-field label="役職/担当部署 : official_position" variant="outlined"></v-text-field>
        </v-col>
          
        <v-col col="12">
          <h3>▼経歴情報</h3>
          <div class="mb-2">※名刺に掲載したい経歴・所属学会事項等を上位約６件(1行約10文字以内)までで記入してください。次の４.学会登録では所属している学会の全てを登録可能です。※サンプル参照</div>
          <v-textarea
            label="経歴（::改行可） : career"
            variant="outlined"
            rows="5"
           >
           </v-textarea>
        </v-col>
          
        <v-col cols="12">
          <selection-controls-radio-bg-image></selection-controls-radio-bg-image>
          <selection-controls-chk-specialties></selection-controls-chk-specialties>
          <v-text-field label="25文字程度キャッチフレーズ :catchphrase" variant="outlined"></v-text-field>
          <v-textarea
            label="特徴・特技・その他 :feature"
            variant="outlined"
            rows="4">
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

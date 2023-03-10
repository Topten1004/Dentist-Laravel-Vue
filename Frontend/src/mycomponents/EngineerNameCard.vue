<script setup lang="ts">
import { ref } from "vue";

const namecards  = ref([
{
  engineer_id	: "	歯科技術者ID	",
  name	: "	名前	",
  phonetic	: "	よみがな	",
  nickname	: "	ニックネーム	",
  namecard_code	: "	名刺コード	",
  namecard_image	: "	名刺確認画像	",
  namecard_consent_flag	: "	名刺確認状況	",
  },
]);
</script>

<template>
<v-card elevation="2">
    <v-card-text class="pa-0">
      <div class="bg-secondary pa-4">
        <h2 class="">登録済名刺情報</h2>
        <h4 class="font-weight-light">Check Your NameCard !</h4>
      </div>

        <v-row class="pa-4">
          <v-col cols="12">
            <div class="d-flex justify-end">
              <h4>名刺確認状況：</h4>
              <!-- 状況は、CS24が更新します。 -->
              <!-- v-if {{profiles.namecard_consent_flag}}=== 1  echo[確認済] -->
              <v-btn color="error" elevation="2" size="small">未確認</v-btn> 
              <v-btn color="success" elevation="2" size="small">確認済</v-btn>
            </div>
          </v-col>
          

          <v-col cols="12" lg="6" md="6" sm="12">
            <h3 class="ml-6">お名前 : { profiles.name }</h3>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12">
            <div class="ml-6">({ profiles.phonetic } )</div>
          </v-col>
          
          <v-divider></v-divider>

          <v-col cols="12" class="ml-6 d-flex justify-start">
            <h3>名刺コード : </h3>
            <div class="ml-4">{ profiles.namecode } </div>
          </v-col>
          <v-divider></v-divider>
          

          <v-col cols="12" class="">
            <h3 class="mt-4 ml-6">名刺確認画像: </h3>
          </v-col>
            <v-col cols="12" lg="6" sm="12">
              <!-- 表面　個別　：　CS24が名刺を作成して画像をアップする。 
              src="https://smile24.org/src/assets/images/card/{ profiles.namecard_image }"
               -->
            <v-img 
               src="https://smile24.org/src/assets/images/card/omote.png"
               max-width="300px"
               class="border mx-auto"
               >
              </v-img>
          </v-col>
          <v-col cols="12" lg="6" sm="12" class="">
            <!-- 裏面　共通 -->
            <v-img 
               src="https://smile24.org/src/assets/images/card/ura.png"
               max-width="300px"
               class="border mx-auto"
               >
              </v-img>
          </v-col>
          <div class="my-2 mx-6 text-caption">
            ※裏面は共通です。裏面テンプレートは変更する場合があります。<br>
            ※印刷発行は、職場管理者にお問い合わせください。<br>
            ※「笑顔創造職人&reg;」は株式会社シーエス24社の登録商標ですので職場管理者が同社と利用契約を締結する必要があります。
          </div>
        </v-row>

    </v-card-text>
  </v-card>
</template>

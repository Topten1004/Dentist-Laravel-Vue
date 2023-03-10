<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";
import SelectionControlsChkSocieties from "@/mycomponents/society-components/SelectionControlsChkSocieties.vue";
import SocietyList from "@/mycomponents/society-components/SocietyList.vue";
const display = useDisplay();
</script>

<template>
  <div class="mx-4 mb-8">

    <!-- ここは　v-stepper で実装。 -->
    <div v-if="display.mdAndUp.value">
      登録順　:  
      <v-btn
      class="ma-2"
      variant="outlined"
      color="success">
      １.氏名登録
      </v-btn> →  
      <v-btn
      class="ma-2"
      variant="outlined"
      color="success">
      ２.名刺掲載情報登録
      </v-btn> →  
      <v-btn
      class="ma-2"
      variant="outlined"
      color="success">
      ３.職場連携登録
      </v-btn> →  
      <v-btn
      class="ma-2"
      color="success"
      size="large">
      4.所属学会登録
      </v-btn>
    </div>

    <v-alert
      icon="mdi-alert-outline"
      outlined
      variant="tonal"
      type="error"
      class="mb-4 caption pa-3"
      >ここにアラート情報等を記載する....</v-alert
    >
    <h6 class="text-subtitle-1 text-grey-darken-1 my-4">
      <!-- {{ engineer.name }}  -->＊＊さんが現在所属している学会や団体等を登録してください。<br>
      <strong>1.学会名検索</strong>をして、リストにあれば
      <v-btn class="mr-2" title="所属申請" size="x-small"> 2.所属申請</v-btn>ボタンから申請すると
      当該学会団体がこのシステムを利用して確認が取れたら<strong>「承認」</strong>マークが付与されます。
      それ以外は、<strong>「自己申告」</strong>マークが付与されます。
      所属学会が発行している会員番号の入力を推奨します。
      学会所属情報は、患者さんが検索した際に歯科医療従事者情報として表示されます。
    </h6>

<!-- 注意：　検索させて　テーブルで表示して　所属申請をする仕様。
   　　　　　こちらを採用する。
  　　注意：申請済が上位に来るようソートが必要。
-->
    <SocietyList />


<!-- 以下はサンプルです。 上記で実装を検討する。
<v-divider class="mb-8"></v-divider>
以下はサンプル　ーーーーーーーーーーーーーーーーーーーー
    <v-card-text class="pa-3">

      <v-row class="mt-1">
        <v-col cols="12">

          <div class="mb-2">
              engineer.name   ＊＊さんのお名前と住所情報は、当システムを利用している学会・団体等にその所属状況を照会する際に活用します。
          </div>
          <v-text-field label="住所をご記入ください。　:  adress" variant="outlined" class="mb-4"></v-text-field>

          <h2>所属学会・団体情報登録</h2>
           <selection-controls-chk-societies></selection-controls-chk-societies>

          <v-textarea
            label="上記一覧にない場合は、ここに記載してください。"
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
-->

  </div>
</template>

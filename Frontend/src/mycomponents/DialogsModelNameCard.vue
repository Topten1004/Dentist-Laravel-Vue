<script setup lang="ts">
import { ref } from "vue";

const dialog1 = ref(false);
const dialog2 = ref(false);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Model -->
  <!-- ----------------------------------------------------------------------------- -->

  <div>
    <!-- <v-btn color="secondary" @click="dialog = true"> Open Dialog </v-btn> -->
    <v-btn color="error" rounded="pill" size="small" 
    @click="dialog1 = true">名刺サンプル 表
    </v-btn>

    <v-dialog v-model="dialog1">
      <v-card>
        <!-- <v-card-header>表面</v-card-header> -->
      <v-img
      class="align-end text-white"
      width="800"
      src="https://smile24.org/src/assets/images/top/namecard_omote.png"
      cover>

    </v-img>
        <v-card-text class="text-10">
          ※名刺は、利用者登録情報をもとに100枚単位で製作します。
          情報変更があった場合は、速やかに修正版を依頼してください。
          名刺製作は所属技工所の管理画面からご依頼ください。
          製作には別途費用が必要です。
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog1 = false"
            >閉じる</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-btn color="error" rounded="pill" size="small" class="ml-2"
    @click="dialog2 = true">名刺サンプル 裏
    </v-btn>
    <v-dialog v-model="dialog2">
      <v-card>
        <!-- <v-card-header>裏面</v-card-header> -->
      <v-img
      class="align-end text-white"
      width="1200"
      src="https://smile24.org/src/assets/images/top/namecard_ura.png"
      cover
    >
    </v-img>
        <v-card-text class="text-10">
          ※メモ欄の利用法：通常は、空欄のまま患者様にお渡しください。
          納品した補綴物等に不具合がありましたら、その内容をメモ欄に記載の上、
          製作担当者までご返送ください。
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog2 = false"
            >閉じる</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

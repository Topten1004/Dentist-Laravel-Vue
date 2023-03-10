<script setup lang="ts">
import { ref } from "vue";
import TitleImage1 from "@/assets/images/bg/title1.jpg"
const dialog = ref(false);

// アクセスしているユーザータイプで　投稿ボタンを非表示化。
const users = defineProps({
    usertype: String,
  });

</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Comment Artisan ：　自身が製作担当した技工装置へのコメントをメモとして残す -->
  <!-- このコメント欄は、当該技工所と当該技工士のみが参照可能とする。 -->
  <!-- 投稿更新したら　現在所属中の技工所に通知する。 -->
  <!-- ----------------------------------------------------------------------------- -->

  <v-card elevation="2">
    <v-img
      class="align-start text-white"
      height="110"
      :src="TitleImage1"
      cover
    >
      <v-card-title class="mt-2">製作者メモ</v-card-title> 

      <!-- Dialog Form -->
      <div class="text-center mt-2">
      <v-dialog v-model="dialog" persistent>
        <template v-slot:activator="{ props }">
          <v-btn
            v-if = "usertype === 'engineer'"
            v-bind="props"
            color="red"
            rounded
            variant="flat"> 
            + 投稿＆更新
          </v-btn>
        </template>
        <v-card style="height: auto;width:auto;" class="overflow-auto pa-3">
          <h3>メモ投稿</h3>
            <div class="mb-3 text-subtitle-2">
              製作者メモを投稿してください。内容は技工所管理者に届きます。
            </div>
              <v-textarea 
                variant="outlined"
                label="今後の注意点等のメモを記入"
                required>
              </v-textarea>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" @click="dialog = false" variant="tonal" class="mr-4">
                  閉じる
                </v-btn>
                <v-btn color="success" @click="dialog = false" variant="tonal" prepend-icon="mdi-cloud-upload">
                  投稿する
                </v-btn>
                <!-- 投稿済の場合は以下更新ボタンを使用 -->
                <v-btn color="secondary" @click="dialog = false" variant="tonal" prepend-icon="mdi-update">
                  更新する
                </v-btn>
              </v-card-actions>
        </v-card>
      </v-dialog>
      </div>
    </v-img>

    <div class="ma-4 text-body-2">
    <div class="text-subtitle-2 d-flex justify-end"> 投稿日：2022/1/23 </div>
      <v-divider class="mt-0 mb-4"></v-divider>
      <div class="mt-4">
        （<!-- {{ enginner.name }}-->ここにengineer名）**技工士さんが投稿したメモを記載します。
      </div>
      <v-alert prominent type="error" variant="outlined" class="my-2">
        ただいまメモはありません。
      </v-alert>
      <v-divider class="my-4"></v-divider>
      <v-card-subtitle class="no-ellipsis">※技工所と担当技工士のみ閲覧可能です。（医療機関・患者参照不可）</v-card-subtitle>
    </div>

  </v-card>
</template>

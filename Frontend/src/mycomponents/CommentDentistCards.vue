<script setup lang="ts">
import { ref } from "vue";
import TitleImage4 from "@/assets/images/bg/title4.jpg"

const dialog = ref(false);

// アクセスしているユーザータイプで　投稿ボタンを非表示化。
const users = defineProps({
    usertype: String,
  });
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Comment Dentist -->
  <!-- 投稿更新したら　当該技工装置に関連する歯科医療機関と歯科技工所と歯科技工士に通知する。 -->
  <!-- ----------------------------------------------------------------------------- -->

  <v-card elevation="2">
    <v-img
      class="align-start text-white"
      height="110"
      :src="TitleImage4"
      cover
    >
      <v-card-title class="mt-2">歯科医師からのコメント</v-card-title>

      <!-- Dialog Form -->
      <div class="text-center mt-2">
      <v-dialog v-model="dialog" persistent>
        <template v-slot:activator="{ props }">
          <v-btn
            v-if = "usertype === 'dentist'"
            v-bind="props"
            color="red"
            rounded
            variant="flat"> 
            投稿＆更新 
          </v-btn>
        </template>
        <v-card style="height: auto;width:auto;" class="overflow-auto pa-3">
          <h3>コメント投稿</h3>
            <div class="mb-3 text-subtitle-2">
              製作者へのコメントを投稿してください。内容は製作関係者に届きます。
            </div>
              <v-textarea 
                variant="outlined"
                label="各種コメント等を記入。"
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
              </v-card-actions>
        </v-card>
      </v-dialog>
      </div>
    </v-img>

    <div class="ma-4 text-body-2">
    <div class="text-subtitle-2 d-flex justify-end"> 投稿日：2022/1/23 </div>
      <v-divider class="mt-0 mb-4"></v-divider>
      <div class="mt-4">
        （<!-- {{ clinic.name }} -->ここにClinic名）＊＊＊＊Clinicさんが投稿したコメントを記載します。
      </div>
      <v-alert prominent type="error" variant="outlined" class="my-2">
        ただいまコメントはありません。
      </v-alert>
      <v-divider class="my-4"></v-divider>
      <v-card-subtitle>※投稿内容は担当医療従事者のみ参照可能です。（患者参照不可）</v-card-subtitle>
    </div>

  </v-card>
</template>


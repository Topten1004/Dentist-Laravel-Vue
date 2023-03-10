<script setup lang="ts">
import { ref } from "vue";

const dialog = ref(false);
const dialog2 = ref(false);
const namecard_image =ref(true)
</script>

<template>
  <v-card class="rounded-0" elevation="2">
    <img src="@/assets/images/background/top_bg3.jpg" class="w-100" />
    <div class="d-flex justify-center mt-n15">
      <v-avatar size="140">
        <img src="@/assets/images/users/user1.jpg" width="140" alt="user" />
      </v-avatar>
    </div>
    <v-card-text>
      <div class="p-4 text-center">
        <small>笑顔創造職人</small><br />
        <h2 class="mb-0 mt-4 font-weight-regular">[::名前::name]</h2>
        <!-- <v-btn
          @click="dialog = true"
          rounded color="error"
          darkx-large
          class="mt-3 px-7"
          >
          名刺情報
        </v-btn> -->
        <v-btn
          @click="dialog2 = true"
          rounded color="error"
          dark x-large
          class="mt-3 px-7"
          >
          あなたの担当医療技術者として専任する。
        </v-btn>
        <v-btn
          @click="dialog2 = true"
          rounded color="error"
          variant="outlined"
          size="x-small"
          class="mt-3 px-7"
          >
          担当医療技術者として専任済
        </v-btn>

        <!-- <v-dialog v-model="dialog">
          <v-card class="mx-auto" max-width="600">
            <div v-if="namecard_image">
              <v-card-text>
              作成済み名刺の画像です。裏面は共通仕様となります。<br>
              新規・追加発注は、職場管理者にお問い合わせください。
              </v-card-text>
               <v-img
                src="https://smile24.org/src/assets/images/card/omote.png"
                class="border ma-4">
              </v-img>
            </div>
            <div v-if="!namecard_image">
              <v-alert color="error">
                現在、登録された画像はございません。
              </v-alert>
            </div>
            <v-card-actions>
              <v-btn color="primary" block @click="dialog = false"
                >閉じる</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog> -->

        <!-- //医療技術者の専任 -->
        <v-dialog v-model="dialog2">
          <v-card class="mx-auto" max-width="600">
            <div v-if="namecard_image">
              <v-card-text>
              当該医療技術者をあなたの担当に専任することができます。
              専任するとあなたがこのシステムを通じて登録した情報が担当者間で共有され、
              継続した治療に活用されます。
              <strong class="red--text text--lighten-1">ただし、医療内容や諸事情により当該医療技術者が担当できない場合は、ご了承願います。</strong><br>
              </v-card-text>
               <v-img
                src="https://smile24.org/src/assets/images/card/omote.png"
                class="border ma-4">
              </v-img>
            </div>
            <div v-if="!namecard_image">
              <v-alert color="error">
                現在、登録された画像はございません。
              </v-alert>
            </div>
            <v-card-actions class="d-flex justify-center">
              <v-btn color="error" variant="outlined" @click="dialog2 = false" class="mr-4">
                閉じる
              </v-btn>
              <v-btn color="primary" variant="flat" @click="dialog2 = true" size="large">
                専任登録する
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- ここまで// -->
    
        <v-row class="mt-6 pb-4">
          <v-col cols="4">
            <h2 class="mb-0">::109::</h2>
            <small class>名刺発行総数</small>
          </v-col>
          <v-col cols="4">
            <h2 class="mb-0">::469::</h2>
            <small class>笑顔コイン獲得総数</small>
          </v-col>
          <v-col cols="4">
            <h2 class="mb-0">::603::</h2>
            <small class>つら〜いコイン累積</small>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="success" variant="tonal">
              笑顔コインとは？
              <v-tooltip activator="parent" location="top">
                治療を担当した医療従事者への応援に使える投げ銭です。
              </v-tooltip>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn color="error" variant="tonal">
              つら〜いコインとは？
              <v-tooltip activator="parent" location="top">
                医療従事者が雇用主に対して「日々の辛さ」を表現した投げ銭です。
              </v-tooltip>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const dialog = ref(false);
</script>

<template>
  <v-card>
    <img src="@/assets/images/background/top_bg5.jpg" class="w-100" />
    <div class="d-flex justify-center mt-n15">
      <v-avatar size="140">
        <img src="@/assets/images/users/1.jpg" width="140" alt="user" />
      </v-avatar>
    </div>
    <v-card-text>
      <div class="p-4 text-center">
        <small>製作を担当した笑顔創造職人</small><br />
        <h2 class="mb-0 mt-4 font-weight-regular">[::名前::name]</h2>
        <v-btn
          @click="dialog = true"
          rounded color="error"
          dark x-large
          class="mt-3 px-7">
          技術者情報
        </v-btn>

        <v-dialog v-model="dialog">
          <v-card>
            <v-card-text>
              作成済み名刺の画像です。
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="dialog = false">
                閉じる
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    
        <v-row class="mt-6 pb-4">
          <v-col cols="4">
            <h2 class="mb-0">::109::</h2>
            <small class>名刺発行枚数</small>
          </v-col>
          <v-col cols="4">
            <h2 class="mb-0">::469::</h2>
            <small class>笑顔コイン</small>
          </v-col>
          <v-col cols="4">
            <h2 class="mb-0">::603::</h2>
            <small class>つら〜いコイン</small>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
  </v-card>
</template>

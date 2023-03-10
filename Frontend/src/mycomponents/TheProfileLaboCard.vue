<script setup lang="ts">
import { ref } from "vue";

const dialog = ref(false);
</script>

<template>
  <v-card elevation="2">
    <img src="@/assets/images/background/top_bg3.jpg" class="w-100" />
    <div class="d-flex justify-center mt-n15">
      <v-avatar size="140">
        <img src="@/assets/images/users/user1.jpg" width="140" alt="user" />
      </v-avatar>
    </div>
    <v-card-text>
      <div class="p-4 text-center">
        <small>笑顔創造職人s Labo</small><br />
        <h2 class="mb-0 mt-4 font-weight-regular">[::名前::name]</h2>

        <!-- 歯科技工所管理者以外は非表示 -->
        <v-btn
          to="/mypages/labo/registdetail"
          rounded color="error"
          dark x-large
          class="mt-3 px-7"
          >
          登録・編集（管理者のみ表示）
        </v-btn>
    
        <v-row class="mt-1 pb-4">
          <v-col cols="12">
            <v-btn
              to="/mypages/labo/egaocoin"
              rounded color="primary"
              dark large
              class="ma-1"
              >
              笑顔コイン
            </v-btn>

            <v-btn
              to="/mypages/labo/tsuraicoin"
              rounded color="secondary"
              dark large
              class="ma-1"
              >
              つらーいコイン
            </v-btn><br>

            <v-btn
              to="/mypages/labo/satistics"
              rounded color="success"
              dark large
              class="mt-3"
              >
              統計
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
  </v-card>
</template>

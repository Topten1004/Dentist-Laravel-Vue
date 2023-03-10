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
        <small>笑顔創造職人</small><br />
        <h2 class="mb-0 mt-4 font-weight-regular">[::名前::name]</h2>
        <v-btn
          to="/mypages/dentist/regist/detail"
          rounded color="error"
          dark x-large
          class="mt-3 px-7">
          登録・編集
        </v-btn>
    
        <v-row class="mt-1 pb-4">
          <v-col cols="12">
            <v-btn
              to="/mypages/artisan/egaocoin"
              rounded color="primary"
              dark large
              class="ma-1"
              >
              笑顔コイン
            </v-btn>

            <v-btn
              to="/mypages/artisan/tsuraicoin"
              rounded color="secondary"
              dark large
              class="ma-1"
              >
              つらーいコイン
            </v-btn><br>

            <v-btn
              to="/mypages/artisan/satistics"
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

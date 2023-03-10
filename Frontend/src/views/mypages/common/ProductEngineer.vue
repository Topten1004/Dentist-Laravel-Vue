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
        <h4>担当した笑顔創造職人</h4><br />
        <h2 class="mb-6 font-weight-regular">[::名前::name]</h2>
        <v-divider class="mb-4"></v-divider>
        <v-btn
          to="/mypages/patient/engineerprofile"
          rounded color="success"
          dark x-large
          class="mt-3 px-7"
          >
          プロフィールを見る
        </v-btn>
    
        <v-row class="mt-1 pb-4">
          <v-col cols="12">
            <v-btn
              to="/patient/opinion"
              rounded color="error"
              dark large
              class="ma-1"
              >
              <v-icon>mdi-heart</v-icon>
              担当者に笑顔コインをプレゼントする
            </v-btn>
            <div>
              <small>※最大で10枚までプレゼントできます。</small>
            </div>
            <div>
              <v-btn
                to="/mypages/patient/exclusive"
                rounded color="amber-darken-4"
                dark x-large
                class="mt-3 px-7">
                この技術者を専任登録する
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
  </v-card>
</template>

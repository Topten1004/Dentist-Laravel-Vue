<script setup lang="ts">
import { ref } from "vue";
import bgimg from '@/assets/images/background/bg1024_768-1.jpg';
import bgimg2 from '@/assets/images/background/bg1024_768-1.jpg';

const dialog = ref(false);
</script>

<template>
  <v-card elevation="2">
    <v-img
      class="align-end text-white"
      height="140"
      :src="bgimg"
      cover
    >
      <v-card-title>患者専用マイページ</v-card-title>
    </v-img>
    <v-card-text>
      <div class="pa-2 text-center">
        <small>ようこそ！</small><br />
        <h2 class="mt-4 font-weight-regular">[::名前::name]さん</h2>
        <v-row class="mt-2">
          <v-col cols="6">
            <v-btn
              to="/patient/opinionhistory"
              rounded color="secondary"
              darkx-large
              class="mt-3 px-4"
              >
              笑顔回答履歴
            </v-btn>
            </v-col>
            <v-col cols="6">
            <v-btn
              to="/mypages/patient/carelist"
              rounded color="error"
              darkx-large
              class="mt-3 px-4"
              >
              治療履歴参照
            </v-btn>
        </v-col>
        </v-row>


    
        <v-row class="mt-6 pb-2">
          <v-col cols="6">
            <h2 class="mb-0">::109::枚</h2>
            <small class>名刺受領枚数</small>
          </v-col>
          <v-col cols="6">
            <h2 class="mb-0">::469::枚</h2>
            <small class>笑顔コイン</small>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
  </v-card>
</template>

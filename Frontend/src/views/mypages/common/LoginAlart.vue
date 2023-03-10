<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";

const status = ref ({ login: "0"});  //未ログイン：0　ログイン中：1
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Login Alert 　未ログイン：0　ログイン中：1 　-->
  <!-- ----------------------------------------------------------------------------- -->
<div class="mb-4">
  <!-- 未ログインの場合  -->
  <v-card
    color="yellow-lighten-4"
    v-if="status.login === '0'"
    elevation="2">
    <v-alert type="error">未ログイン</v-alert>
    <v-card-text class="pa-5">
      ログイン又は、新規登録してください。
      <div class="d-flex justify-center">
        <v-btn 
          to="/login"
          variant="flat"
          color="red-darken-1"
          class="mt-2 mr-2">
          Login
        </v-btn>
      
        <v-btn 
          to="/regist"
          variant="flat"
          color="indigo-darken-2"
          class="mt-2 ml-2">
          新規登録
        </v-btn>
      </div>
    </v-card-text>
  </v-card>

  <!-- ログイン中の場合  -->
  <v-card
    v-if="status.login === '1'"
    elevation="2">
    <v-alert type="success">ログイン中</v-alert>
    <v-card-text class="pa-5">
      ようこそ！　＊＊＊＊さん
    </v-card-text>
  </v-card>

</div>
</template>
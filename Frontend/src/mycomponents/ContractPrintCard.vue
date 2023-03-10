<script setup lang="ts">
import { ref } from "vue";

const users = ref( {usertype: 'labo'});

const contracts  = ref([
{
  labo_id: "歯科技工所ID",
  labos_number: "歯科技工所会員番号",
  labo_name: "****歯科技工所",
  consent: "承諾***",
  contracted: "",
  payment_id: "1234",
  paid: "1",
  print_account: "aaaaa",
  print_password: "passwordaaa",
  created_at: "作成日時",
  updated_at: "更新日時",
  },
]);
</script>

<template>
  <v-card elevation="2" v-for="item in contracts" :key="item.labo_id">
       
    <!-- 印刷企業情報 : 総合管理者が管理画面から登録する。 -->
    <v-row dense>
        <v-col cols="12">
          <h3 class="py-4 px-6 text-gray bg-yellow">名刺印刷先情報</h3>

        <!-- 固定アラート -->
          <v-alert class="pa-4" color="error" variant="tonal">
            <p><strong>＜重要＞</strong></p>
            <p>
              利用料のお支払いが確認できた場合、印刷用アカウントを運営事務局より発行します。
              御社従業員からご登録いただいた基本情報を基に印刷用名刺データを作成しますので、
              下記印刷会社様の規約に従って名刺印刷を発注してください。
            </p>
              <small>※当運営事務局は、利用者のコスト削減の為、名刺デザインの提供のみ行っております。</small>
          </v-alert>

          <!-- 下記、指定印刷企業情報がない場合のアラート -->
          <v-alert
            v-if="!(item.contracted)"
            prominent type="error" variant="outlined" class="ma-4">
            <strong>契約及び支払いが未完了</strong>の為、印刷情報はございません
          </v-alert>

        </v-col>
        <v-col cols="5" class="py-4 pl-4">指定印刷企業:</v-col>
        <v-col cols="7" class="py-4">ラクスル株式会社</v-col>
          <v-divider />
        <v-col cols="5" class="py-4 pl-4">印刷用アカウント:</v-col>
        <v-col cols="7" class="py-4">{{ item.print_account }}</v-col>
          <v-divider />
        <v-col cols="5" class="py-4 pl-4">印刷用パスワード:</v-col>
        <v-col cols="7" class="py-4">{{ item.print_password }}</v-col>
          <v-divider />
        <v-col class="d-flex justify-center mr-4 mb-4">
          <v-btn 
            href="https://raksul.com/account/login"
            target="_blank"
            variant="flat"
            class="mt-4 text-white"
            color="error">
            ラクスル（印刷会社）にログインする。
          </v-btn>
        </v-col>
    </v-row>
  </v-card>

  <v-card class="mt-8">
    <v-card-item class="py-4 px-6 text-white bg-warning">
      <h4 class="text-h6 text-black">名刺印刷の説明文</h4>
    </v-card-item>
    <v-card-text class="pa-6">
      <h5 class="text-h6 title">Special title treatment</h5>
      <p class="text-grey-darken-1 text-subtitle-1 mt-3">
        ここに説明文章などなど。。。。。。。。。。。
      </p>
      <v-btn variant="outlined" class="mt-4" color="error">ラクスルへ</v-btn>
    </v-card-text>
  </v-card>

</template>

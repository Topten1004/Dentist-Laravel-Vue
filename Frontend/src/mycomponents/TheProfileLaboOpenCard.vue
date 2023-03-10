<script setup lang="ts">
import { ref } from "vue";


defineProps<{
 usertype: string;
}>();

const dialog = ref(false);
const profiles  = ref([
{
  labo_id: "歯科技工所ID",
  division: "区分***",
  labos_number: "歯科技工所会員番号",
  labo_name: "****歯科技工所",
  labo_phonetic: "よみがな",
  labo_phonetic_spelling: "よみがな英字",
  email: "メール***",
  password: "パスワード***",
  two_factor_secret: "２段階認証***",
  two_factor_recovory_codes: "２段階認証用リカバリーコード***",
  phone_no: "電話番号***",
  address: "住所******",
  consent: "承諾***",
  profile_photo_path	: "プロフィール写真URL ***.jpg",
  background_photo: "背景画像URL  ***.jpg",
  website: "https://cs24.net",
  speciality_labo: "専門分野",
  catchphrase: "キャッチフレーズ",
  outline: "概要＊＊＊＊",
  job: "求人情報＊＊＊＊",
  contracted: "1",
  created_at: "作成日時",
  updated_at: "更新日時",
  },
]);
</script>

<template>
  <v-card elevation="2">
    <img src="@/assets/images/background/top_bg3.jpg" class="w-100" />
    <div class="d-flex justify-center mt-n15">
      <v-avatar size="180">
        <img src="@/assets/images/users/user1.jpg" width="180" alt="user" />
      </v-avatar>
    </div>
    <v-card-text>
      <div class="p-4 text-center">
        <small>笑顔創造職人s Labo</small><br />
        <h2 class="mb-0 mt-4 font-weight-regular">[::名前::name]</h2>
    
        <v-row class="mt-1 pb-4">
          <v-col cols="12">
            <v-btn
              to="/egaocoin"
              rounded color="primary"
              dark large
              class="ma-1"
              >
              笑顔コイン
            </v-btn>

            <v-btn
              to="/patient/tsuraicoin"
              rounded color="secondary"
              dark large
              class="ma-1"
              >
              つらーいコイン
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
  </v-card>

  
</template>

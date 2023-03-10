<script setup lang="ts">
import { ref } from "vue";

const users = ref( {usertype: 'labo'});

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
  kaizen: "2023年3月 育児休暇制度導入",
  job: "求人情報＊＊＊＊",
  contracted: "1",
  created_at: "作成日時",
  updated_at: "更新日時",
  },
]);

const societies = ref([
{ society_id: "ここに複数の所属済み学会名をリスト表示",
  approval: "1",
  website:"https://smile24.org"},
{ society_id: "AAA学会",
  approval: "1",
  website:"https://smile24.biz"},
{ society_id: "BBBBBB学会",
  approval: "0",
  website:""}
]);
</script>

<template>
  <v-card elevation="2" v-for="item in profiles" :key="item.labo_id">
    <v-card-text class="pa-0">
      <div class="bg-secondary pa-4">
        <h2 class="">Labo登録情報</h2>
        <h4 class="font-weight-light">Check Your Labo Prolile !</h4>
        <div class="d-flex justify-end" color="bg-yellow lighten-5">
          <h4>作成日：{{item.created_at}} / 更新日:{{item.updated_at}}</h4>
        </div>
      </div>

      <v-alert
        icon="mdi-alert-outline"
        color="error"
        outlined
        variant="tonal"
        type="info"
        class="caption pa-3">
        未契約及びSoftDelateした場合の表示 : <br>
        この事業者は、利用契約が未完了（退会含む）状態ですので名称のみ表示しています。<br>
      </v-alert>

        <v-row class="pa-4" v-if=" item.contracted === '1'">
          <v-col cols="12" sm="12" class="d-flex justify-end bg-yellow-lighten-4">
              <h3>歯科技工所ID: (総合管理者のみ表示でOK)</h3>
              <div>1234 {{ item.labo_id }}</div>
              <v-divider vertical class="mx-4"></v-divider>
              <h3>Labo会員番号: </h3>
              <div>{{ item.labos_number }}</div>
          </v-col>
        </v-row>
          <v-divider></v-divider>

        <v-row class="pa-4">
          <v-col cols="12" lg="6" md="6" class="ml-6 d-flex justify-start">
            <h3>事業所名 : {{ item.labo_name }}</h3>
            <!-- <div class="ml-4">({{ item.phonetic }} )</div> -->
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12" class="">
              <div class="ml-10 pl-lg-8">英字: {{ item.labo_phonetic_spelling }} </div>
          </v-col>

          <v-divider></v-divider>

        <!-- 注意：メールと電話は、患者には非表示とする -->
        
          <v-col cols="12" class="ml-6 d-flex justify-start"
            v-if="!(users.usertype === 'patient')">
            <h3>メール : </h3>
            <div class="ml-4">{{ item.email }} </div>
          </v-col>
          <v-divider></v-divider>
        
          <v-col cols="12" class="ml-6 d-flex justify-start"
            v-if="!(users.usertype === 'patient')">
            <h3>電話番号 : </h3>
            <div class="ml-4">{{ item.phone_no }} </div>
          </v-col>
          <v-divider></v-divider>
        
          <v-col cols="12" class="ml-6 d-flex justify-start">
            <h3>住所 : </h3>
            <div class="ml-4">{{ item.address }} </div>
          </v-col>
          <v-divider></v-divider>

          <v-col cols="12" class="ml-6 d-flex justify-start">
            <h3>専門分野 : </h3>
            <div class="ml-4">{{ item.speciality_labo }} </div>
          </v-col>
          <v-divider></v-divider>

          <v-col cols="12" class="ml-6">
            <h3>ホームページ : </h3>
            <div class="ml-4">
              <v-btn
                :href="item.website"
                variant="text"
                target="_blank"
                style="text-transform: none">
                {{ item.website }}
              </v-btn>
            </div>
          </v-col>
          <v-divider></v-divider>

          <v-col cols="12" class="ml-6">
            <h3>キャッチフレーズ : </h3>
            <div class="ml-4">{{ item.catchphrase }} </div>
          </v-col>
          <v-divider></v-divider>

          <v-col cols="12" class="ml-6">
            <h3>概要 : </h3>
            <div class="ml-4">{{ item.outline }} </div>
          </v-col>
          <v-divider></v-divider>

          <v-col cols="12" class="ml-6">
            <h3>求人情報 : </h3>
            <div class="ml-4">{{ item.job }} </div>
          </v-col>
          <v-divider></v-divider>
          
          <v-col cols="12" class="ml-lg-6">
            <h3>職場環境改善履歴 : </h3>
            <div class="ml-4">{{ item.kaizen }} </div>
          </v-col>
          <v-divider></v-divider>

          </v-row>

          <v-row v-if=" item.contracted === '1'">
          <v-col cols="12" class="ml-6 mb-4">
            <v-card class="d-flex mt-4">
              <v-card class="d-flex justify-start"><h3 class="">所属している学会・団体 :</h3></v-card>
              <v-card class="d-flex justify-end pr-8">
                <v-btn
                  v-if="users.usertype === 'artisan'"
                  to="/mypages/artisan/societies"
                  size="small"
                  color="error"
                  variant="flat"
                  elevation="4">
                  <v-icon icon="mdi-school" class="mr-2"></v-icon>
                  学会登録する！
                </v-btn>
                <v-btn
                  v-if="users.usertype === 'labo'"
                  to="/mypages/labo/societies"
                  size="small"
                  color="error"
                  variant="flat"
                  elevation="4">
                  <v-icon icon="mdi-school" class="mr-2"></v-icon>
                  学会登録する！
                </v-btn>
                <v-btn
                  v-if="users.usertype === 'dentist'"
                  to="/mypages/dentist/societies"
                  size="small"
                  color="error"
                  variant="flat"
                  elevation="4">
                  <v-icon icon="mdi-school" class="mr-2"></v-icon>
                  学会登録する！
                </v-btn>
                <v-btn
                  v-if="users.usertype === 'hygienist'"
                  to="/mypages/hygienist/societies"
                  size="small"
                  color="error"
                  variant="flat"
                  elevation="4">
                  <v-icon icon="mdi-school" class="mr-2"></v-icon>
                  学会登録する！
                </v-btn>
              </v-card>
            </v-card>
            <div><small>※承認済マークは所属学会や団体が本システムを利用して、個別に確認した場合に表示されます。</small></div>
            <!-- 当該歯科医療技術者が所属している学会情報はリスト表示する。 -->
            <div class="ml-8 mt-4">
              <ul>
                <li v-for="item in societies" :key="item.society_id" class="ma-1">
                  {{ item.society_id }}
                  <!-- 承認済ボタンは、学会HPへリンクさせる -->
                  <v-btn
                    v-if = "item.approval === '1'"
                    v-bind:href = "item.website"
                    target="_blank"
                    color="success"
                    size="x-small"
                    class="ml-4 mb-1"
                    variant="flat"
                    rounded="pill">
                    承認済
                  </v-btn>
                  <v-btn
                    v-if = "!(item.approval === '1')"
                    color="nomal"
                    size="x-small"
                    class="ml-4 mb-1"
                    variant="outlined"
                    rounded="pill"
                   >
                    自己申告
                  </v-btn>
                  <v-divider></v-divider>
                </li>
              </ul>
            </div>
          </v-col>
          <v-divider></v-divider>
          
        </v-row>

    </v-card-text>
  </v-card>
</template>

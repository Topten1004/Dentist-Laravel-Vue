<script setup lang="ts">
import { ref } from "vue";

// 親から子にアクセス対象者データを渡す。
defineProps<{
 usertype: string;
}>();

const profiles  = ref([
{
  engineer_id: "歯科技術者ID",
  division: "区分	",
  engineer_number: "歯科技術者会員番号",
  name: "名前****子",
  exclusive_duty_flag: "1",
  nickname: "名前",
  labo_name: "****歯科技工所", 
  clinic_name: "AAA***歯科クリニック", 
  profile_photo_path	: "プロフィール写真URL",
  background_photo: "背景画像URL",
  official_position: "役職・部門",
  career: "経歴。。。。",
  speciality_engineer: "専門分野。。。。",
  catchphrase: "キャッチフレーズ。。。。。",
  feature: "特徴・その他。。。。",
  publish_flag: "公開フラグ",
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
<v-card v-for="item in profiles" :key="item.engineer_id" elevation="2">
    <v-card-text class="pa-0">
      <div class="bg-secondary pa-4">
        <h2 class="">担当者 詳細情報.</h2>
        <h4 class="font-weight-light">Check Your Person in charge !</h4>
        <div class="d-flex justify-end" color="bg-yellow lighten-5">
          <h4>作成日：{{item.created_at}} / 更新日:{{item.updated_at}}</h4>
        </div>
      </div>

        <v-row class="pa-4">

          <v-col cols="12" class="ml-6">
            <h3>CatchPhrase : </h3>
            <div class="ml-4">{{ item.catchphrase }}</div>
          </v-col>
          <v-divider></v-divider>

          <v-col cols="12" class="ml-6">
            <v-btn
              v-if=" item.exclusive_duty_flag === '1'"
              size="x-small"
              color="error"
              variant="outlined">
              専任医療技術者
            </v-btn>
            <h3 class="mt-2">名前 : <span class="text-h5"><strong>{{ item.name }}</strong></span></h3>
            <small class="ma-4">ニックネーム：{{ item.nickname }}</small>
          </v-col>
          <v-divider></v-divider>

          <!-- 歯科技工士の場合 -->
          <v-col cols="12" class="ml-6 d-flex justify-start" v-if="usertype === 'artisan'">
            <h3>勤務先 : </h3>
            <div class="ml-4 text-18">
              {{ item.labo_name }} <br>
            <small>（現在所属している歯科技工所名）</small>
          </div>
          </v-col>

          <!-- 歯科医師・歯科衛生士の場合 -->
          <v-col cols="12" class="ml-6 d-flex justify-start"
           v-if="usertype === 'dentist' || usertype === 'hygienist'">
            <h3>勤務先 : </h3>
            <div class="ml-4 text-18">
              {{ item.clinic_name }} <br>
            <small>（現在勤務中の歯科医療機関名）</small>
          </div>
          </v-col>
          <v-divider></v-divider>

          <v-col cols="12" class="ml-6">
            <h3>役職・部門 : </h3>
            <div class="ml-4">{{ item.official_position }} </div>
          </v-col>
          <v-divider></v-divider>

          <v-col cols="12" class="ml-6">
            <h3>専門分野 : </h3>
            <div class="ml-4">{{ item.speciality_engineer }} </div>
          </v-col>
          <v-divider></v-divider>

          <v-col cols="12" class="ml-6">
            <h3>経歴 : </h3>
            <div class="ml-4">{{ item.career }} </div>
          </v-col>
          <v-divider></v-divider>

          <v-col cols="12" class="ml-6">
            <h3>所属している学会・団体 : </h3>
            <!-- 当該歯科医療技術者が所属している学会情報はリスト表示する。 -->
            <div class="ml-4">
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
                    rounded="pill"
                   >
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
              <div><small>※承認済マークは所属学会や団体が本システムを利用して、個別に確認した場合に表示されます。</small></div>
            </div>
          </v-col>
          <v-divider></v-divider>

          <v-col cols="12" class="ml-6">
            <h3>特徴・その他 : </h3>
            <div class="ml-4">{{ item.feature }} </div>
          </v-col>
          
        </v-row>
    </v-card-text>
  </v-card>
</template>

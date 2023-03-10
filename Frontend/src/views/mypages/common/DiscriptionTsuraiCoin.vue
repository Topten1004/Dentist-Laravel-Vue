<script setup lang="ts">
import CardImageTsurai from "@/assets/images/background/tsurai1.jpg"
import { useDisplay } from "vuetify";
const display = useDisplay();

defineProps<{
  usertype: string;
}>();

</script>

<template>
  <v-card elevation="2">
    <!-- 下記画像でTypeScriptのコンパイルエラーが出た場合、
      custom.d.tsファイルを作成し、jpg等の定義を記載し
      tsconfig.jsonにcustom.d.tsファイルの存在を記入する。
      参考：https://nakureis-notes.netlify.app/post/v-img-in-vuetify-3-with-using-path-alias/
    -->
    <v-img
      :src="CardImageTsurai"
      max-height="200px"
      cover>
    </v-img>
    <v-card-text class="pa-6">
      <v-row>
        <v-col cols="12" lg="8">
          <h5 class="text-h6 title">つら〜いコインとは</h5>
          <p class="text-grey-darken-1 text-subtitle-1 mt-3">
            つら〜いコインは、医療従事者の心情を表現するために利用する無料配布のデジタルコインです。
            医療従事者が日々の業務で「今月はつらいなぁ」と感じたら、
            事業主に向けて投げ銭方式で「つらさ」表現できるコインです。
            当システムに登録済の医療従事者（管理者含む）に毎月に10枚進呈されます。この統計データは、職場管理者と取引関係先等に公開されます。
            勿論、経営者（歯科医院や技工所のオーナー）の登録も可能です。<br>
            <strong>つらい時につらいと言える社会、つらさを共有し無くしていける社会を目指しています。</strong>
          </p>
        </v-col>
        <v-col cols="12" lg="4"
          v-if="!(usertype === 'patient')">
          <v-card color="#1F7087" theme="dark">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5 mt-2">つら〜い登録</v-card-title>

                <v-card-subtitle>日々の辛さを数値化！</v-card-subtitle>

                <v-card-actions>
                  <!-- <router-link to="/second#second_link"> -->
                  <v-btn
                    to="#regist"
                    color="white" variant="outlined" size="small">
                    登録はこちら
                  </v-btn>
                  <!-- </router-link> -->
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" rounded="0">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <!-- <v-col cols="12" lg="4" class="d-flex justify-center">
            <v-img
            src="../../../../public/imgs/toothjob.jpg"
            class="rounded-circle"
            max-width="200"
            ><v-btn>統計を見る</v-btn></v-img>
            <div class="d-flex justify-center">
              
            </div>
        </v-col> -->
      </v-row>
    </v-card-text>
  </v-card>
</template>
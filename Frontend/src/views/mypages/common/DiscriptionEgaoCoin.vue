<script setup lang="ts">
import { ref } from "vue";
import CardImageEgao from "@/assets/images/background/smile_y2.jpg"
import ImageEgao1 from "@/assets/images/background/u1.jpg"
import ImageEgao2 from "@/assets/images/background/u2.jpg"
import ImageEgao3 from "@/assets/images/background/u3.jpg"
import ImageNameCard from "@/assets/images/card/namecard_sample.png"
import { useDisplay } from "vuetify";

const display = useDisplay();

defineProps<{
  usertype: string;
}>();

</script>

<template>
  <v-row>
    <v-col cols="12" lg="12">
      <v-card elevation="2">
        <!-- 下記画像でTypeScriptのコンパイルエラーが出た場合、
          custom.d.tsファイルを作成し、jpg等の定義を記載し
          tsconfig.jsonにcustom.d.tsファイルの存在を記入する。
          参考：https://nakureis-notes.netlify.app/post/v-img-in-vuetify-3-with-using-path-alias/
         -->
        <v-img
          :src="CardImageEgao"
          max-height="300px"
          cover>
        </v-img>
        <v-card-text class="pa-6">
          <v-row>
            <v-col cols="12" lg="7" sm="12">
              <h5 class="text-h6 title">貴方の笑顔コインで医療従事者を応援！</h5>
              <p class="text-subtitle-1 mt-4">
                笑顔コインは、治療後の評価に利用できる無料配布のデジタルコインです。
                治療を担当した歯科技工士や歯科衛生士が患者さんにお届けする
                名刺（トレーサビリティ機能カード）毎に<strong>笑顔コインが10枚無料進呈</strong>されます。
              </p>
              <p class="text-subtitle-1 mt-4">
                その笑顔コインで治療を担当した医療従事者を応援することが可能です。
                名刺の裏に記載されているコードを用いてアクセスして、治療後の経過アンケートや投げ銭が可能です。
                医療従事者が獲得した<strong>笑顔コインの枚数は、患者さんや従業員からの応援の量と比例する</strong>と考えられます。
              </p>
              <p class="text-subtitle-1 mt-4">
                患者さんへのアンケートには「笑顔が増えたか？」や「美味しく食べることが出来ているか？」などの項目があり、治療後の状況がわかります。
                患者さんの<strong>「安心・安全」を医療従事者が末長くサポートする</strong>為に、この笑顔創造職人システムをご活用ください。
              </p>

              <div v-if="(usertype === 'patient')">
                <!-- 患者の場合 アンケート回答・笑顔コイン付与ページと履歴ページを参照-->
                <v-btn to="/patient/opinion" class="mt-4 mx-4" color="secondary">
                  笑顔コインを付与する
                </v-btn>
                <v-btn to="/patient/opinionhistory" class="mt-4" color="secondary">
                  アンケート履歴を参照する
                </v-btn>
              </div>
            </v-col>

            <v-col cols="12" lg="5" sm="12" class="d-flex justify-center">
                <v-img
                  :src="ImageNameCard"
                  class=""
                  max-width="500"
                ></v-img>
            </v-col>
          </v-row>
        </v-card-text>

      <!-- 患者さんの説明カード -->
        <v-card-text v-if="(usertype === 'patient' || usertype === 'society')">
          <h2 class="bg-error pa-4 mb-4">笑顔創造職人カードを受取った患者さんへ</h2>
          <v-row>
            <v-col cols="12" lg="4">
              <v-card>
                <v-img :src="ImageEgao1" />
                <v-card-text class="pa-6">
                  <h5 class="text-h6 title">手順１. 名刺を受取る</h5>
                  <p class="text-grey-darken-1 text-subtitle-1 mt-3">
                    治療後に歯科医療機関から発行される
                    「笑顔創造職人」カードを受取る。「笑顔コイン」10枚獲得！
                  </p>
                  <v-btn to="/regist" class="mt-4" color="error">サインイン</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="4">
              <v-card>
                <v-img :src="ImageEgao2" />
                <v-card-text class="pa-6">
                  <h5 class="text-h6 title">手順２. ログインする。</h5>
                  <p class="text-grey-darken-1 text-subtitle-1 mt-3">
                    当システムにログインして、名刺に記載された情報を入力する。当該医院の診察券番号があればお名前は任意。
                  </p>
                  <v-btn to="/login" class="mt-4" color="error">ログイン</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="4">
              <v-card>
                <v-img :src="ImageEgao3" />
                <v-card-text class="pa-6">
                  <h5 class="text-h6 title">手順３. アンケートに回答</h5>
                  <p class="text-grey-darken-1 text-subtitle-1 mt-3">
                    治療後に笑顔になれたかなどを回答して獲得した「笑顔コイン」を担当者にプレゼントする。
                  </p>
                  <v-btn to="/patient/opinion" class="mt-4" color="error">回答する</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      
      <!-- 歯科医療従事者（技術者）の説明カード -->
      <v-card-text v-if="!(usertype === 'patient' || usertype === 'society')">
        <h2 class="bg-error pa-4 mb-4">笑顔創造職人カードを発行する歯科医療従事者（技術者）へ</h2>
          <v-row>
            <v-col cols="12" lg="4">
              <v-card>
                <v-img :src="ImageEgao1" />
                <v-card-text class="pa-6">
                  <h5 class="text-h6 title">手順１. 名刺を受取る</h5>
                  <p class="text-grey-darken-1 text-subtitle-1 mt-3">
                    治療後に歯科医療機関から発行される
                    「笑顔創造職人」カードを受取る。「笑顔コイン」10枚獲得！
                  </p>
                  <v-btn to="/regist" class="mt-4" color="error">サインイン</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="4">
              <v-card>
                <v-img :src="ImageEgao2" />
                <v-card-text class="pa-6">
                  <h5 class="text-h6 title">手順２. ログインする。</h5>
                  <p class="text-grey-darken-1 text-subtitle-1 mt-3">
                    当システムにログインして、名刺に記載された情報を入力する。当該医院の診察券番号があればお名前は任意。
                  </p>
                  <v-btn to="/login" class="mt-4" color="error">ログイン</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="4">
              <v-card>
                <v-img :src="ImageEgao3" />
                <v-card-text class="pa-6">
                  <h5 class="text-h6 title">手順３. アンケートに回答</h5>
                  <p class="text-grey-darken-1 text-subtitle-1 mt-3">
                    治療後に笑顔になれたかなどを回答して獲得した「笑顔コイン」を担当者にプレゼントする。
                  </p>
                  <v-btn to="/patient/opinion" class="mt-4" color="error">回答する</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
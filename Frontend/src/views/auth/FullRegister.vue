<script setup lang="ts">
import { ref } from "vue";
import TermsOfService from "@/views/mypages/common/form/TermsOfService.vue";


// vue-recaptcha v3  TypeScript + Vue 3  
// 参考サイト→ https://www.npmjs.com/package/vue-recaptcha-v3
// import { ReCaptchaInstance } from "./shims-vue-recaptcha-v3";

const checkbox = ref(false);
const valid = ref(true);
// const show1 = ref(false);
// const password = ref("");
const email = ref("");

const types = ref([
  "患者として利用登録する。",
  "歯科医師として利用登録する。",
  "歯科技工士として利用登録する。",
  "歯科衛生士として利用登録する。",
  "歯科医療機関(歯科医院等)の管理者として利用登録する。",
  "歯科技工所の管理者として利用登録する。",
  "学会・団体の管理者として利用登録する。",
  ]);

//承諾
const dialogm1 = ref("");
const dialog = ref(false);
const consent = ref(false);

const passwordRules = ref([
  (v: string) => !!v || "パスワードは必須です。",
  (v: string) =>
    (v && v.length >= 8) || "パスワードは8文字以上で入力してください。",
]);
const emailRules = ref([
  (v: string) => !!v || "Eメールは必須です。",
  (v: string) => /.+@.+\..+/.test(v) || "有効なEメールを正しく入力してください。",
]);
const fname = ref("");
const fnameRules = ref([
  (v: string) => !!v || "お名前は必須です。",
  (v: string) =>
    (v && v.length <= 16) || "お名前は16文字以内で入力してください。",
]);

</script>

<style>
  .bg {
    background-image: url("@/assets/images/background/loginbg980-2.jpg");
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100vh;
  }
</style>

<!-- Sign Up  新規登録フォーム  -->

<template>
  <v-row class="overflow-y-auto">
    <v-col
      cols="12"
      lg="6"
      xl="6"
      class="bg d-none d-md-flex align-center justify-center"
    >
      <v-container>
        <div class="pa-10">
          <v-row justify="center">
            <v-col cols="8" xl="5">
              <div>
                <h2 class="text-h4 text-white font-weight-medium">
                  <router-link to="/" class="d-flex text-decoration-none">
                    <img src="@/assets/images/logos/logo_white_top_s.png" />
                  </router-link>
                </h2>
                <h6
                  class="text-subtitle-1 mt-4 text-white text-high-emphasis font-weight-regular"
                >
                  美しい歯で美味しく食べて健康に！<br>
                  歯科医療の高度な技術を笑顔コインで応援。
                </h6>
                <v-btn
                  class="mt-6 text-capitalize"
                  size="x-large"
                  variant="outlined"
                  color="white"
                  to="/news"
                  >詳細
                  </v-btn>
                  <v-btn
                  class="mt-6 ml-4 text-capitalize"
                  size="x-large"
                  variant="outlined"
                  color="white"
                  to="/patient/opinion"
                  >アンケート回答
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
    <v-col cols="12" lg="6" xl="6" class="d-flex align-center">
      <v-container>
        <div class="mx-4 pa-sm-12">
          <v-row>
            <v-col cols="12" lg="12" class="pl-lg-12">
              <router-link to="/" class="d-flex text-decoration-none">
                <img src="@/assets/images/logos/logo-svg.svg" />
              </router-link>
              <h2 class="font-weight-bold mt-2 blue-grey--text text--darken-2">
                新規登録・Sign Up
              </h2>
              
              <div class="text-right">
                <v-btn to="/login" 
                  variant="outlined" size="small" color="red" 
                  class="mt-2 text-capitalize mr-4">
                  登録済の方はこちら
                </v-btn>
                <v-btn to="/patient/opinion"
                  variant="outlined" size="small" color="secondary"
                  class="mt-2 text-capitalize">
                  アンケート回答のみ
                </v-btn>
              </div>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                action="/login"
                class="mt-4"
              >
                <v-text-field
                  v-model="fname"
                  :rules="fnameRules"
                  label="お名前"
                  class="mt-2"
                  required
                  variant="outlined"
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Eメール"
                  required
                  variant="outlined"
                ></v-text-field>
                
                <!-- 要検討：各ユーザー毎の新規ログイン画面とした方が良いか？ -->
                <!-- 利用タイプ選択のアラート表示 v-dialog での確認表示を採用する。-->
                <v-alert
                  icon="mdi-alert-outline"
                  outlined
                  variant="tonal"
                  type="error"
                  class="mb-1 caption pa-3">
                  <strong>重要：利用タイプ選択後の変更はできません！</strong><br>
                    歯科医師で歯科医院管理者の方は、
                    <strong>メールアドレスを変えて</strong>
                    歯科医療機関と歯科医師（個人）の両方をご登録ください。
                </v-alert>
                <v-select
                  :items="types"
                  label="貴方のご利用タイプを選択してください。"
                  variant="outlined"
                  bg-color="#FFF9C4">
                </v-select>
                
                <div class="d-block d-sm-flex align-center mb-4 mb-sm-0">
                    <v-dialog v-model="dialog" scrollable>
                      <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" 
                        size="small" variant="outlined" color="success" class="mr-4">
                         利用規約を参照 
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>利用規約</v-card-title>
                        <v-divider></v-divider>
                        <v-card-text style="height: 80%;width: 100%;overflow: scroll;" class="overflow-auto md:w-32">
                          <terms-of-service v-model="dialogm1" column></terms-of-service>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions class="d-flex justify-center">
                          <v-btn text @click="dialog = false" variant="flat" color="error mr-4" >
                            閉じる
                          </v-btn>
                          <v-btn text @click="consent = true" variant="flat" color="success">
                            同意する。
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  
                  <v-checkbox
                    v-model="checkbox"
                    :rules="[(v) => !!v || '続行するには同意する必要があります。']"
                    label="利用規約に同意します。"
                    required
                    hide-details
                  ></v-checkbox>
                </div>

                <!-- recaptcha 用　-->
                <div>
                  <button @click="">Execute recaptcha</button>
                </div>

                <v-btn color="primary" block submit>新規登録する</v-btn>
              </v-form>

              <!-- 送信完了表示 -->
                <v-alert
                  icon="mdi-alert-outline"
                  outlined
                  variant="tonal"
                  type="success"
                  class="my-2 mb-3 caption pa-3">
                  <strong>確認メールをお届けしました。</strong><br>
                  今すぐ開封して指示に従ってください。
                  確認メールが届かない場合は、メールアドレスの誤記載や
                  SPAMフォルダをご確認ください。
                </v-alert>

            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>

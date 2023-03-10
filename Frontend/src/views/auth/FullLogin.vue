<script setup lang="ts">

import { ref } from "vue";

const checkbox = ref(false);
const valid = ref(true);
const show1 = ref(false);
const password = ref("");
const email = ref("");
const passwordRules = ref([
  (v: string) => !!v || "パスワードは必須です。",
  (v: string) =>
    (v && v.length >= 8) || "パスワードは8文字以上で入力してください。",
]);
const emailRules = ref([
  (v: string) => !!v || "Eメールは必須です。",
  (v: string) => /.+@.+\..+/.test(v) || "有効なEメールを正しく入力してください。",
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

<!-- Sign In  登録済の方用　ログインフォーム  -->

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
                  class="text-subtitle-1 text-high-emphasis mt-4 text-white font-weight-regular"
                >
                美しい歯で美味しく食べて健康に！<br>
                歯科医療の高度な技術を笑顔コインで応援。
                </h6>
                <v-btn
                  class="mt-6 text-capitalize"
                  size="x-large"
                  variant="outlined"
                  color="white"
                  to="/patient"
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
        <div class="ma-4 pa-sm-12">
          <v-row>
            <v-col cols="12" lg="12" xl="11" class="pl-lg-12">
              <router-link to="/" class="d-flex text-decoration-none">
                <img src="@/assets/images/logos/logo-svg.svg" />
              </router-link>
              <h2 class="font-weight-bold mt-4 text--darken-2">
                登録済の方のSign in
              </h2>
              
              <div class="text-right">
                <v-btn to="/regist" 
                  variant="outlined" size="small" color="red" 
                  class="mt-4 text-capitalize mr-4">
                  新規登録へ
                </v-btn>
                <v-btn to="/patient/opinion"
                  variant="outlined" size="small" color="secondary"
                  class="mt-4 text-capitalize">
                  アンケート回答のみ
                </v-btn>
              </div>

              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                action="/"
                class="mt-7"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Eメール"
                  class="mt-4"
                  required
                  variant="outlined"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :counter="12"
                  :rules="passwordRules"
                  label="パスワード"
                  required
                  variant="outlined"
                  type="password"
                ></v-text-field>

                <div class="d-flex align-center mb-2 mb-sm-0">
                  <v-checkbox
                    v-model="checkbox"
                    :rules="[(v) => !!v || '続行するには同意する必要があります。']"
                    label="記憶する"
                    required
                    hide-details
                  ></v-checkbox>
                  <div class="ml-4">
                    <a
                      href="/passwordrest"
                      class="text-primary text-decoration-none"
                      >パスワードを忘れた方</a
                    >
                  </div>
                </div>
                <v-btn color="primary" size="large" to="/" block class="mr-4" submit
                  >入室する・Sign In</v-btn
                >
              </v-form>
              <!-- 
                <div class="text-center mt-6">
                <div class="d-flex align-center justify-center gap-2">
                  <v-btn icon color="secondary">
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>
                  <v-btn icon color="primary">
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                </div>
              </div>
               -->
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>

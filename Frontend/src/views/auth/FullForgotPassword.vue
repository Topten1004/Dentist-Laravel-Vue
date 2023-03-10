<script setup lang="ts">

import { ref } from "vue";
/* Reset form */
import ResetPassword from '@/mycomponents/ResetForm.vue';

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

<!-- パスワードを忘れた方  再発行フォーム  -->

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
                パスワードを忘れた方
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

              <div class="pa-sm-7 pa-4">
                    <h2 class="text--darken-2 text-h4 font-weight-semibold">パスワードを再発行しますか?</h2>
                    <p class="text-subtitle-1 py-4 text-10">
                      アカウントに関連付けられている電子メール アドレスを入力してください。パスワードをリセットするためのリンクが電子メールで送信されます。
                    </p>
                    <ResetPassword />
                    <v-btn size="large" color="lightprimary" to="/login" block class="mt-5 text-primary" flat>Back to Login</v-btn>
                </div>

            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>

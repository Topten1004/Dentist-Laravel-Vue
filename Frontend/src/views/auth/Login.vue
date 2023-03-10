<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";
import ButtonsOutlined from "@/components/vuetifyComponents/buttons/ButtonsOutlined.vue";

const checkbox = ref(false);
const valid = ref(true);
const show1 = ref(false);
const password = ref("");
const email = ref("");
const passwordRules = ref([
  (v: string) => !!v || "パスワードは必須です。",
  (v: string) =>
    (v && v.length <= 8) || "パスワードは8文字以上入力してください。",
]);
const emailRules = ref([
  (v: string) => !!v || "Eメールは必須です。",
  (v: string) => /.+@.+\..+/.test(v) || "Eメールは正しく入力してください。",
]);
const display = useDisplay();
</script>
<style>
  .bg {
    background-image: url("@/assets/images/background/login_bg.jpg");
  }
</style>
<template>
  <v-container id="login" class="fill-height justify-center" tag="section">
    <v-row justify="center" class="h-100vh align-center">
      <v-col lg="11" sm="8" xl="7">
        <v-card elevation="12">
          <v-row>
            <v-col
              lg="7"
              class="bg d-none d-md-flex align-center justify-center"
            >
              <div class="d-none d-sm-block">
                <div class="d-flex align-center pa-10 v-col-8">
                  <div>
                    <h2 class="text-h4 text-white font-weight-medium">
                      <img src="@/assets/images/logos/logo_white_top_s.png" />
                    </h2>
                    <h6 class="text-subtitle-1 text-high-emphasis mt-4 mr-10 text-white font-weight-regular">
                      美しい歯で美味しく食べて健康に！<br>あなたの笑顔コインで、歯科技工士と歯科衛生士を応援しよう。
                    </h6>
                      <v-btn
                      class="mt-6 text-capitalize"
                      size="x-large"
                      variant="outlined"
                      color="white"
                      >詳細へ
                      </v-btn><br>
                      <v-btn
                      class="mt-6 text-capitalize"
                      size="x-large"
                      variant="outlined"
                      color="white"
                      >アンケート回答のみの方
                      </v-btn>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col lg="5">
              <div class="pa-5 pa-sm-12">

                <img src="@/assets/images/logos/logo_blue_top_s.png" v-if="display.smAndDown.value" />

                <h2 class="font-weight-bold mt-4 text--darken-2">Sign In</h2>
                <h6 class="text-subtitle-2">
                  会員登録済の方はこちらから入室して下さい。
                </h6>
                  <div class="text-right">
                  <v-btn to="/mypages/hygienist/questionnarie" size="small" color="secondary">
                    アンケート回答のみの方は→こちら
                  </v-btn>
                  </div>
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  action="/dashboards/analytical"
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
                    :counter="10"
                    :rules="passwordRules"
                    label="8文字以上のパスワード"
                    required
                    variant="outlined"
                    type="password"
                  ></v-text-field>

                  <div class="d-block align-center mb-4 mb-sm-0">
                    <div class="mb-4">
                      <v-btn to="/authentication/register" size="small" variant="outlined" color="error">
                        アカウントをお忘れの場合は→こちら
                      </v-btn>
                    </div>
                    <div class="ml-auto">
                      <a
                        href="javascript:void(0)"
                        class="text-primary text-decoration-none"
                        >パスワードをお忘れの場合はこちら
                      </a>
                    </div>
                    
                  </div>
                  <div>
                    <v-checkbox
                      v-model="checkbox"
                      :rules="[(v) => !!v || 'You must agree to continue!']"
                      label="端末に記録します。"
                      required
                      hide-details
                    ></v-checkbox>
                    </div>
                  <v-btn color="primary" to="/" block class="py-6" submit
                    >入室する・Sign In</v-btn
                  >
                </v-form>
                <!-- <div class="text-center mt-6">
                  <div class="d-flex align-center justify-center gap-2">
                    <v-btn icon color="primary">
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn icon color="error">
                      <v-icon>mdi-github</v-icon>
                    </v-btn>
                  </div>
                </div> -->
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";

const display = useDisplay();
</script>


<template>
        <!-- 承認前のカード -->
        <v-card>
            <v-card-item class="py-4 px-6 text-white bg-error">
              <h3 class="text-h4">承認登録</h3>
            </v-card-item>
            <v-card-text class="pa-6">
              <h5 class="text-h6 title ml-4">****さんから登録申請がありました。</h5>
              <p class="text-grey-darken-1 text-subtitle-1 mt-3">
                スタッフ申請がありました。問題がなければ速やかに承認してください。
              </p>
              <div class=" d-flex justify-center">
                <v-btn
                  variant="flat"
                  size="x-large"
                  class="mt-4 mr-4 text-white"
                  color="error">
                  承認する！
                </v-btn>
                <v-btn
                  variant="outlined"
                  size="x-large"
                  class="mt-4 mr-4 text-white"
                  color="error">
                  詳細を確認する
                </v-btn>
              </div>
            </v-card-text>
          </v-card>

        <!-- 承認後のカード -->
        <v-card>
            <v-card-item class="py-4 px-6 text-white bg-success">
              <h3 class="text-h4">承認しました！</h3>
            </v-card-item>
            <v-card-text class="pa-6">
              <h5 class="text-h6 title ml-4">
                ご承認ありがとうございました。<br>
                ****さんは、＊＊＊さんのスタッフとして登録されました。
              </h5>
              <p class="text-grey-darken-1 text-subtitle-1 mt-3">
                詳細は各一覧でご確認ください。
              </p>
              <div class=" d-flex justify-center">
                <v-btn
                  icon="mdi-check"
                  variant="flat"
                  size="x-large"
                  class="ma-2"
                  color="success">
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
</template>
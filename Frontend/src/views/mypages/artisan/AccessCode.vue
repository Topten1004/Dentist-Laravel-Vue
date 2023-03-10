<script setup lang="ts">
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";

const page = ref({ title: "アクセスコード表示画面" });
const display = useDisplay();

const revenuecards = ref([
  {
    title: "名刺発行総数",
    iconcolor: "bg-secondary",
    icon: "activity",
    number: "::349",
    unit: "枚",
  },
  {
    title: "今月の笑顔コイン獲得",
    iconcolor: "bg-warning",
    icon: "heart",
    number: "::276",
    unit: "枚",
  },
  {
    title: "笑顔コイン累積獲得数",
    iconcolor: "bg-primary",
    icon: "shopping-bag",
    number: "::795",
    unit: "枚",
  },
]);

</script>


<template>
  <v-container>
    <!-- <BaseBreadcrumb
      v-if="display.smAndUp.value"
      :title="page.title">
    </BaseBreadcrumb> -->

    <v-row class="d-flex justify-center">
      <v-col cols="12" lg="8" md="12" sm="12">
        <!-- アクセスコード表示 -->
          <v-card class="mb-2" elevation="2">
            <v-card-item class="pa-2 text-white bg-error">
              <h3 class="text-h4">アクセスコード</h3>
              <!-- <v-progress-linear color="yellow" indeterminate reverse></v-progress-linear> -->
              <v-progress-linear
                model-value="59"
                buffer-value="60"
                stream
                height="8"
                color="yellow">
              </v-progress-linear>
            </v-card-item>
            
            <v-card-text class="py-1">
              <h5 class="text-h6 title">治療・技工装置登録完了！</h5>
              <p class="text-grey-darken-1 text-subtitle-1 my-2">
              コードを名刺に記載してください。
              </p>
              <v-divider></v-divider>
              <v-row class="py-2">
                <v-col cols="12" lg="6" md="5" sm="12" xs="12" class="">{診療所名}</v-col>
                <v-col cols="12" lg="5" md="5" sm="12" xs="12" class="text-18">診察券番号：{12233}</v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row class="">
                <v-col cols="12" class="mt-2">
                  <div class="text-red"><strong>①製造/治療番号：</strong></div>
                  <div class="text-h4 d-flex justify-center">123-2345</div>
                </v-col>
                <v-divider></v-divider>
                <v-col cols="12" class="mb-4">
                  <div class="text-red"><strong>②アクセスコード：</strong></div>
                  <div class="text-h4 d-flex justify-center mb-2">1234</div>
                </v-col>
                
              </v-row>
            </v-card-text>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
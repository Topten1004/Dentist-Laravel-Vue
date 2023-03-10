<script setup lang="ts">
import { ref } from "vue";


const target_year_number = ref("");
const target_jan_number = ref("");
const target_feb_number = ref("");
const target_mar_number = ref("");
const target_apr_number = ref("");
const target_may_number = ref("");
const target_jun_number = ref("");
const target_jul_number = ref("");
const target_aug_number = ref("");
const target_sep_number = ref("");
const target_oct_number = ref("");
const target_nov_number = ref("");
const target_dec_number = ref("");

</script>

<!-- 
  医療従事者の年間目標　入力フォーム
 -->

<template>
  <div class="mx-4 mb-8">

    <v-alert
      icon="mdi-alert-outline"
      outlined
      variant="tonal"
      type="error"
      class="mb-4 caption pa-3"
      >ここにアラート情報等を記載する. 例：まだ目標値は登録されていません。</v-alert
    >
    <h6 class="text-subtitle-1 text-grey-darken-1 mb-2">
      <!-- {{ labo.name }}  -->＊＊さんの事業所内で１年間にどれだけ名刺発行できるかの目標値を事前登録しましょう。<br>
      ※この情報は、スタッフのマイページに表示されます。
    </h6>
    <v-divider class="my-4" />
      <h3 class="mb-2">
          <!-- {{ engineer.name }}  -->＊＊さんの　{{ "target_year_number" }}年 月別目標値
      </h3>
      <div class="text-caption">※目標値は、半角数字で入力してください。</div>
    <v-card-text>
      <v-divider class="mb-8"></v-divider>
      <v-row>
        <v-col cols="6" lg="2" md="2" sm="4" xs="6">
          <v-text-field v-model="target_jan_number" label="1月" variant="outlined" dense />
        </v-col>
        <v-col cols="6" lg="2" md="2" sm="4" xs="6">
          <v-text-field v-model="target_feb_number" label="2月" variant="outlined" dense />
        </v-col>
        <v-col cols="6" lg="2" md="2" sm="4" xs="6">
          <v-text-field v-model="target_mar_number" label="3月" variant="outlined" dense />
        </v-col>
        <v-col cols="6" lg="2" md="2" sm="4" xs="6">
          <v-text-field v-model="target_apr_number" label="4月" variant="outlined" dense />
        </v-col>
        <v-col cols="6" lg="2" md="2" sm="4" xs="6">
          <v-text-field v-model="target_may_number" label="5月" variant="outlined" dense />
        </v-col>
        <v-col cols="6" lg="2" md="2" sm="4" xs="6">
          <v-text-field v-model="target_jun_number" label="6月" variant="outlined" dense />
        </v-col>
        <v-col cols="6" lg="2" md="2" sm="4" xs="6">
          <v-text-field v-model="target_jul_number" label="7月" variant="outlined" dense />
        </v-col>
        <v-col cols="6" lg="2" md="2" sm="4" xs="6">
          <v-text-field v-model="target_aug_number" label="8月" variant="outlined" dense />
        </v-col>
        <v-col cols="6" lg="2" md="2" sm="4" xs="6">
          <v-text-field v-model="target_sep_number" label="9月" variant="outlined" dense />
        </v-col>
        <v-col cols="6" lg="2" md="2" sm="4" xs="6">
          <v-text-field v-model="target_oct_number" label="10月" variant="outlined" dense />
        </v-col>
        <v-col cols="6" lg="2" md="2" sm="4" xs="6">
          <v-text-field v-model="target_nov_number" label="11月" variant="outlined" dense />
        </v-col>
        <v-col cols="6" lg="2" md="2" sm="4" xs="6">
          <v-text-field v-model="target_dec_number" label="12月" variant="outlined" dense />
        </v-col>
      </v-row>
    </v-card-text>
    
    <div class="py-4 border-top text-center">
      <v-btn color="primary" class="mr-6 text-capitalize" size="large">登録する</v-btn>
      <v-btn color="secondary" dark size="large">更新する</v-btn>
    </div>
  </div>
</template>

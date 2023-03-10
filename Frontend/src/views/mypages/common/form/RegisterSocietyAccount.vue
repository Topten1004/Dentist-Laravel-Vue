<script setup lang="ts">
import { ref } from "vue";
import TermsOfService from "./TermsOfService.vue";

const password = ref("");
const show1 = ref(false);
const rules = ref({
  required: (value: string) => !!value || "必須項目です。",
  min: (v: string) => v.length >= 8 || "8文字以上で入力してください。",
  emailMatch: () => "入力したメールアドレスとパスワードが一致しません！",
});

// 未だシステムに利用登録をしていない学会団体名を表示する。
const notmembers = ref([
  "****歯科医師会",
  "＊＊＊＊歯科技工士会",
  "＊＊＊＊歯科衛生士会",
  "＊＊＊＊歯科学会"
]);

//承諾
const dialogm1 = ref("");
const dialog = ref(false);
const consent = ref(false);

</script>


<template>
  <div class="mx-8 mb-8">

    <v-alert
      icon="mdi-alert-outline"
      color="error"
      outlined
      variant="tonal"
      type="info"
      class="my-2 mb-3 caption pa-3"
      >ここにアラートや結果を表示します。。
    </v-alert>
    
    <h6 class="text-subtitle-1 text-grey-darken-1">
      学会・団体でのご利用アカウント情報を登録してください。<br>
      運営事務局から改めて管理者様宛にご案内差し上げてから、ご利用を許可します。<br>
      利用許可された管理者宛に貴会会員から所属照会通知が届きます。所属会員であれば「承認」してください。
    </h6>
    <v-row class="mt-3">
      <v-col cols="12">

      <!-- 未登録学会の一覧。利用登録済の学会・団体の場合は非表示にする。 -->
      <div>
        <small>※一覧にない場合は、問合せフォームからお知らせください。</small>
        <v-select
          :items="notmembers"
          label="学会・団体名を選択してください。"
          variant="outlined"
          bg-color="#FFF9C4"
        ></v-select>
        
      </div>

        <v-text-field label="お名前:society_name" variant="outlined"></v-text-field>
        <v-text-field label="担当者名:society_manager_name" variant="outlined"></v-text-field>
        <v-text-field label="Email:email" variant="outlined"></v-text-field>
        <v-text-field label="電話番号:society_tel" variant="outlined"></v-text-field>
        <v-text-field label="学会HP:society_url" variant="outlined"></v-text-field>
        <v-divider class="mb-8" />
        <v-text-field
        v-model="password"
        variant="outlined"
        filled
        background-color="transparent"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="パスワード:password"
        hint="半角英数字で8文字以上"
        counter
        @click:append="show1 = !show1"
        ></v-text-field>
        <div>強固なセキュリティ確保のために２段階認証の設定をお願いします。</div>
        <v-text-field label="２段階認証:two_factor_secret" variant="outlined"></v-text-field>
        <v-text-field label="２段階認証用リカバリーコード:two_factor_recovory_codes" variant="outlined"></v-text-field>
        
  <!-- 承諾 -->
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Scrollable -->
  <!-- ----------------------------------------------------------------------------- -->
      <p class="text-subtitle-1 text-grey-darken-1">
          利用規約への承諾が必要です。
      </p>
      <div class="mt-6">
        <v-dialog v-model="dialog" scrollable>
          <template v-slot:activator="{ props }">
            <v-btn color="secondary" v-bind="props"> 利用規約を参照 </v-btn>
          </template>
          <v-card>
            <v-card-title>利用規約</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 300px;width: 100%;overflow: scroll;" class="overflow-auto md:w-32">
              <terms-of-service v-model="dialogm1" column></terms-of-service>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="error" text @click="dialog = false">
                閉じる
              </v-btn>
              <v-btn color="success" text @click="consent = true">
                承諾する。
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

        <!-- 承諾 ボタン -->
        <v-switch
          v-model="consent"
          color="success"
          inset
          :label="`利用規約の承諾: ${consent.toString()}`"
        ></v-switch>
        
      </v-col>
    </v-row>

    <div class="pa-2 border-top">
      <v-btn color="primary" class="mr-2 text-capitalize">登録する</v-btn>
      <!-- <v-btn color="secondary" class="text-capitalize" dark>Cancel</v-btn> -->
    </div>
  </div>
</template>

<style>
.v-select {
    width: 70%;
}
</style>

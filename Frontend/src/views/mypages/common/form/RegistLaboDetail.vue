<script setup lang="ts">
import { ref } from "vue";
import { reactive } from "vue";
// import { Inertia } from '@inertiajs/inertia';
import SelectionControlsChkSpecialties from "@/mycomponents/SelectionControlsChkSpecialties.vue";
import SelectionControlsChkSocieties from "@/mycomponents/society-components/SelectionControlsChkSocieties.vue";
import DialogsModelNameCard from "@/mycomponents/DialogsModelNameCard.vue";
import IndexLabo from "@/views/mypages/labo/IndexLabo.vue";
import SelectionControlsRadioBgImage from "@/mycomponents/SelectionControlsRadioBgImage.vue";
import TermsOfService from "@/views/mypages/common/form/TermsOfService.vue";


const submitFunction = () => {
  IndexLabo.post('/Inertia',form)
}

const form = reactive({
labo_name: null,
labo_phonetic: null,
labo_phonetic_spelling: null,
labo_owner_name: null,
zip_code: null,
labo_address1: null,
labo_address2: null,
email: null,
email_verified_at: null,
password: null,
phone_no: null,
two_factor_secret: null,
two_factor_recovory_codes: null,
api_token: null,
consent: null,
profile_photo_path: null,
background_photo_path: null,
catchphrase: null,
speciality_labo: null,
outline: null,
website: null,
kaizen: null,
job: null,
contracted: null,
payment_id: null,
print_account: null,
print_password: null,
});

// バリデーション Laravel側で対応した方がベター？
const show1 = ref(false);
const rules = ref({
  required: (value: string) => !!value || "必須項目です",
  min: (v: string) => v.length >= 8 || "半角英数字8文字以上必要です。",
  min30: (v: string) => v.length <= 30 || "30文字以内でお願いします。",
  emailMatch: () => "メールアドレスかパスワードが間違っています。",
});


</script>

<template>
  <div class="mx-8 mb-8">
    <v-alert
      icon="mdi-alert-outline"
      outlined
      variant="tonal"
      type="info"
      class="mb-4 caption pa-3">
      ここにアラート情報等を記載する
    </v-alert>

    <div class="">歯科技工所の管理者情報入力してください。ご記入いただいた基本項目は、患者様をはじめ歯科医療機関に通知します。</div>

    <v-card-text class="pa-3">
      <v-row class="mt-1">
        <v-col cols="12" lg="6">
          <v-text-field
           v-model="form.labo_name"
           label="事業所名:"
           variant="outlined">
          </v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="form.labo_phonetic"
              label="よみがな:"
              variant="outlined">
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
          <v-text-field
            v-model="form.labo_phonetic_spelling"
            label="よみがな英語表記:"
            variant="outlined">
          </v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
          <v-text-field
            v-model="form.labo_owner_name"
            label="代表者名:"
            variant="outlined">
          </v-text-field>
          </v-col>

          <v-divider class="mt-4 mb-8"></v-divider>

          <v-col cols="4">
          <v-text-field
            v-model="form.zip_code"
            label="郵便番号:(ハイフンなし)"
            variant="outlined">
          </v-text-field>
          </v-col>
          <v-col cols="12">
          <v-text-field
            v-model="form.labo_address1"
            label="住所1:"
            variant="outlined">
          </v-text-field>
          <v-text-field
            v-model="form.labo_address2"
            label="住所2:"
            variant="outlined">
          </v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
          <v-text-field
            v-model="form.email"
            label="メール:"
            variant="outlined">
          </v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
          <v-text-field
            v-model="form.email_verified_at"
            label="メール確認:"
            variant="outlined">
          </v-text-field>
          </v-col>

          <v-col cols="12" lg="6">
          <v-text-field
            v-model="form.phone_no"
            label="携帯電話番号:"
            variant="outlined">
          </v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
          <v-text-field
            v-model="form.password"
            label="パスワード:"
            variant="outlined"
            prepend-inner-icon="mdi-lock"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            hint="8文字以上の半角英数字で入力してください。"
            counter
            @click:append="show1 = !show1">
          </v-text-field>
          </v-col>

          <v-divider class="mt-4 mb-8"></v-divider>

          <v-col cols="12">
          <v-text-field
            v-model="form.two_factor_secret"
            label="２段階認証:"
            variant="outlined"
            disabled filled
            prepend-inner-icon="mdi-lock">
          </v-text-field>
          <v-text-field
            v-model="form.two_factor_recovory_codes"
            label="２段階認証用リカバリーコード:"
            variant="outlined"
            disabled filled
            prepend-inner-icon="mdi-lock">
          </v-text-field>
          </v-col>

          <v-divider class="mt-4 mb-8"></v-divider>

          <!-- 注意：
              v-model="form.speciality_labo"
              以下専門分野は、form.speciality_labo　に梱包される内容
           -->
           <selection-controls-chk-specialties></selection-controls-chk-specialties>
           
          <v-col cols="12">
          <v-text-field
            v-model="form.catchphrase"
            label="キャッチフレーズ:(30文字以内)"
            :rules="[rules.required, rules.min30]"
            variant="outlined">
          </v-text-field>
          </v-col>

          <v-col cols="12">
          <span class="text-10">技工所の概略を記載してください。</span>
          <v-textarea
            v-model="form.outline"
            label="概要:"
            rows="5"
            variant="outlined">
          </v-textarea>
          <v-text-field
            v-model="form.website"
            label="ホームページURL:"
            placeholder="https://"
            variant="outlined">
          </v-text-field>
          <v-textarea
            v-model="form.kaizen"
            label="職場環境改善履歴"
            placeholder="例：***年※月 育児休暇制度導入"
            rows="5"
            variant="outlined">
          </v-textarea>
          <v-textarea
            v-model="form.job"
            label="求人情報:"
            rows="5"
            variant="outlined">
          </v-textarea>

          <!-- <v-text-field
            v-model="form.contracted"
            label="契約 有／無:"
            variant="outlined">
          </v-text-field>
          <v-text-field
            v-model="form.payment_id"
            label="支払情報:"
            variant="outlined">
          </v-text-field>
          <v-text-field
            v-model="form.print_account"
            label="印刷用アカウント:(総合管理者が設定します。)"
            disabled filled
            variant="outlined">
          </v-text-field>
          <v-text-field
            v-model="form.print_password"
            label="印刷用パスワード:(総合管理者が設定します。)"
            disabled filled
            variant="outlined">
          </v-text-field> -->
           
          <v-divider class="mt-4 mb-8"></v-divider>
          
          <!-- プロフィール写真  form.profile_photo_path  -->
          <v-file-input
           :v-model="form.profile_photo_path"
           accept="image/*"
           variant="outlined"
           label="事業所のプロフィール写真:">
          </v-file-input>

           <selection-controls-radio-bg-image></selection-controls-radio-bg-image>

        </v-col>
      </v-row>
    </v-card-text>
    
    <div class="py-5 border-top text-center">
      <v-btn color="primary" class="mr-6 text-capitalize" size="large">登録して次へ</v-btn>
      <v-btn color="secondary" dark size="large">更新する</v-btn>
    </div>
  </div>
</template>

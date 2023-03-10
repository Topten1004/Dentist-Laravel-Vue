<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageAdmin from "@/mycomponents/BaseTitleImageAdmin.vue";

const placetext = ref("");
const patient = ref("");
const clinic = ref("");
const labo = ref("");
const artisan = ref("");
const hygienist = ref("");
const dentist = ref("");
const society = ref("");
const admin = ref("");
const items = ref(["IT", "Blade Runner", "Thor"]);
const rules = ref({
  required: (value: string) => !!value || "Required.",
  min: (v: string) => v.length >= 8 || "Min 8 characters",
  emailMatch: () => "The email and password you entered don't match",
});
const display = useDisplay();

const page = ref({ title: "総合管理者 SendMail" });
const contents = reactive(
  {
    subtitle: "Check Your Users !..",
    url: "/egaocoin",
    btnname: "+笑顔コイン",
  },
);
</script>

<template>
<!-- PC用表示 -->
<v-container fluid>
  <v-row>
    <v-col cols="12" sm="12" md="12" lg="12">
        <BaseTitleImageAdmin
          :title="page.title"
          :subtitle="contents.subtitle"
          :url="contents.url"
          :btnname="contents.btnname">
        </BaseTitleImageAdmin>
      <v-spacer></v-spacer>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12">
  <v-card class="mb-7">
    <v-card-text class="pa-5 border-bottom">
      <h3 class="title text-h6">ユーザーへの一斉送信</h3>
      <h6 class="text-subtitle-1 text-grey-darken-1">
        送信対象をチェックしてください。<br>
        【注意】サーバーサイドのCronを用いて50通づつ5分おきに送信する。

      </h6>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-layout wrap>
            <!-- <v-flex> -->
              <v-checkbox
                v-model="admin"
                label="総合管理者へテスト送信"
                selected
                hide-details>
              </v-checkbox>
              
              <v-checkbox
                v-model="clinic"
                label="歯科医療機関"
                hide-details>
              </v-checkbox>
              <v-checkbox
                v-model="labo"
                label="歯科技工所"
                hide-details>
              </v-checkbox>
              <v-checkbox
                v-model="artisan"
                label="歯科技工士"
                hide-details>
              </v-checkbox>
              </v-layout>
              <v-layout>
              <v-checkbox
                v-model="hygienist"
                label="歯科衛生士"
                hide-details>
              </v-checkbox>
              <v-checkbox
                v-model="dentist"
                label="歯科医師"
                hide-details>
              </v-checkbox>
              <v-checkbox
                v-model="society"
                label="学会管理者"
                hide-details>
              </v-checkbox>

              <v-checkbox
                v-model="patient"
                label="患者"
                hide-details>
              </v-checkbox>
              
            <!-- </v-flex> -->
          </v-layout>
        </v-col>
      </v-row>
      <v-text-field
        v-model="placetext"
        label="title"
        placeholder="件名を記載してください。"
        variant="outlined"
        filled>
      </v-text-field>
      <v-textarea
        filled
        name="input-7-4"
        rows="8"
        label="本文"
        value
        variant="outlined">
      </v-textarea>
      
      <v-btn class="mt-5" color="secondary">送信</v-btn>
    </v-card-text>
  </v-card>
  </v-col>
  </v-row>
  </v-container>
</template>

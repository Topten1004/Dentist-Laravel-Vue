<script setup lang="ts">
import { ref, computed } from "vue";
import PaginationRounded2 from "./PaginationRounded2.vue";

const ownerscheck = ref();
const chip = ref(false);
const valid = ref(true);
const dialog = ref(false);

const search = ref("");
const clinic_name = ref("");
const phone_no = ref("");
const website = ref("");
const adress = ref("");
const img = ref("/1.jpg");
const catchphrase = ref("");
const labonameRules = ref([(v: any) => !!v || "技工所の名称は必須項目です。"]);
const websiteRules = ref([(v: any) => !!v || "website is required"]);
const medicalRules = ref([
  (v: any) => !!v || "medical is required",
  (v: string | any[]) => (v && v.length == 10) || "medical must be 10 digits",
]);

const checkbox = ref("");
const workplace = ref(["歯科医療機関", "歯科技工所"]);

// 専門分野はDBから引用
const specialty = ref(["保険診療", "自由診療", "一般歯科", "矯正歯科", "小児歯科", "口腔外科"]);
const value = ref(["保険診療", "自由診療", "一般歯科", "矯正歯科", "小児歯科", "口腔外科"]);

const medicalfilter = ref([
  {
    img: "/1.jpg",
    clinic_name: "歯科医療機関名称：：",
    website: "https//cs24.net",
    adress: "大阪府"
  },
  {
    img: "/2.jpg",
    clinic_name: "歯科医療機関名称２",
    website: "https//cs24.biz",
    adress: "大阪府大阪市"
  },
  {
    img: "/3.jpg",
    clinic_name: "歯科医療機関名称3",
    website: "https//cs24.net",
    adress: "京都府＊＊＊＊"
  },
  {
    img: "/4.jpg",
    clinic_name: "歯科医療機関名称4",
    website: "https//aaa.com",
    adress: "東京都千代田区"
  },
  {
    img: "/3.jpg",
    clinic_name: "歯科医療機関名称5",
    website: "https//aaa.com",
    adress: "東京都港区"
  },
  {
    img: "/2.jpg",
    clinic_name: "歯科医療機関名称6",
    website: "https//affaa.com",
    adress: "新潟県＊＊＊＊"
  },
  {
    img: "/1.jpg",
    clinic_name: "歯科医療機関名称7",
    website: "https//aaass.com",
    adress: "新潟県＊＊＊＊"
  },
  {
    img: "/2.jpg",
    clinic_name: "歯科医療機関名称8",
    website: "https//aavva.com",
    adress: "新潟県＊＊＊＊"
  },
  {
    img: "/3.jpg",
    clinic_name: "歯科医療機関名称9",
    website: "https//aqqaa.com",
    adress: "新潟県＊＊＊＊"
  },
]);
const form = ref();

//methods
function addMedical() {
  form.value.validate();
  if (form.value.validate(true)) {
    const medical = {
      clinic_name: clinic_name.value,
      website: website.value,
      img: img.value,
      adress: adress.value,
    };
    medicalfilter.value.unshift(medical);
    clinic_name.value = "";
    website.value = "";
    img.value = "";
  }
}

// Computed

const validName = computed(() => {
  return clinic_name.value.length > 0;
});
const medicalgrids = computed(() => {
  return medicalfilter.value.filter(
    (medicalgrid) =>
      medicalgrid.clinic_name
        .toLowerCase()
        .includes(search.value.toLowerCase()) ||
      medicalgrid.website.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>


<!-- 【注意】 -->
<!-- 　とりあえず部品を設置した。キーワード＋dialogで検索させるか、設置すやすい方法を採用する。 -->
<!-- 　検索対象は、歯科医療機関（歯科医院：clinic）と歯科技工所(Labo) 、名称、住所、専門分野。-->
<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5">
      <v-row justify="space-between">
        <v-col cols="12" lg="6">
          <label>検索対象</label>
          <v-radio-group row class="mb-0 mt-2">
            <v-radio label="歯科医療機関（医院・クリニック）" color="info" value="clinic"></v-radio>
            <v-radio label="歯科技工所" color="info" value="labo"></v-radio>
          </v-radio-group>
          <v-text-field
            v-model="search"
            prepend-inner-icon="mdi-magnify"
            label="名称等のキーワードで検索する"
            variant="outlined"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" class="justify-start align-end d-flex">
          <v-dialog v-model="dialog" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
              <v-btn color="secondary" v-bind="props">検索..</v-btn>
            </template>
            <v-card>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-title class="pa-4 bg-secondary">
                  <span class="title text-white">検索</span>
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" class="px-4 mt-8">
                        <v-select
                          :items="workplace"
                          label="検索対象"
                          variant="outlined">
                        </v-select>
                      
                        <v-text-field
                          label="歯科医療機関名称"
                          :rules="websiteRules"
                          v-model="clinic_name"
                          variant="outlined"
                          required>
                        </v-text-field>
                      
                        <v-text-field
                          label="歯科技工所名称"
                          :rules="labonameRules"
                          v-model="adress"
                          variant="outlined"
                          required>
                        </v-text-field>
                      
                        <v-select
                          v-model="value"
                          :items="specialty"
                          multiple
                          attach
                          label="専門分野"
                          variant="outlined">
                        </v-select>
                    
                        <v-checkbox
                          v-model="checkbox"
                          hide-details
                          label="求人情報あり"
                          color="success"
                          class="mt-0">
                        </v-checkbox>
                    </v-col>
                    
                  </v-row>
                </v-card-text>
                <v-card-actions class="pa-4 pt-0 d-flex justify-center">
                  <!-- <v-spacer></v-spacer> -->
                  <div>
                    <v-btn color="error" @click="dialog = false" class="mr-4">閉じる</v-btn>
                    <v-btn
                      color="success"
                      size="x-large"
                      :disabled="catchphrase == ''"
                      @click="addMedical"
                      variant="flat">
                      検索する
                    </v-btn>
                  </div>
                  
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="ma-2">
      <p class="ml-2">
        登録されている医療機関情報一覧です。画像をクリックして詳細をご参照ください。<br>
        【製作上の注意】→ 歯科医院:clinic と歯科技工所:laboも検索対象とする。
      </p>
    </div>

  </v-card>

    <!-- 患者さんへのアラート表示　未ログイン、名刺情報未登録の場合 -->
    <v-row>
      <v-col cols="12">
        <v-alert
          icon="mdi-alert-outline"
          variant="tonal"
          type="error"
          class="my-2 mb-3 caption pa-3">
          【製作上の注意】→ 歯科医院:clinic と歯科技工所:laboも検索対象とする。
            現在登録されたデータはありません。治療後に名刺を受け取った患者さんは、ログインして名刺情報を登録してください。
        </v-alert>
      </v-col>
    </v-row>

  <v-row justify="center">
    <v-col
      cols="12"
      sm="6"
      lg="4"
      v-for="(medicalgrid, index) in medicalgrids"
      :key="index"
    >
      <v-card>
        <!-- <router-link to="./medicaldetail"> -->
          <v-img
                :src="'/src/assets/images/medicals' + medicalgrid.img"
                alt="歯科医療機関名"
                class=""
                :aspect-ratio="1"
                cover
              />
        <!-- </router-link> -->
        <v-card-text class="pa-5 text-center">
         
          <h4 class="title h4 mt-3 mb-0">{{ medicalgrid.clinic_name }}</h4>
          <small class="">HP {{ medicalgrid.website }}</small>

            <!-- 医療機関　詳細情報へ。clinic と　labo で分岐させ　/labodetail などを表示させる？ 要検討。-->
              <div class="text-center mt-3">
                <v-btn to="/mypages/clinic/profile">
                  <v-icon start icon="mdi-server-plus"></v-icon>
                  詳細へ
                </v-btn>
              </div>

          <div class="mt-3 pt-3">
            <address class="subtitle-2">
              ここに住所情報を記載
            </address>
          </div>
        </v-card-text>


      </v-card>
    </v-col>
  </v-row>
  <PaginationRounded2 />
</template>


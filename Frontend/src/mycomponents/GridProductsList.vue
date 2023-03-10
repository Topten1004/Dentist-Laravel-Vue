<script setup lang="ts">
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import PaginationRounded2 from "./PaginationRounded2.vue";

const ownerscheck = ref();
const chip = ref(false);
const valid = ref(true);
const dialog = ref(false);

const search = ref("");
const clinic_name = ref("");
const phone_no = ref("");
const created_at = ref("");
const img = ref("/1.jpg");
const catchphrase = ref("");
const labonameRules = ref([(v: any) => !!v || "技工所の名称は必須項目です。"]);
const created_atRules = ref([(v: any) => !!v || "created_at is required"]);
const productRules = ref([
  (v: any) => !!v || "product is required",
  (v: string | any[]) => (v && v.length == 10) || "product must be 10 digits",
]);
const productfilter = ref([
  {
    img: "/1.jpg",
    clinic_name: "歯科医療機関名称：：",
    created_at: "2022/1/9",
  },
  {
    img: "/2.jpg",
    clinic_name: "歯科医療機関名称２",
    created_at: "2022/1/8",
  },
  {
    img: "/3.jpg",
    clinic_name: "歯科医療機関名称3",
    created_at: "2022/1/7",
  },
  {
    img: "/4.jpg",
    clinic_name: "歯科医療機関名称4",
    created_at: "2022/1/6",
  },
  {
    img: "/3.jpg",
    clinic_name: "歯科医療機関名称5",
    created_at: "2022/1/6",
  },
  {
    img: "/2.jpg",
    clinic_name: "歯科医療機関名称6",
    created_at: "2022/1/5",
  },
  {
    img: "/1.jpg",
    clinic_name: "歯科医療機関名称7",
    created_at: "2022/1/4",
  },
  {
    img: "/2.jpg",
    clinic_name: "歯科医療機関名称8",
    created_at: "2022/1/3",
  },
  {
    img: "/3.jpg",
    clinic_name: "歯科医療機関名称9",
    created_at: "2022/1/2",
  },
]);
const form = ref();

//methods
function addProduct() {
  form.value.validate();
  if (form.value.validate(true)) {
    const product = {
      clinic_name: clinic_name.value,
      created_at: created_at.value,
      img: img.value,
    };
    productfilter.value.unshift(product);
    clinic_name.value = "";
    created_at.value = "";
    img.value = "";
  }
}

// Computed

const validName = computed(() => {
  return clinic_name.value.length > 0;
});
const productgrids = computed(() => {
  return productfilter.value.filter(
    (productgrid) =>
      productgrid.clinic_name
        .toLowerCase()
        .includes(search.value.toLowerCase()) ||
      productgrid.created_at.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5">
      <v-row justify="space-between">
        <v-col cols="12" lg="4">
          <v-text-field
            v-model="search"
            prepend-inner-icon="mdi-magnify"
            label="検索する"
            variant="outlined"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="4" class="justify-end align-center d-flex">
          <v-dialog v-model="dialog" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
              <v-btn color="secondary" v-bind="props">検索</v-btn>
            </template>
            <v-card>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-title class="pa-4 bg-secondary">
                  <span class="title text-white">検索</span>
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" sm="12" lg="12">
                      <v-text-field
                        type="string"
                        label="登録日"
                        :rules="productRules"
                        :counter="10"
                        v-model="phone_no"
                        variant="outlined"
                        class="mt-4"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" lg="12">
                      <v-text-field
                        label="歯科医院名"
                        :rules="created_atRules"
                        v-model="created_at"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" lg="12" class="pa-4">
                      <v-text-field
                        label="技工所名称"
                        :rules="labonameRules"
                        v-model="clinic_name"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>
                    
                  </v-row>
                </v-card-text>
                <v-card-actions class="pa-4 pt-0">
                  <v-spacer></v-spacer>
                  <v-btn color="error" @click="dialog = false">閉じる</v-btn>
                  <v-btn
                    color="success"
                    :disabled="catchphrase == ''"
                    @click="addProduct"
                    variant="tonal"
                    >検索する</v-btn
                  >
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="ma-2">
      <p class="ml-2">
        製作・登録済の技工装置及び治療情報一覧です。画像をクリックして詳細をご参照ください。
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
            現在登録されたデータはありません。治療後に名刺を受け取った患者さんは、ログインして名刺情報を登録してください。
        </v-alert>
      </v-col>
    </v-row>

  <v-row justify="center">
    <v-col
      cols="12"
      sm="6"
      lg="4"
      v-for="(productgrid, index) in productgrids"
      :key="index"
    >
      <v-card>
        <!-- <router-link to="./productdetail"> -->
          <v-img
                :src="'/src/assets/images/products' + productgrid.img"
                alt="技工装置"
                class=""
                :aspect-ratio="1"
                cover
              />
        <!-- </router-link> -->
        <v-card-text class="pa-5 text-center">
         
          <h4 class="title h4 mt-3 mb-0">{{ productgrid.clinic_name }}</h4>
          <small class="">登録日：{{ productgrid.created_at }}</small>

            <!-- 技工装置情報へ。 -->
              <div class="text-center mt-3">
                <v-btn to="./productdetail">
                  <v-icon start icon="mdi-server-plus"></v-icon>
                  詳細へ
                </v-btn>
              </div>

          <div class="mt-3 pt-3">
            <address class="subtitle-2">
              技工所名：＊＊＊＊＊
            </address>
          </div>
        </v-card-text>


      </v-card>
    </v-col>
  </v-row>
  <PaginationRounded2 />
</template>

